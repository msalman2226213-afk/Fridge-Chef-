import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";
import type { Lang } from "@/lib/i18n";

export type AiRecipe = {
  title: string;
  minutes: number;
  servings: number;
  summary: string;
  steps: string[];
  uses: string[];
};

export type AiCache = { sig: string; recipes: AiRecipe[] };

type FridgeState = {
  owned: string[];
  custom: string[];
  lang: Lang;
  favorites: string[];
  aiCache: AiCache | null;
  toggle: (id: string) => void;
  addMany: (ids: string[]) => void;
  toggleSpiceSet: (ids: string[]) => void;
  clearOwned: () => void;
  addCustom: (name: string) => void;
  removeCustom: (name: string) => void;
  setLang: (lang: Lang) => void;
  toggleFavorite: (id: string) => void;
  setAiCache: (cache: AiCache | null) => void;
};

const memoryStorage = {
  getItem: () => null,
  setItem: () => {},
  removeItem: () => {},
};

export const useFridge = create<FridgeState>()(
  persist(
    (set) => ({
      owned: [],
      custom: [],
      lang: "ur",
      favorites: [],
      aiCache: null,
      toggle: (id) =>
        set((s) => ({
          owned: s.owned.includes(id) ? s.owned.filter((x) => x !== id) : [...s.owned, id],
        })),
      addMany: (ids) => set((s) => ({ owned: [...new Set([...s.owned, ...ids])] })),
      toggleSpiceSet: (ids) =>
        set((s) => {
          const allOn = ids.every((id) => s.owned.includes(id));
          return {
            owned: allOn
              ? s.owned.filter((id) => !ids.includes(id))
              : [...new Set([...s.owned, ...ids])],
          };
        }),
      clearOwned: () => set({ owned: [], custom: [] }),
      addCustom: (name) => {
        const clean = name.trim().slice(0, 32);
        if (!clean) return;
        set((s) => {
          if (s.custom.includes(clean) || s.custom.length >= 12) return s;
          return { custom: [...s.custom, clean] };
        });
      },
      removeCustom: (name) => set((s) => ({ custom: s.custom.filter((x) => x !== name) })),
      setLang: (lang) => set({ lang }),
      toggleFavorite: (id) =>
        set((s) => ({
          favorites: s.favorites.includes(id)
            ? s.favorites.filter((x) => x !== id)
            : [...s.favorites, id],
        })),
      setAiCache: (aiCache) => set({ aiCache }),
    }),
    {
      name: "fridge-chef-v1",
      storage: createJSONStorage(() =>
        typeof window === "undefined" ? memoryStorage : localStorage,
      ),
      partialize: (s) => ({
        owned: s.owned,
        custom: s.custom,
        lang: s.lang,
        favorites: s.favorites,
        aiCache: s.aiCache,
      }),
    },
  ),
);
