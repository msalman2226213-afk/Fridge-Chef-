import type { Lang } from "@/lib/i18n";

export type GroupId = "veg" | "protein" | "dairy" | "grain" | "spice" | "other";

type L = Record<Lang, string>;

export type Ingredient = {
  id: string;
  group: GroupId;
  name: L;
};

export type Recipe = {
  id: string;
  minutes: number;
  servings: number;
  needs: string[];
  optional: string[];
  title: L;
  blurb: L;
  steps: Record<Lang, string[]>;
};

export const GROUP_ORDER: GroupId[] = ["veg", "protein", "dairy", "grain", "spice", "other"];

export const ingredients: Ingredient[] = [
  { id: "onion", group: "veg", name: { ur: "پیاز", hi: "प्याज़", en: "Onion" } },
  { id: "tomato", group: "veg", name: { ur: "ٹماٹر", hi: "टमाटर", en: "Tomato" } },
  { id: "potato", group: "veg", name: { ur: "آلو", hi: "आलू", en: "Potato" } },
  { id: "garlic", group: "veg", name: { ur: "لہسن", hi: "लहसुन", en: "Garlic" } },
  { id: "ginger", group: "veg", name: { ur: "ادرک", hi: "अदरक", en: "Ginger" } },
  { id: "chili", group: "veg", name: { ur: "ہری مرچ", hi: "हरी मिर्च", en: "Green chili" } },
  { id: "coriander", group: "veg", name: { ur: "دھنیا", hi: "धनिया", en: "Coriander" } },
  { id: "spinach", group: "veg", name: { ur: "پالک", hi: "पालक", en: "Spinach" } },
  { id: "peas", group: "veg", name: { ur: "مٹر", hi: "मटर", en: "Peas" } },
  { id: "carrot", group: "veg", name: { ur: "گاجر", hi: "गाजर", en: "Carrot" } },
  { id: "capsicum", group: "veg", name: { ur: "شملہ مرچ", hi: "शिमला मिर्च", en: "Capsicum" } },
  { id: "lemon", group: "veg", name: { ur: "لیموں", hi: "नींबू", en: "Lemon" } },
  { id: "okra", group: "veg", name: { ur: "بھنڈی", hi: "भिंडी", en: "Okra" } },
  { id: "eggplant", group: "veg", name: { ur: "بینگن", hi: "बैंगन", en: "Eggplant" } },
  { id: "mint", group: "veg", name: { ur: "پودینہ", hi: "पुदीना", en: "Mint" } },
  { id: "chicken", group: "protein", name: { ur: "مرغی", hi: "चिकन", en: "Chicken" } },
  { id: "mutton", group: "protein", name: { ur: "بکرے کا گوشت", hi: "मटन", en: "Mutton" } },
  { id: "mince", group: "protein", name: { ur: "قیمہ", hi: "कीमा", en: "Mince" } },
  { id: "eggs", group: "protein", name: { ur: "انڈے", hi: "अंडे", en: "Eggs" } },
  { id: "fish", group: "protein", name: { ur: "مچھلی", hi: "मछली", en: "Fish" } },
  { id: "milk", group: "dairy", name: { ur: "دودھ", hi: "दूध", en: "Milk" } },
  { id: "yogurt", group: "dairy", name: { ur: "دہی", hi: "दही", en: "Yogurt" } },
  { id: "butter", group: "dairy", name: { ur: "مکھن", hi: "मक्खन", en: "Butter" } },
  { id: "paneer", group: "dairy", name: { ur: "پنیر", hi: "पनीर", en: "Paneer" } },
  { id: "rice", group: "grain", name: { ur: "چاول", hi: "चावल", en: "Rice" } },
  { id: "flour", group: "grain", name: { ur: "آٹا", hi: "आटा", en: "Flour" } },
  { id: "bread", group: "grain", name: { ur: "بریڈ", hi: "ब्रेड", en: "Bread" } },
  { id: "masoor", group: "grain", name: { ur: "مسور دال", hi: "मसूर दाल", en: "Red lentils" } },
  { id: "chickpeas", group: "grain", name: { ur: "چنے", hi: "छोले", en: "Chickpeas" } },
  { id: "noodles", group: "grain", name: { ur: "نوڈلز", hi: "नूडल्स", en: "Noodles" } },
  { id: "oil", group: "spice", name: { ur: "تیل", hi: "तेल", en: "Oil" } },
  { id: "salt", group: "spice", name: { ur: "نمک", hi: "नमक", en: "Salt" } },
  { id: "turmeric", group: "spice", name: { ur: "ہلدی", hi: "हल्दी", en: "Turmeric" } },
  { id: "chili-powder", group: "spice", name: { ur: "سرخ مرچ", hi: "लाल मिर्च", en: "Red chili" } },
  { id: "cumin", group: "spice", name: { ur: "زیرہ", hi: "जीरा", en: "Cumin" } },
  { id: "garam", group: "spice", name: { ur: "گرم مصالحہ", hi: "गरम मसाला", en: "Garam masala" } },
  { id: "sugar", group: "spice", name: { ur: "چینی", hi: "चीनी", en: "Sugar" } },
  { id: "tea", group: "other", name: { ur: "چائے پتی", hi: "चाय पत्ती", en: "Tea leaves" } },
];

const byId = new Map(ingredients.map((item) => [item.id, item]));

export function ingredientName(id: string, lang: Lang) {
  return byId.get(id)?.name[lang] ?? id;
}

export const SPICE_IDS = ingredients.filter((item) => item.group === "spice").map((item) => item.id);

export const presets: { id: string; items: string[] }[] = [
  {
    id: "breakfast",
    items: ["eggs", "onion", "tomato", "bread", "milk", "chili", "oil", "salt", "sugar", "butter"],
  },
  {
    id: "dal",
    items: ["masoor", "rice", "onion", "tomato", "turmeric", "cumin", "oil", "salt", "ginger", "garlic"],
  },
  {
    id: "karahi",
    items: ["chicken", "tomato", "ginger", "garlic", "chili", "oil", "salt", "coriander", "garam", "yogurt"],
  },
  {
    id: "veg",
    items: ["potato", "onion", "tomato", "peas", "carrot", "spinach", "oil", "salt", "turmeric", "cumin", "rice"],
  },
];

function r(
  id: string,
  minutes: number,
  servings: number,
  needs: string[],
  optional: string[],
  title: L,
  blurb: L,
  steps: Record<Lang, string[]>,
): Recipe {
  return { id, minutes, servings, needs, optional, title, blurb, steps };
}

export const recipes: Recipe[] = [
  r(
    "anda-bhurji",
    15,
    2,
    ["eggs", "onion", "tomato", "chili", "oil", "salt"],
    ["coriander"],
    { ur: "انڈے کی بھجی", hi: "अंडे की भुर्जी", en: "Egg bhurji" },
    {
      ur: "نرم انڈے، پیاز اور ٹماٹر کے ساتھ جلدی ناشتہ۔",
      hi: "नरम अंडे, प्याज़ और टमाटर के साथ जल्दी नाश्ता।",
      en: "Soft scrambled eggs with onion and tomato.",
    },
    {
      ur: [
        "پیاز، ٹماٹر اور ہری مرچ باریک کاٹ لیں۔",
        "تیل گرم کر کے پیاز نرم کریں، پھر ٹماٹر اور مرچ ڈال کر گلا لیں۔",
        "انڈے نمک کے ساتھ پھینٹ کر ڈالیں اور ہلکی آنچ پر ہلاتے رہیں۔",
        "بس جم جائیں، زیادہ خشک نہ کریں۔ دھنیا ہو تو آخر میں چھڑکیں۔",
      ],
      hi: [
        "प्याज़, टमाटर और हरी मिर्च बारीक काट लें।",
        "तेल गरम कर प्याज़ नरम करें, फिर टमाटर और मिर्च डालकर गला लें।",
        "अंडे नमक के साथ फेंटकर डालें और धीमी आँच पर हिलाते रहें।",
        "जरा से सेट हों तो उतार लें। धनिया हो तो आखिर में डालें।",
      ],
      en: [
        "Chop the onion, tomato, and chili.",
        "Soften the onion in oil, then cook the tomato and chili down.",
        "Pour in eggs beaten with salt and stir on low heat.",
        "Stop when just set. Add coriander if you have it.",
      ],
    },
  ),
  r(
    "omelette",
    12,
    2,
    ["eggs", "onion", "chili", "oil", "salt"],
    ["tomato", "coriander"],
    { ur: "مسالہ آملیٹ", hi: "मसाला ऑमलेट", en: "Masala omelette" },
    {
      ur: "پتلے آملیٹ، روٹی یا بریڈ کے ساتھ۔",
      hi: "पतला ऑमलेट, रोटी या ब्रेड के साथ।",
      en: "A thin masala omelette for bread or roti.",
    },
    {
      ur: [
        "انڈے، کٹا پیاز، مرچ اور نمک ملا لیں۔ ٹماٹر ہو تو وہ بھی۔",
        "پین میں تیل کی ہلکی تہ لگائیں اور مکسچر پھیلا دیں۔",
        "کنارے جم جائیں تو آہستہ پلٹیں یا آدھا موڑ دیں۔",
        "دونوں طرف ہلکا سنہرا ہو تو اتار لیں۔",
      ],
      hi: [
        "अंडे, कटा प्याज़, मिर्च और नमक मिला लें। टमाटर हो तो वह भी।",
        "पैन में तेल की पतली तह लगाकर मिश्रण फैला दें।",
        "किनारे सेट हों तो धीरे पलटें या आधा मोड़ दें।",
        "दोनों तरफ़ हल्का सुनहरा हो तो उतार लें।",
      ],
      en: [
        "Beat eggs with chopped onion, chili, and salt. Add tomato if you have it.",
        "Film a pan with oil and spread the mix thin.",
        "When the edges set, flip or fold it.",
        "Take it off when both sides are lightly golden.",
      ],
    },
  ),
  r(
    "aloo-bhujia",
    25,
    3,
    ["potato", "onion", "tomato", "turmeric", "oil", "salt"],
    ["chili", "cumin"],
    { ur: "آلو کی بھجی", hi: "आलू की सब्ज़ी", en: "Potato bhujia" },
    {
      ur: "روٹی کے ساتھ روز کی سبزی۔",
      hi: "रोटी के साथ रोज़ की सब्ज़ी।",
      en: "Everyday potatoes for roti.",
    },
    {
      ur: [
        "آلو چھیل کر چھوٹے ٹکڑے کریں۔ پیاز اور ٹماٹر کاٹ لیں۔",
        "تیل میں زیرہ ہو تو چھڑکیں، پیاز ہلکا سنہرا کریں۔",
        "ٹماٹر، ہلدی اور نمک ڈال کر بھونیں یہاں تک کہ تیل الگ نظر آئے۔",
        "آلو ملا کر تھوڑا پانی ڈالیں، ڈھک کر نرم ہونے تک پکائیں۔",
      ],
      hi: [
        "आलू छीलकर छोटे टुकड़े करें। प्याज़ और टमाटर काट लें।",
        "तेल में जीरा हो तो छौंकें, प्याज़ हल्का सुनहरा करें।",
        "टमाटर, हल्दी और नमक डालकर भूनें जब तक तेल अलग दिखे।",
        "आलू मिलाकर थोड़ा पानी डालें, ढककर नरम होने तक पकाएँ।",
      ],
      en: [
        "Peel and cube the potatoes. Chop onion and tomato.",
        "If you have cumin, bloom it in oil, then soften the onion.",
        "Cook tomato, turmeric, and salt until the oil separates.",
        "Add potatoes and a splash of water. Cover until tender.",
      ],
    },
  ),
  r(
    "palak-aloo",
    30,
    3,
    ["spinach", "potato", "onion", "garlic", "turmeric", "oil", "salt"],
    ["ginger", "chili"],
    { ur: "پالک آلو", hi: "पालक आलू", en: "Spinach and potato" },
    {
      ur: "پالک میں نرم آلو، ہلکی سی گرہ۔",
      hi: "पालक में नरम आलू, हल्की सी ग्रेवी।",
      en: "Soft potatoes folded into spinach.",
    },
    {
      ur: [
        "پالک دھو کر موٹا کاٹ لیں۔ آلو چھوٹے ٹکڑوں میں۔",
        "تیل میں لہسن، پیاز اور ادرک مرچ اگر ہوں تو بھونیں۔",
        "ہلدی، نمک اور آلو ڈال کر دو منٹ بھونیں، پھر تھوڑا پانی۔",
        "آلو آدھا گلے تو پالک ملا کر پانی خشک ہونے تک پکائیں۔",
      ],
      hi: [
        "पालक धोकर मोटा काट लें। आलू छोटे टुकड़ों में।",
        "तेल में लहसुन, प्याज़ और अदरक-मिर्च हों तो भूनें।",
        "हल्दी, नमक और आलू डालकर दो मिनट भूनें, फिर थोड़ा पानी।",
        "आलू अधगले हों तो पालक मिलाकर पानी सूखने तक पकाएँ।",
      ],
      en: [
        "Wash and roughly chop the spinach. Cube the potatoes.",
        "Fry garlic and onion, plus ginger or chili if you have them.",
        "Add turmeric, salt, and potatoes. Splash in a little water.",
        "When potatoes are half done, fold in spinach and cook until soft.",
      ],
    },
  ),
  r(
    "bhindi",
    30,
    3,
    ["okra", "onion", "tomato", "turmeric", "oil", "salt"],
    ["chili", "garlic"],
    { ur: "بھنڈی مسالہ", hi: "भिंडी मसाला", en: "Okra masala" },
    {
      ur: "کم چپچپا بھنڈی، اگر پہلے خشک تل جائے۔",
      hi: "कम चिपचिपी भिंडी, अगर पहले सूखी तल जाए।",
      en: "Less sticky okra if you fry it dry first.",
    },
    {
      ur: [
        "بھنڈی دھو کر پونچھ لیں اور ٹکڑے کریں۔ گیلی نہ رکھیں۔",
        "تیل میں اکیلے بھنڈی ہلکی سنہری کریں، نکال لیں۔",
        "اسی تیل میں پیاز، لہسن اور ٹماٹر ہلدی نمک کے ساتھ بھونیں۔",
        "بھنڈی واپس ملا کر پانچ منٹ ہلکی آنچ پر پکائیں۔",
      ],
      hi: [
        "भिंडी धोकर पोंछ लें और टुकड़े करें। गीली न रखें।",
        "तेल में अकेली भिंडी हल्की सुनहरी करें, निकाल लें।",
        "उसी तेल में प्याज़, लहसुन और टमाटर हल्दी-नमक के साथ भूनें।",
        "भिंडी वापस मिलाकर पाँच मिनट धीमी आँच पर पकाएँ।",
      ],
      en: [
        "Wash, dry, and cut the okra. Wet okra turns slimy.",
        "Fry it alone until lightly browned, then take it out.",
        "In the same oil cook onion, garlic, tomato, turmeric, and salt.",
        "Return the okra and cook five minutes on low.",
      ],
    },
  ),
  r(
    "bharta",
    35,
    3,
    ["eggplant", "onion", "tomato", "garlic", "oil", "salt"],
    ["chili", "coriander"],
    { ur: "بینگن کا بھرتا", hi: "बैंगन का भरता", en: "Smoked eggplant bharta" },
    {
      ur: "بھونا ہوا بینگن، پیاز ٹماٹر میں گھوٹا ہوا۔",
      hi: "भुना बैंगन, प्याज़-टमाटर में घोला हुआ।",
      en: "Roasted eggplant mashed into onion and tomato.",
    },
    {
      ur: [
        "بینگن پوری طرح نرم بھون لیں، چھیل کر گودا نکال لیں۔",
        "تیل میں لہسن اور پیاز سنہرے کریں، ٹماٹر گلا لیں۔",
        "بینگن ملا کر نمک سے دس منٹ بھونیں تاکہ پانی اڑ جائے۔",
        "ہری مرچ اور دھنیا ہو تو آخر میں ڈالیں۔",
      ],
      hi: [
        "बैंगन पूरा नरम भून लें, छीलकर गूदा निकाल लें।",
        "तेल में लहसुन और प्याज़ सुनहरे करें, टमाटर गला लें।",
        "बैंगन मिलाकर नमक से दस मिनट भूनें ताकि पानी उड़ जाए।",
        "हरी मिर्च और धनिया हो तो आखिर में डालें।",
      ],
      en: [
        "Roast the eggplant until soft, then peel and mash it.",
        "Brown garlic and onion in oil and cook the tomato down.",
        "Fold in the eggplant with salt and fry ten minutes to dry it.",
        "Finish with chili and coriander if you have them.",
      ],
    },
  ),
  r(
    "aloo-matar",
    30,
    4,
    ["potato", "peas", "onion", "tomato", "turmeric", "oil", "salt"],
    ["cumin", "ginger"],
    { ur: "آلو مٹر", hi: "आलू मटर", en: "Potato and peas" },
    {
      ur: "ہلکی گریوی والی گھریلو سبزی۔",
      hi: "हल्की ग्रेवी वाली घरेलू सब्ज़ी।",
      en: "A light home gravy of potato and peas.",
    },
    {
      ur: [
        "آلو ٹکڑے کریں۔ پیاز اور ٹماٹر کاٹ لیں۔",
        "تیل میں زیرہ اور ادرک ہو تو ڈالیں، پیاز سنہرا کریں۔",
        "ٹماٹر، ہلدی، نمک بھون کر آلو اور تھوڑا پانی شامل کریں۔",
        "آلو نرم ہو تو مٹر ڈال کر پانچ منٹ اور پکائیں۔",
      ],
      hi: [
        "आलू टुकड़े करें। प्याज़ और टमाटर काट लें।",
        "तेल में जीरा और अदरक हो तो डालें, प्याज़ सुनहरा करें।",
        "टमाटर, हल्दी, नमक भूनकर आलू और थोड़ा पानी डालें।",
        "आलू नरम हो तो मटर डालकर पाँच मिनट और पकाएँ।",
      ],
      en: [
        "Cube the potatoes. Chop onion and tomato.",
        "Bloom cumin and ginger if you have them, then brown the onion.",
        "Cook tomato, turmeric, and salt, then add potatoes and a little water.",
        "When the potatoes soften, add peas for five more minutes.",
      ],
    },
  ),
  r(
    "masoor",
    30,
    4,
    ["masoor", "onion", "tomato", "turmeric", "cumin", "oil", "salt"],
    ["garlic", "ginger", "chili"],
    { ur: "مسور دال تڑکا", hi: "मसूर दाल तड़का", en: "Red lentil tadka" },
    {
      ur: "نرم دال، اوپر سے زیرے کا تڑکا۔",
      hi: "नरम दाल, ऊपर से जीरे का तड़का।",
      en: "Soft lentils with a cumin tadka.",
    },
    {
      ur: [
        "دال دھو کر ہلدی اور نمک کے ساتھ نرم ابال لیں۔",
        "الگ پین میں تیل گرم کر کے زیرہ، پیاز اور لہسن ادرک بھونیں۔",
        "ٹماٹر گلا کر یہ تڑکا دال پر ڈال دیں۔",
        "دو منٹ اور پکائیں۔ مرچ ہو تو ساتھ تل لیں۔",
      ],
      hi: [
        "दाल धोकर हल्दी और नमक के साथ नरम उबाल लें।",
        "अलग पैन में तेल गरम कर जीरा, प्याज़ और लहसुन-अदरक भूनें।",
        "टमाटर गलाकर यह तड़का दाल पर डाल दें।",
        "दो मिनट और पकाएँ। मिर्च हो तो साथ तल लें।",
      ],
      en: [
        "Rinse the lentils and simmer with turmeric and salt until soft.",
        "In another pan heat oil, then fry cumin, onion, and garlic or ginger.",
        "Cook the tomato into that tadka and pour it over the dal.",
        "Simmer two more minutes. Fry a chili in the tadka if you have one.",
      ],
    },
  ),
  r(
    "dal-chawal",
    45,
    4,
    ["masoor", "rice", "onion", "turmeric", "oil", "salt"],
    ["tomato", "cumin", "ginger"],
    { ur: "دال چاول", hi: "दाल चावल", en: "Dal and rice" },
    {
      ur: "ایک ہی وقت میں نرم دال اور سادہ چاول۔",
      hi: "एक ही वक़्त में नरम दाल और सादा चावल।",
      en: "Soft dal and plain rice, cooked side by side.",
    },
    {
      ur: [
        "چاول دھو کر نمک اور ڈبل پانی میں نرم پکائیں، چھان لیں۔",
        "دال ہلدی نمک کے ساتھ الگ نرم کریں۔",
        "تیل میں پیاز سنہرا کریں، ٹماٹر یا زیرہ ہو تو ساتھ بھونیں۔",
        "یہ تڑکا دال میں ملا کر چاول کے ساتھ پیش کریں۔",
      ],
      hi: [
        "चावल धोकर नमक और डबल पानी में नरम पकाएँ, छान लें।",
        "दाल हल्दी-नमक के साथ अलग नरम करें।",
        "तेल में प्याज़ सुनहरा करें, टमाटर या जीरा हो तो साथ भूनें।",
        "यह तड़का दाल में मिलाकर चावल के साथ परोसें।",
      ],
      en: [
        "Rinse the rice and cook it in salted water until just done, then drain.",
        "Simmer the lentils separately with turmeric and salt.",
        "Brown the onion in oil. Add tomato or cumin if you have them.",
        "Stir that tadka into the dal and serve with the rice.",
      ],
    },
  ),
  r(
    "chana",
    35,
    4,
    ["chickpeas", "onion", "tomato", "ginger", "garlic", "cumin", "turmeric", "oil", "salt"],
    ["garam", "coriander", "lemon"],
    { ur: "چنا مسالہ", hi: "छोले मसाला", en: "Chickpea masala" },
    {
      ur: "اُبلے چنوں کی گھریلو گریوی۔",
      hi: "उबले छोले की घरेलू ग्रेवी।",
      en: "A home gravy for boiled or tinned chickpeas.",
    },
    {
      ur: [
        "چنے اگر کچے ہوں تو پہلے نرم ابال لیں۔ ڈبے والے بس دھو لیں۔",
        "تیل میں زیرہ، پیاز، ادرک لہسن سنہرے کریں۔",
        "ٹماٹر، ہلدی، نمک بھون کر چنے اور تھوڑا پانی ملا دیں۔",
        "دس منٹ پکائیں۔ گرم مصالحہ، دھنیا یا لیموں آخر میں۔",
      ],
      hi: [
        "छोले कच्चे हों तो पहले नरम उबाल लें। डिब्बे वाले धो लें।",
        "तेल में जीरा, प्याज़, अदरक-लहसुन सुनहरे करें।",
        "टमाटर, हल्दी, नमक भूनकर छोले और थोड़ा पानी मिला दें।",
        "दस मिनट पकाएँ। गरम मसाला, धनिया या नींबू आखिर में।",
      ],
      en: [
        "Boil raw chickpeas until soft. Rinse tinned ones.",
        "Brown cumin, onion, ginger, and garlic in oil.",
        "Cook tomato, turmeric, and salt, then add chickpeas and a little water.",
        "Simmer ten minutes. Finish with garam masala, coriander, or lemon.",
      ],
    },
  ),
  r(
    "karahi",
    40,
    4,
    ["chicken", "tomato", "ginger", "garlic", "chili", "oil", "salt"],
    ["coriander", "garam"],
    { ur: "چکن کڑاہی", hi: "चिकन कड़ाही", en: "Chicken karahi" },
    {
      ur: "ٹماٹر میں پکی مرغی، کم گریوی۔",
      hi: "टमाटर में पकी मुर्गी, कम ग्रेवी।",
      en: "Chicken cooked down in tomato, not a thin gravy.",
    },
    {
      ur: [
        "مرغی ٹکڑے کریں۔ ادرک لہسن پیس یا باریک کاٹ لیں۔",
        "تیل میں ادرک لہسن اور مرغی نمک کے ساتھ پانچ منٹ بھونیں۔",
        "کٹا ٹماٹر اور ہری مرچ ڈال کر بغیر ڈھکن پکائیں، پانی کم رکھیں۔",
        "ٹماٹر گھل جائے اور تیل اوپر آئے تو دھنیا اور گرم مصالحہ ڈالیں۔",
      ],
      hi: [
        "चिकन टुकड़े करें। अदरक-लहसुन पीस या बारीक काट लें।",
        "तेल में अदरक-लहसुन और चिकन नमक के साथ पाँच मिनट भूनें।",
        "कटा टमाटर और हरी मिर्च डालकर बिना ढक्कन पकाएँ, पानी कम रखें।",
        "टमाटर घुल जाए और तेल ऊपर आए तो धनिया और गरम मसाला डालें।",
      ],
      en: [
        "Cut the chicken. Crush or mince the ginger and garlic.",
        "Fry ginger, garlic, and chicken with salt for five minutes.",
        "Add chopped tomato and chili. Cook uncovered with very little water.",
        "When the tomato melts and oil rises, add coriander and garam masala.",
      ],
    },
  ),
  r(
    "dahi-chicken",
    45,
    4,
    ["chicken", "yogurt", "onion", "ginger", "garlic", "turmeric", "oil", "salt"],
    ["garam", "tomato"],
    { ur: "دہی مرغی", hi: "दही चिकन", en: "Yogurt chicken" },
    {
      ur: "دہی کی ہلکی سفید گریوی۔",
      hi: "दही की हल्की सफ़ेद ग्रेवी।",
      en: "A mild yogurt gravy for chicken.",
    },
    {
      ur: [
        "دہی میں ہلدی، نمک، ادرک لہسن اور مرغی ملا کر دس منٹ رکھ دیں۔",
        "تیل میں پیاز سنہرا کریں، مرغی سمیت دہی ڈال دیں۔",
        "ہلکی آنچ پر ہلاتے رہیں تاکہ دہی پھٹے نہیں۔",
        "بیس منٹ ڈھک کر پکائیں۔ ٹماٹر یا گرم مصالحہ ہو تو آخر میں۔",
      ],
      hi: [
        "दही में हल्दी, नमक, अदरक-लहसुन और चिकन मिलाकर दस मिनट रख दें।",
        "तेल में प्याज़ सुनहरा करें, चिकन समेत दही डाल दें।",
        "धीमी आँच पर हिलाते रहें ताकि दही फटे नहीं।",
        "बीस मिनट ढककर पकाएँ। टमाटर या गरम मसाला हो तो आखिर में।",
      ],
      en: [
        "Mix yogurt with turmeric, salt, ginger, garlic, and chicken. Rest ten minutes.",
        "Brown the onion in oil, then add the chicken and yogurt.",
        "Keep stirring on low so the yogurt does not split.",
        "Cover about twenty minutes. Add tomato or garam masala at the end if you have them.",
      ],
    },
  ),
  r(
    "keema",
    40,
    4,
    ["mince", "peas", "onion", "tomato", "ginger", "garlic", "oil", "salt"],
    ["garam", "chili"],
    { ur: "قیمہ مٹر", hi: "कीमा मटर", en: "Mince and peas" },
    {
      ur: "روٹی یا چاول کے ساتھ خشک سا قیمہ۔",
      hi: "रोटी या चावल के साथ सूखा सा कीमा।",
      en: "A dry-ish mince for roti or rice.",
    },
    {
      ur: [
        "تیل میں پیاز سنہرا کریں، ادرک لہسن ایک منٹ بھونیں۔",
        "قیمہ ڈال کر توڑتے ہوئے بھونیں یہاں تک کہ پانی خشک ہو۔",
        "ٹماٹر، نمک اور مرچ اگر ہو تو ملا کر دس منٹ اور۔",
        "مٹر آخر میں ڈال کر ڈھک کر نرم کریں۔ گرم مصالحہ چھڑکیں۔",
      ],
      hi: [
        "तेल में प्याज़ सुनहरा करें, अदरक-लहसुन एक मिनट भूनें।",
        "कीमा डालकर तोड़ते हुए भूनें जब तक पानी सूखे।",
        "टमाटर, नमक और मिर्च हो तो मिलाकर दस मिनट और।",
        "मटर आखिर में डालकर ढककर नरम करें। गरम मसाला छिड़कें।",
      ],
      en: [
        "Brown the onion in oil, then fry ginger and garlic for a minute.",
        "Add the mince and break it up until the water cooks off.",
        "Stir in tomato, salt, and chili if you have it. Cook ten minutes.",
        "Add peas, cover until soft, and finish with garam masala.",
      ],
    },
  ),
  r(
    "aloo-gosht",
    70,
    5,
    ["mutton", "potato", "onion", "tomato", "ginger", "garlic", "turmeric", "oil", "salt"],
    ["garam"],
    { ur: "آلو گوشت", hi: "आलू गोश्त", en: "Mutton and potato" },
    {
      ur: "دھیمی آنچ پر گلے ہوئے گوشت کے ساتھ آلو۔",
      hi: "धीमी आँच पर गले गोश्त के साथ आलू।",
      en: "Slow-cooked mutton with potatoes.",
    },
    {
      ur: [
        "تیل میں پیاز گہرا سنہرا کریں، ادرک لہسن بھونیں۔",
        "گوشت، ہلدی اور نمک ملا کر پانی خشک ہونے تک بھونیں۔",
        "ٹماٹر اور اتنا پانی ڈالیں کہ گوشت ڈوب جائے، ڈھک کر نرم پکائیں۔",
        "آخر میں آلو ڈال کر انہیں بھی گل جانے دیں۔ گرم مصالحہ چکھ کر۔",
      ],
      hi: [
        "तेल में प्याज़ गहरा सुनहरा करें, अदरक-लहसुन भूनें।",
        "गोश्त, हल्दी और नमक मिलाकर पानी सूखने तक भूनें।",
        "टमाटर और इतना पानी डालें कि गोश्त डूबे, ढककर नरम पकाएँ।",
        "आखिर में आलू डालकर उन्हें भी गलने दें। गरम मसाला चखकर।",
      ],
      en: [
        "Brown the onion deeply, then fry ginger and garlic.",
        "Add mutton, turmeric, and salt. Fry until the liquid dries.",
        "Add tomato and enough water to cover. Simmer covered until tender.",
        "Add potatoes near the end and cook until they soften. Finish with garam masala.",
      ],
    },
  ),
  r(
    "egg-curry",
    25,
    3,
    ["eggs", "onion", "tomato", "turmeric", "oil", "salt"],
    ["ginger", "garlic", "garam"],
    { ur: "انڈا کری", hi: "अंडा करी", en: "Egg curry" },
    {
      ur: "ابلے انڈے ٹماٹر کی گریوی میں۔",
      hi: "उबले अंडे टमाटर की ग्रेवी में।",
      en: "Boiled eggs in a tomato gravy.",
    },
    {
      ur: [
        "انڈے ابال کر چھیل لیں، چاہیں تو ہلکے تل لیں۔",
        "تیل میں پیاز سنہرا کریں، ادرک لہسن ہو تو ساتھ۔",
        "ٹماٹر، ہلدی، نمک گلا کر تھوڑا پانی ملا دیں۔",
        "انڈے ڈال کر پانچ منٹ پکائیں۔ گرم مصالحہ آخر میں۔",
      ],
      hi: [
        "अंडे उबालकर छील लें, चाहें तो हल्के तल लें।",
        "तेल में प्याज़ सुनहरा करें, अदरक-लहसुन हो तो साथ।",
        "टमाटर, हल्दी, नमक गलाकर थोड़ा पानी मिला दें।",
        "अंडे डालकर पाँच मिनट पकाएँ। गरम मसाला आखिर में।",
      ],
      en: [
        "Boil and peel the eggs. Fry them lightly if you like a firmer edge.",
        "Brown the onion in oil, with ginger and garlic if you have them.",
        "Cook tomato, turmeric, and salt, then loosen with a little water.",
        "Slide in the eggs for five minutes. Add garam masala at the end.",
      ],
    },
  ),
  r(
    "pulao",
    40,
    4,
    ["rice", "potato", "peas", "carrot", "onion", "cumin", "oil", "salt"],
    ["ginger", "garam"],
    { ur: "سبزی پلاؤ", hi: "सब्ज़ी पुलाव", en: "Vegetable pulao" },
    {
      ur: "ایک ہانڈی میں چاول اور سبزی۔",
      hi: "एक ही हांडी में चावल और सब्ज़ी।",
      en: "Rice and vegetables in one pot.",
    },
    {
      ur: [
        "چاول بیس منٹ بھگو کر دھو لیں۔",
        "تیل میں زیرہ اور پیاز سنہرے کریں، سبزیاں دو منٹ بھونیں۔",
        "چاول، نمک اور ڈیڑھ گنا پانی ڈالیں۔ ادرک یا گرم مصالحہ ہو تو ساتھ۔",
        "ابال آئے تو ہلکی آنچ پر ڈھک کر پانی سوکھنے دیں۔ دس منٹ بھاپ میں رکھیں۔",
      ],
      hi: [
        "चावल बीस मिनट भिगोकर धो लें।",
        "तेल में जीरा और प्याज़ सुनहरे करें, सब्ज़ियाँ दो मिनट भूनें।",
        "चावल, नमक और डेढ़ गुना पानी डालें। अदरक या गरम मसाला हो तो साथ।",
        "उबाल आए तो धीमी आँच पर ढककर पानी सूखने दें। दस मिनट भाप में रखें।",
      ],
      en: [
        "Soak the rice twenty minutes, then rinse it.",
        "Brown cumin and onion in oil. Fry the vegetables for two minutes.",
        "Add rice, salt, and one and a half parts water. Ginger or garam masala too, if you have them.",
        "Once boiling, cover on low until the water is gone. Rest ten minutes.",
      ],
    },
  ),
  r(
    "biryani",
    60,
    5,
    ["chicken", "rice", "yogurt", "onion", "ginger", "garlic", "garam", "oil", "salt"],
    ["mint", "chili", "tomato"],
    { ur: "آسان مرغی بریانی", hi: "आसान चिकन बिरयानी", en: "Easy chicken biryani" },
    {
      ur: "دہی میں مرغ، پھر چاول کی تہ۔",
      hi: "दही में चिकन, फिर चावल की तह।",
      en: "Yogurt chicken under a layer of rice.",
    },
    {
      ur: [
        "چاول نمکین پانی میں ستر فیصد پکا کر چھان لیں۔",
        "پیاز تیل میں گہرا سنہرا کریں، آدھا نکال کر رکھ لیں۔",
        "باقی پیاز میں ادرک لہسن، مرغی، دہی، نمک، گرم مصالحہ دس منٹ بھونیں۔ ٹماٹر مرچ ہو تو ساتھ۔",
        "مرغی پر چاول اور تلے پیاز پودینہ ڈال کر ہلکی آنچ پر بیس منٹ دم دیں۔",
      ],
      hi: [
        "चावल नमकीन पानी में सत्तर फ़ीसद पकाकर छान लें।",
        "प्याज़ तेल में गहरा सुनहरा करें, आधा निकालकर रख लें।",
        "बाक़ी प्याज़ में अदरक-लहसुन, चिकन, दही, नमक, गरम मसाला दस मिनट भूनें।",
        "चिकन पर चावल और तले प्याज़-पुदीना डालकर धीमी आँच पर बीस मिनट दम दें।",
      ],
      en: [
        "Boil the rice in salted water until about seventy percent done, then drain.",
        "Fry the onion in oil until deep brown. Set half aside.",
        "With the rest, fry ginger, garlic, chicken, yogurt, salt, and garam masala for ten minutes.",
        "Top with rice, the fried onion, and mint. Steam on low for twenty minutes.",
      ],
    },
  ),
  r(
    "paratha",
    35,
    3,
    ["flour", "potato", "oil", "salt"],
    ["chili", "cumin", "coriander"],
    { ur: "آلو کے پراٹھے", hi: "आलू के पराठे", en: "Potato paratha" },
    {
      ur: "آلو کی بھربھری بھرت کے ساتھ۔",
      hi: "आलू की भरभरी परत के साथ।",
      en: "Flatbread stuffed with mashed potato.",
    },
    {
      ur: [
        "آٹے میں نمک اور پانی ملا کر نرم گوندھ لیں، پندرہ منٹ رکھ دیں۔",
        "آلو ابال کر مَش کریں، نمک اور مرچ زیرہ دھنیا اگر ہوں تو ملا لیں۔",
        "لوئی میں بھرت بھر کر گول بیلیں۔",
        "توا پر دونوں طرف تیل لگا کر سنہرے دھبوں تک پکائیں۔",
      ],
      hi: [
        "आटे में नमक और पानी मिलाकर नरम गूँध लें, पंद्रह मिनट रख दें।",
        "आलू उबालकर मैश करें, नमक और मिर्च-जीरा-धनिया हों तो मिला लें।",
        "लोई में भरावन भरकर गोल बेलें।",
        "तवे पर दोनों तरफ़ तेल लगाकर सुनहरे धब्बों तक पकाएँ।",
      ],
      en: [
        "Knead flour with salt and water into a soft dough. Rest fifteen minutes.",
        "Boil and mash the potato with salt, plus chili, cumin, or coriander if you have them.",
        "Stuff a dough ball and roll it round.",
        "Cook both sides on a hot pan with a little oil until spotted.",
      ],
    },
  ),
  r(
    "toast",
    15,
    2,
    ["bread", "eggs", "milk", "sugar"],
    ["butter"],
    { ur: "میٹھا ٹوسٹ", hi: "मीठा टोस्ट", en: "Sweet toast" },
    {
      ur: "دودھ اور انڈے میں ڈوبی بریڈ۔",
      hi: "दूध और अंडे में डूबी ब्रेड।",
      en: "Bread dipped in egg and milk.",
    },
    {
      ur: [
        "انڈا، دودھ اور چینی پھینٹ لیں۔",
        "بریڈ کے ٹکڑے دونوں طرف اس میں ڈبوئیں۔",
        "پین میں مکھن یا ہلکا تیل گرم کر کے سنہرا کریں۔",
        "گرم گرم کھائیں۔ اندر سے کچّا نہ چھوڑیں۔",
      ],
      hi: [
        "अंडा, दूध और चीनी फेंट लें।",
        "ब्रेड के टुकड़े दोनों तरफ़ इसमें डुबोएँ।",
        "पैन में मक्खन या हल्का तेल गरम कर सुनहरा करें।",
        "गरम परोसें। अंदर से कच्चा न छोड़ें।",
      ],
      en: [
        "Beat the egg with milk and sugar.",
        "Dip both sides of the bread.",
        "Brown it in butter, or a thin film of oil.",
        "Serve hot. Do not leave the center wet.",
      ],
    },
  ),
  r(
    "chai",
    10,
    2,
    ["milk", "tea", "sugar"],
    [],
    { ur: "دودھ پتی", hi: "दूध वाली चाय", en: "Milk tea" },
    {
      ur: "گاڑھی دودھ والی چائے۔",
      hi: "गाढ़ी दूध वाली चाय।",
      en: "Strong tea boiled with milk.",
    },
    {
      ur: [
        "دودھ میں چوتھائی پانی ملا کر ابال لائیں۔",
        "چائے پتی ڈال کر دو منٹ ابلنے دیں، رنگ گہرا ہو۔",
        "چینی ملا کر ایک ابال اور دیں۔",
        "چھان کر پیالے میں ڈالیں۔",
      ],
      hi: [
        "दूध में चौथाई पानी मिलाकर उबाल लाएँ।",
        "चाय पत्ती डालकर दो मिनट उबलने दें, रंग गहरा हो।",
        "चीनी मिलाकर एक उबाल और दें।",
        "छानकर प्याले में डालें।",
      ],
      en: [
        "Bring the milk to a boil with a splash of water.",
        "Add tea leaves and boil two minutes until the color deepens.",
        "Stir in sugar and boil once more.",
        "Strain into cups.",
      ],
    },
  ),
  r(
    "fish",
    20,
    3,
    ["fish", "lemon", "garlic", "chili-powder", "turmeric", "oil", "salt"],
    ["ginger"],
    { ur: "مچھلی فرائی", hi: "मछली फ्राई", en: "Fried fish" },
    {
      ur: "لیموں اور ہلدی کا ہلکا مسالا، پھر تلی ہوئی۔",
      hi: "नींबू और हल्दी का हल्का मसाला, फिर तली हुई।",
      en: "Fish rubbed with lemon and turmeric, then fried.",
    },
    {
      ur: [
        "مچھلی نمک، ہلدی، سرخ مرچ، لہسن اور لیموں سے لگا کر دس منٹ رکھیں۔",
        "ادرہ ہو تو وہ بھی پیس کر ملا لیں۔",
        "پین میں تیل درمیانہ گرم کریں، مچھلی اکیلے ٹکڑوں میں ڈالیں۔",
        "دونوں طرف سنہری ہونے تک پلٹیں۔ اندر سے سفید ہو جائے تو تیار۔",
      ],
      hi: [
        "मछली नमक, हल्दी, लाल मिर्च, लहसुन और नींबू से लगाकर दस मिनट रखें।",
        "अदरक हो तो वह भी पीसकर मिला लें।",
        "पैन में तेल मध्यम गरम करें, मछली अकेले टुकड़ों में डालें।",
        "दोनों तरफ़ सुनहरी होने तक पलटें। अंदर से सफ़ेद हो तो तैयार।",
      ],
      en: [
        "Rub the fish with salt, turmeric, red chili, garlic, and lemon. Rest ten minutes.",
        "Add crushed ginger if you have it.",
        "Fry the pieces in medium oil without crowding the pan.",
        "Turn until both sides are golden and the center is opaque.",
      ],
    },
  ),
  r(
    "paneer",
    20,
    3,
    ["paneer", "onion", "tomato", "turmeric", "oil", "salt"],
    ["chili", "capsicum"],
    { ur: "پنیر بھجی", hi: "पनीर भुर्जी", en: "Paneer bhurji" },
    {
      ur: "کٹے پنیر کی جلدی سبزی۔",
      hi: "कुटे पनीर की जल्दी सब्ज़ी।",
      en: "Crumpled paneer, ready in one pan.",
    },
    {
      ur: [
        "پنیر ہاتھ سے موٹا توڑ لیں، بالکل پیسٹ نہ کریں۔",
        "تیل میں پیاز سنہرا کریں، شملہ یا ہری مرچ ہو تو ساتھ۔",
        "ٹماٹر، ہلدی، نمک گلا لیں۔",
        "پنیر ملا کر دو تین منٹ بھونیں، زیادہ دیر نہ پکائیں۔",
      ],
      hi: [
        "पनीर हाथ से मोटा तोड़ लें, बिल्कुल पेस्ट न करें।",
        "तेल में प्याज़ सुनहरा करें, शिमला या हरी मिर्च हो तो साथ।",
        "टमाटर, हल्दी, नमक गला लें।",
        "पनीर मिलाकर दो तीन मिनट भूनें, ज़्यादा देर न पकाएँ।",
      ],
      en: [
        "Crumble the paneer with your hands. Do not mash it to paste.",
        "Brown the onion in oil, with capsicum or chili if you have them.",
        "Cook the tomato with turmeric and salt.",
        "Fold in the paneer for two or three minutes only.",
      ],
    },
  ),
  r(
    "khichdi",
    30,
    3,
    ["rice", "masoor", "turmeric", "salt"],
    ["ginger", "butter", "cumin"],
    { ur: "کھچڑی", hi: "खिचड़ी", en: "Khichdi" },
    {
      ur: "بیمار یا تھکے دن کی نرم کھچڑی۔",
      hi: "बीमार या थके दिन की नरम खिचड़ी।",
      en: "Soft rice and lentils for a quiet meal.",
    },
    {
      ur: [
        "چاول اور دال دھو لیں۔",
        "ہلدی، نمک اور تین گنا پانی کے ساتھ نرم ابالیں۔ درمیان میں ہلائیں۔",
        "ادرہ ہو تو ساتھ ڈال دیں۔",
        "مکھن اور زیرہ ہو تو آخر میں تڑکا لگائیں۔",
      ],
      hi: [
        "चावल और दाल धो लें।",
        "हल्दी, नमक और तीन गुना पानी के साथ नरम उबालें। बीच में हिलाएँ।",
        "अदरक हो तो साथ डाल दें।",
        "मक्खन और जीरा हो तो आखिर में तड़का लगाएँ।",
      ],
      en: [
        "Rinse the rice and lentils together.",
        "Simmer with turmeric, salt, and three parts water, stirring now and then.",
        "Add ginger if you have it.",
        "Finish with butter and a cumin tadka when you can.",
      ],
    },
  ),
  r(
    "noodles",
    15,
    2,
    ["noodles", "eggs", "onion", "oil", "salt"],
    ["capsicum", "chili"],
    { ur: "انڈے والے نوڈلز", hi: "अंडे वाले नूडल्स", en: "Egg noodles" },
    {
      ur: "پندرہ منٹ کا ہلکا سا کھانا۔",
      hi: "पंद्रह मिनट का हल्का सा खाना।",
      en: "A fifteen-minute pan of noodles and egg.",
    },
    {
      ur: [
        "نوڈلز پیکٹ کے وقت سے ایک منٹ کم ابال کر چھان لیں۔",
        "تیل میں پیاز اور شملہ یا مرچ اگر ہوں تو دو منٹ چلائیں۔",
        "انڈا پھینٹ کر ڈالیں اور جلدی ہلائیں تاکہ ٹکڑے بن جائیں۔",
        "نوڈلز اور نمک ملا کر ایک منٹ اور چڑھا کر اتار لیں۔",
      ],
      hi: [
        "नूडल्स पैकेट के समय से एक मिनट कम उबालकर छान लें।",
        "तेल में प्याज़ और शिमला या मिर्च हों तो दो मिनट चलाएँ।",
        "अंडा फेंटकर डालें और जल्दी हिलाएँ ताकि टुकड़े बन जाएँ।",
        "नूडल्स और नमक मिलाकर एक मिनट और चढ़ाकर उतार लें।",
      ],
      en: [
        "Boil the noodles one minute short of the packet time, then drain.",
        "Stir-fry onion, and capsicum or chili if you have them, for two minutes.",
        "Pour in a beaten egg and scramble it fast.",
        "Toss in the noodles and salt for one more minute.",
      ],
    },
  ),
  r(
    "raita",
    5,
    4,
    ["yogurt", "onion", "salt"],
    ["cumin", "mint", "coriander"],
    { ur: "پیاز کا رائتا", hi: "प्याज़ का रायता", en: "Onion raita" },
    {
      ur: "کسی بھی سالن کے ساتھ ٹھنڈی دہی۔",
      hi: "किसी भी सालन के साथ ठंडी दही।",
      en: "Cold yogurt to sit beside a hot curry.",
    },
    {
      ur: [
        "دہی پھینٹ لیں، گاڑھی ہو تو ایک چمچ پانی۔",
        "پیاز باریک کاٹ کر نمک ملا دیں۔",
        "زیرہ ہو تو خشک بھون کر کوٹ لیں اور چھڑکیں۔",
        "پودینہ یا دھنیا ہو تو آخر میں۔ فوراً ٹھنڈا پیش کریں۔",
      ],
      hi: [
        "दही फेंट लें, गाढ़ी हो तो एक चम्मच पानी।",
        "प्याज़ बारीक काटकर नमक मिला दें।",
        "जीरा हो तो सूखा भूनकर कूट लें और छिड़कें।",
        "पुदीना या धनिया हो तो आखिर में। तुरंत ठंडा परोसें।",
      ],
      en: [
        "Whisk the yogurt. Loosen thick yogurt with a spoon of water.",
        "Stir in finely cut onion and salt.",
        "If you have cumin, toast it dry, crush it, and scatter it on.",
        "Mint or coriander goes in last. Serve cold.",
      ],
    },
  ),
];

export type Match = {
  recipe: Recipe;
  missing: string[];
  have: number;
  ready: boolean;
};

export function matchRecipes(ownedIds: string[]): Match[] {
  const owned = new Set(ownedIds);
  const rows: Match[] = recipes.map((recipe) => {
    const missing = recipe.needs.filter((id) => !owned.has(id));
    const have = recipe.needs.length - missing.length;
    return { recipe, missing, have, ready: missing.length === 0 && have > 0 };
  });
  return rows.sort((a, b) => {
    if (a.ready !== b.ready) return a.ready ? -1 : 1;
    if (a.missing.length !== b.missing.length) return a.missing.length - b.missing.length;
    if (a.have !== b.have) return b.have - a.have;
    return a.recipe.minutes - b.recipe.minutes;
  });
}
