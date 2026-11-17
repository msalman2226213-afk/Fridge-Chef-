import { createServerFn } from "@tanstack/react-start";
import type { AiRecipe } from "@/lib/store";

type LangCode = "ur" | "hi" | "en";

const LANG_LINE: Record<LangCode, string> = {
  ur: "Write every title, summary, step, and ingredient name in simple Urdu, using Urdu script.",
  hi: "Write every title, summary, step, and ingredient name in simple Hindi, using Devanagari.",
  en: "Write every title, summary, step, and ingredient name in clear English.",
};

function clampLang(value: unknown): LangCode {
  return value === "hi" || value === "en" || value === "ur" ? value : "ur";
}

function asRecipes(text: string): AiRecipe[] {
  const cleaned = text.trim().replace(/^```(?:json)?/i, "").replace(/```$/i, "");
  const start = cleaned.indexOf("{");
  const end = cleaned.lastIndexOf("}");
  if (start < 0 || end <= start) return [];
  const parsed = JSON.parse(cleaned.slice(start, end + 1)) as { recipes?: unknown };
  if (!Array.isArray(parsed.recipes)) return [];
  const recipes: AiRecipe[] = [];
  for (const row of parsed.recipes.slice(0, 2)) {
    if (!row || typeof row !== "object") continue;
    const item = row as Record<string, unknown>;
    const title = String(item.title ?? "").trim().slice(0, 80);
    const summary = String(item.summary ?? "").trim().slice(0, 180);
    const steps = Array.isArray(item.steps)
      ? item.steps.map((step) => String(step).trim()).filter(Boolean).slice(0, 6)
      : [];
    const uses = Array.isArray(item.uses)
      ? item.uses.map((use) => String(use).trim()).filter(Boolean).slice(0, 12)
      : [];
    const minutes = Math.max(5, Math.min(180, Number(item.minutes) || 30));
    const servings = Math.max(1, Math.min(12, Number(item.servings) || 2));
    if (!title || steps.length < 3) continue;
    recipes.push({ title, summary, steps, uses, minutes, servings });
  }
  return recipes;
}

async function complete(apiKey: string, body: Record<string, unknown>) {
  return fetch("https://api.x.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${apiKey}`,
    },
    body: JSON.stringify(body),
  });
}

export const suggestRecipes = createServerFn({ method: "POST" })
  .validator((input: { ingredients?: string[]; lang?: string }) => {
    const ingredients = (input?.ingredients ?? [])
      .map((item) => String(item).trim().slice(0, 48))
      .filter(Boolean)
      .slice(0, 40);
    return { ingredients, lang: clampLang(input?.lang) };
  })
  .handler(async ({ data }): Promise<{ ok: true; recipes: AiRecipe[] } | { ok: false; error: string }> => {
    if (data.ingredients.length === 0) return { ok: false, error: "empty" };
    const apiKey = process.env.XAI_API_KEY;
    if (!apiKey) return { ok: false, error: "unavailable" };

    const payload = {
      model: "grok-4.5",
      temperature: 0.6,
      max_tokens: 900,
      messages: [
        {
          role: "system",
          content:
            "You are a practical South Asian home cook. Return only JSON with the shape " +
            '{"recipes":[{"title":"","minutes":30,"servings":2,"summary":"","steps":["","",""],"uses":[""]}]}. ' +
            "Give exactly 2 recipes. Use mostly the listed ingredients. Do not require rare items. " +
            "Water is always allowed. Salt and cooking oil are allowed only if needed. " +
            "Each recipe needs 4 to 6 short steps.",
        },
        {
          role: "user",
          content: `${LANG_LINE[data.lang]}\nIngredients on hand: ${data.ingredients.join(", ")}`,
        },
      ],
    };

    let res = await complete(apiKey, { ...payload, response_format: { type: "json_object" } });
    if (res.status === 400) res = await complete(apiKey, payload);
    if (!res.ok) return { ok: false, error: "failed" };

    const body = (await res.json()) as { choices?: { message?: { content?: string } }[] };
    const text = body.choices?.[0]?.message?.content ?? "";
    try {
      const recipes = asRecipes(text);
      if (recipes.length === 0) return { ok: false, error: "failed" };
      return { ok: true, recipes };
    } catch {
      return { ok: false, error: "failed" };
    }
  });
