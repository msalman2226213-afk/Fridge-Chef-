export const LANGS = ["ur", "hi", "en"] as const;
export type Lang = (typeof LANGS)[number];

export type Copy = {
  name: string;
  kicker: string;
  tagline: string;
  language: string;
  fridge: string;
  recipes: string;
  search: string;
  addCustom: string;
  add: string;
  clear: string;
  spicesOn: string;
  spicesOff: string;
  ready: string;
  short: (n: number) => string;
  minutes: string;
  people: string;
  method: string;
  ask: string;
  asking: string;
  again: string;
  aiKicker: string;
  aiHint: string;
  emptyFridge: string;
  noMatch: string;
  uses: string;
  optional: string;
  missing: string;
  favorites: string;
  favOn: string;
  favOff: string;
  aiFail: string;
  aiOff: string;
  aiEmpty: string;
  placeholder: string;
  selected: (n: number) => string;
  readyCount: (n: number) => string;
  groups: Record<string, string>;
  presets: Record<string, string>;
  filters: { all: string; ready: string; near: string };
  open: string;
  close: string;
};

const ur: Copy = {
  name: "فریج شیف",
  kicker: "گھر کا باورچی",
  tagline: "فریج میں جو پڑا ہے، اسی سے بتاتا ہے کیا پک سکتا ہے۔",
  language: "زبان",
  fridge: "فریج",
  recipes: "ترکیبیں",
  search: "چیز تلاش کریں",
  addCustom: "اپنی چیز",
  add: "شامل کریں",
  clear: "سب ہٹائیں",
  spicesOn: "مصالحے ہٹاؤ",
  spicesOff: "مصالحے موجود ہیں",
  ready: "تیار",
  short: (n) => `${n} کمی`,
  minutes: "منٹ",
  people: "افراد",
  method: "طریقہ",
  ask: "شیف سے نئی ترکیب",
  asking: "شیف سوچ رہا ہے…",
  again: "دوبارہ پوچھیں",
  aiKicker: "شیف کی تازہ تجویز",
  aiHint: "منتخب چیزوں سے دو نئی گھریلو ترکیبیں۔",
  emptyFridge: "فریج خالی ہے۔ چیزیں چنیں، یا نیچے سے ایک تیار سیٹ لگائیں۔",
  noMatch: "ان چیزوں سے قریبی ترکیب نہیں بنی۔ کچھ اور شامل کریں، یا شیف سے پوچھیں۔",
  uses: "ان میں سے",
  optional: "ہو تو اچھا",
  missing: "یہ نہیں ہے",
  favorites: "پسندیدہ",
  favOn: "پسند سے ہٹائیں",
  favOff: "پسند میں رکھیں",
  aiFail: "شیف ابھی جواب نہیں دے سکا۔ تیار ترکیبیں نیچے موجود ہیں۔",
  aiOff: "نئی تجویز اس وقت بند ہے۔ تیار ترکیبیں چل رہی ہیں۔",
  aiEmpty: "پہلے فریج میں کم از کم ایک چیز رکھیں۔",
  placeholder: "مثلاً کریم، سویا ساس",
  selected: (n) => `${n} چیزیں منتخب`,
  readyCount: (n) =>
    n === 0 ? "ابھی کوئی مکمل ترکیب نہیں" : `${n} ترکیبیں ابھی بن سکتی ہیں`,
  groups: {
    veg: "سبزیاں",
    protein: "گوشت اور انڈے",
    dairy: "دودھ",
    grain: "اناج",
    spice: "مصالحے",
    other: "دیگر",
  },
  presets: {
    breakfast: "ناشتہ",
    dal: "دال چاول",
    karahi: "کڑاہی",
    veg: "سبزی",
  },
  filters: { all: "سب قریبی", ready: "مکمل", near: "تھوڑی کمی" },
  open: "طریقہ کھولیں",
  close: "طریقہ بند کریں",
};

const hi: Copy = {
  name: "फ्रिज शेफ",
  kicker: "घर का रसोइया",
  tagline: "फ्रिज में जो पड़ा है, उसी से बताता है क्या बन सकता है।",
  language: "भाषा",
  fridge: "फ्रिज",
  recipes: "रेसिपी",
  search: "चीज़ खोजें",
  addCustom: "अपनी चीज़",
  add: "जोड़ें",
  clear: "सब हटाएँ",
  spicesOn: "मसाले हटाएँ",
  spicesOff: "मसाले मौजूद हैं",
  ready: "तैयार",
  short: (n) => `${n} कमी`,
  minutes: "मिनट",
  people: "लोग",
  method: "तरीक़ा",
  ask: "शेफ से नई रेसिपी",
  asking: "शेफ सोच रहा है…",
  again: "फिर पूछें",
  aiKicker: "शेफ की ताज़ा सलाह",
  aiHint: "चुनी हुई चीज़ों से दो नई घरेलू रेसिपी।",
  emptyFridge: "फ्रिज खाली है। चीज़ें चुनें, या नीचे से एक तैयार सेट लगाएँ।",
  noMatch: "इन चीज़ों से नज़दीकी रेसिपी नहीं बनी। कुछ और जोड़ें, या शेफ से पूछें।",
  uses: "इनमें से",
  optional: "हो तो अच्छा",
  missing: "यह नहीं है",
  favorites: "पसंदीदा",
  favOn: "पसंद से हटाएँ",
  favOff: "पसंद में रखें",
  aiFail: "शेफ अभी जवाब नहीं दे सका। तैयार रेसिपी नीचे हैं।",
  aiOff: "नई सलाह अभी बंद है। तैयार रेसिपी चल रही हैं।",
  aiEmpty: "पहले फ्रिज में कम से कम एक चीज़ रखें।",
  placeholder: "जैसे क्रीम, सोया सॉस",
  selected: (n) => `${n} चीज़ें चुनीं`,
  readyCount: (n) =>
    n === 0 ? "अभी कोई पूरी रेसिपी नहीं" : `${n} रेसिपी अभी बन सकती हैं`,
  groups: {
    veg: "सब्ज़ियाँ",
    protein: "गोश्त और अंडे",
    dairy: "दूध",
    grain: "अनाज",
    spice: "मसाले",
    other: "अन्य",
  },
  presets: {
    breakfast: "नाश्ता",
    dal: "दाल चावल",
    karahi: "कड़ाही",
    veg: "सब्ज़ी",
  },
  filters: { all: "सब नज़दीकी", ready: "पूरी", near: "थोड़ी कमी" },
  open: "तरीक़ा खोलें",
  close: "तरीक़ा बंद करें",
};

const en: Copy = {
  name: "Fridge Chef",
  kicker: "The home cook",
  tagline: "Tell it what is in the fridge. It tells you what you can cook.",
  language: "Language",
  fridge: "Fridge",
  recipes: "Recipes",
  search: "Find an ingredient",
  addCustom: "Your own item",
  add: "Add",
  clear: "Clear all",
  spicesOn: "Remove spices",
  spicesOff: "Spices are in",
  ready: "Ready",
  short: (n) => `${n} short`,
  minutes: "min",
  people: "people",
  method: "Method",
  ask: "Ask the chef",
  asking: "The chef is thinking…",
  again: "Ask again",
  aiKicker: "A fresh idea from the chef",
  aiHint: "Two new home recipes from what you picked.",
  emptyFridge: "The fridge is empty. Pick ingredients, or load a set below.",
  noMatch: "Nothing close with this mix. Add a few more items, or ask the chef.",
  uses: "Uses",
  optional: "Nice if you have it",
  missing: "Missing",
  favorites: "Saved",
  favOn: "Remove from saved",
  favOff: "Save recipe",
  aiFail: "The chef could not answer just now. The ready recipes below still work.",
  aiOff: "Fresh ideas are unavailable right now. The ready recipes still work.",
  aiEmpty: "Put at least one thing in the fridge first.",
  placeholder: "e.g. cream, soy sauce",
  selected: (n) => `${n} selected`,
  readyCount: (n) =>
    n === 0 ? "Nothing is complete yet" : `${n} recipes you can cook now`,
  groups: {
    veg: "Vegetables",
    protein: "Meat and eggs",
    dairy: "Dairy",
    grain: "Grains",
    spice: "Spices",
    other: "Other",
  },
  presets: {
    breakfast: "Breakfast",
    dal: "Dal & rice",
    karahi: "Karahi",
    veg: "Vegetables",
  },
  filters: { all: "Closest", ready: "Complete", near: "Almost" },
  open: "Show method",
  close: "Hide method",
};

export const copy: Record<Lang, Copy> = { ur, hi, en };

export const LANG_LABEL: Record<Lang, string> = {
  ur: "اردو",
  hi: "हिंदी",
  en: "English",
};
