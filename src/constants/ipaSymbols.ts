import { IpaSymbol } from "../types";

const WIKI = "https://en.wikipedia.org/wiki/";
const DIPHTHONG_URL = `${WIKI}Diphthong#English`;
const R_COLORED_URL = `${WIKI}R-colored_vowel#English`;

export const IPA_SYMBOLS: IpaSymbol[] = [
  {
    symbol: "i",
    name: "Close front unrounded vowel",
    type: "Vowel",
    example: "see",
    howTo: "Spread your lips wide and raise your tongue close to the roof of your mouth.",
    wikiUrl: `${WIKI}Close_front_unrounded_vowel`
  },
  {
    symbol: "ɪ",
    name: "Near-close near-front unrounded vowel",
    type: "Vowel",
    example: "sit",
    howTo: "Relax your lips and tongue, then make a short, lax \"ih\" sound.",
    wikiUrl: `${WIKI}Near-close_near-front_unrounded_vowel`
  },
  {
    symbol: "ɛ",
    name: "Open-mid front unrounded vowel",
    type: "Vowel",
    example: "bed",
    howTo: "Open your mouth slightly and keep your tongue toward the front.",
    wikiUrl: `${WIKI}Open-mid_front_unrounded_vowel`
  },
  {
    symbol: "æ",
    name: "Near-open front unrounded vowel",
    type: "Vowel",
    example: "cat",
    howTo: "Open your mouth wider than for \"e\" and spread your lips.",
    wikiUrl: `${WIKI}Near-open_front_unrounded_vowel`
  },
  {
    symbol: "ɑ",
    name: "Open back unrounded vowel",
    type: "Vowel",
    example: "father",
    howTo: "Open your mouth wide, pull your tongue back, and keep your lips relaxed.",
    wikiUrl: `${WIKI}Open_back_unrounded_vowel`
  },
  {
    symbol: "ɔ",
    name: "Open-mid back rounded vowel",
    type: "Vowel",
    example: "thought",
    howTo: "Round your lips and place your tongue toward the back of your mouth.",
    wikiUrl: `${WIKI}Open-mid_back_rounded_vowel`
  },
  {
    symbol: "ʊ",
    name: "Near-close near-back rounded vowel",
    type: "Vowel",
    example: "book",
    howTo: "Make a short, relaxed \"oo\" with slightly rounded lips.",
    wikiUrl: `${WIKI}Near-close_near-back_rounded_vowel`
  },
  {
    symbol: "u",
    name: "Close back rounded vowel",
    type: "Vowel",
    example: "too",
    howTo: "Round your lips strongly and raise the back of your tongue.",
    wikiUrl: `${WIKI}Close_back_rounded_vowel`
  },
  {
    symbol: "ʌ",
    name: "Open-mid back unrounded vowel",
    type: "Vowel",
    example: "cup",
    howTo: "Relax your lips and make a short, central \"uh\" sound.",
    wikiUrl: `${WIKI}Open-mid_back_unrounded_vowel`
  },
  {
    symbol: "ə",
    name: "Mid central vowel (schwa)",
    type: "Vowel",
    example: "about",
    howTo: "Relax your mouth completely and make a soft, unstressed \"uh\".",
    wikiUrl: `${WIKI}Mid_central_vowel`
  },
  {
    symbol: "ɝ",
    name: "R-colored open-mid central unrounded vowel",
    type: "Vowel",
    example: "bird",
    howTo: "Make the \"er\" sound with your tongue bunched and slightly curled.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "ɚ",
    name: "R-colored mid central vowel",
    type: "Vowel",
    example: "butter",
    howTo: "Make a quick, unstressed \"er\" sound.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "ɪr",
    name: "R-colored near-close near-front vowel",
    type: "Vowel",
    example: "near",
    howTo: "Glide from a short \"ih\" into the \"er\" sound.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "ɛr",
    name: "R-colored open-mid front vowel",
    type: "Vowel",
    example: "bear",
    howTo: "Glide from \"e\" into the \"er\" sound.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "ʊr",
    name: "R-colored near-close near-back vowel",
    type: "Vowel",
    example: "tour",
    howTo: "Glide from \"oo\" into the \"er\" sound.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "ɑr",
    name: "R-colored open back vowel",
    type: "Vowel",
    example: "car",
    howTo: "Glide from an open \"ah\" into the \"er\" sound.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "ɔr",
    name: "R-colored open-mid back vowel",
    type: "Vowel",
    example: "more",
    howTo: "Glide from a rounded \"aw\" into the \"er\" sound.",
    wikiUrl: R_COLORED_URL
  },
  {
    symbol: "eɪ",
    name: "Closing front unrounded diphthong",
    type: "Diphthong",
    example: "say",
    howTo: "Start with a mid front \"e\" sound and glide up toward \"i\".",
    wikiUrl: DIPHTHONG_URL
  },
  {
    symbol: "oʊ",
    name: "Closing back rounded diphthong",
    type: "Diphthong",
    example: "go",
    howTo: "Start with a rounded \"oh\" and glide toward \"oo\".",
    wikiUrl: DIPHTHONG_URL
  },
  {
    symbol: "aɪ",
    name: "Closing front unrounded diphthong",
    type: "Diphthong",
    example: "my",
    howTo: "Start with an open \"ah\" and glide up toward \"i\".",
    wikiUrl: DIPHTHONG_URL
  },
  {
    symbol: "aʊ",
    name: "Closing back rounded diphthong",
    type: "Diphthong",
    example: "now",
    howTo: "Start with an open \"ah\" and glide toward a rounded \"oo\".",
    wikiUrl: DIPHTHONG_URL
  },
  {
    symbol: "ɔɪ",
    name: "Back-to-front closing diphthong",
    type: "Diphthong",
    example: "boy",
    howTo: "Start with a rounded \"aw\" and glide toward \"i\".",
    wikiUrl: DIPHTHONG_URL
  },
  {
    symbol: "p",
    name: "Voiceless bilabial plosive",
    type: "Consonant",
    example: "pin",
    howTo: "Press your lips together, then release a puff of air.",
    wikiUrl: `${WIKI}Voiceless_bilabial_plosive`
  },
  {
    symbol: "b",
    name: "Voiced bilabial plosive",
    type: "Consonant",
    example: "bin",
    howTo: "Press your lips together and release while your voice vibrates.",
    wikiUrl: `${WIKI}Voiced_bilabial_plosive`
  },
  {
    symbol: "t",
    name: "Voiceless alveolar plosive",
    type: "Consonant",
    example: "tin",
    howTo: "Touch your tongue to the ridge behind your top teeth, then release a puff of air.",
    wikiUrl: `${WIKI}Voiceless_dental_and_alveolar_plosives`
  },
  {
    symbol: "d",
    name: "Voiced alveolar plosive",
    type: "Consonant",
    example: "din",
    howTo: "Touch your tongue to the ridge behind your top teeth and release with your voice.",
    wikiUrl: `${WIKI}Voiced_dental_and_alveolar_plosives`
  },
  {
    symbol: "k",
    name: "Voiceless velar plosive",
    type: "Consonant",
    example: "kin",
    howTo: "Raise the back of your tongue to your soft palate, then release a puff of air.",
    wikiUrl: `${WIKI}Voiceless_velar_plosive`
  },
  {
    symbol: "ɡ",
    name: "Voiced velar plosive",
    type: "Consonant",
    example: "give",
    howTo: "Raise the back of your tongue to your soft palate and release with your voice.",
    wikiUrl: `${WIKI}Voiced_velar_plosive`
  },
  {
    symbol: "f",
    name: "Voiceless labiodental fricative",
    type: "Consonant",
    example: "fan",
    howTo: "Place your top teeth on your bottom lip and blow air through.",
    wikiUrl: `${WIKI}Voiceless_labiodental_fricative`
  },
  {
    symbol: "v",
    name: "Voiced labiodental fricative",
    type: "Consonant",
    example: "van",
    howTo: "Place your top teeth on your bottom lip and push voiced air through.",
    wikiUrl: `${WIKI}Voiced_labiodental_fricative`
  },
  {
    symbol: "θ",
    name: "Voiceless dental fricative",
    type: "Consonant",
    example: "think",
    howTo: "Put your tongue between your teeth and blow air out gently.",
    wikiUrl: `${WIKI}Voiceless_dental_fricative`
  },
  {
    symbol: "ð",
    name: "Voiced dental fricative",
    type: "Consonant",
    example: "this",
    howTo: "Put your tongue between your teeth and let your voice vibrate.",
    wikiUrl: `${WIKI}Voiced_dental_fricative`
  },
  {
    symbol: "s",
    name: "Voiceless alveolar fricative",
    type: "Consonant",
    example: "sun",
    howTo: "Bring your tongue near the ridge behind your top teeth and hiss air out.",
    wikiUrl: `${WIKI}Voiceless_alveolar_fricative`
  },
  {
    symbol: "z",
    name: "Voiced alveolar fricative",
    type: "Consonant",
    example: "zoo",
    howTo: "Bring your tongue near the ridge behind your top teeth and buzz with your voice.",
    wikiUrl: `${WIKI}Voiced_alveolar_fricative`
  },
  {
    symbol: "ʃ",
    name: "Voiceless postalveolar fricative",
    type: "Consonant",
    example: "shoe",
    howTo: "Round your lips slightly and push air over the middle of your tongue.",
    wikiUrl: `${WIKI}Voiceless_postalveolar_fricative`
  },
  {
    symbol: "ʒ",
    name: "Voiced postalveolar fricative",
    type: "Consonant",
    example: "measure",
    howTo: "Round your lips slightly and let voiced air buzz over the middle of your tongue.",
    wikiUrl: `${WIKI}Voiced_postalveolar_fricative`
  },
  {
    symbol: "h",
    name: "Voiceless glottal fricative",
    type: "Consonant",
    example: "hat",
    howTo: "Open your mouth and breathe out from your throat.",
    wikiUrl: `${WIKI}Voiceless_glottal_fricative`
  },
  {
    symbol: "tʃ",
    name: "Voiceless postalveolar affricate",
    type: "Consonant",
    example: "church",
    howTo: "Start with \"t\" and release into a \"sh\" sound.",
    wikiUrl: `${WIKI}Voiceless_postalveolar_affricate`
  },
  {
    symbol: "dʒ",
    name: "Voiced postalveolar affricate",
    type: "Consonant",
    example: "judge",
    howTo: "Start with \"d\" and release into a \"zh\" sound with your voice.",
    wikiUrl: `${WIKI}Voiced_postalveolar_affricate`
  },
  {
    symbol: "m",
    name: "Bilabial nasal",
    type: "Consonant",
    example: "man",
    howTo: "Close your lips and let air flow through your nose.",
    wikiUrl: `${WIKI}Voiced_bilabial_nasal`
  },
  {
    symbol: "n",
    name: "Alveolar nasal",
    type: "Consonant",
    example: "no",
    howTo: "Touch your tongue to the ridge behind your top teeth and let air flow through your nose.",
    wikiUrl: `${WIKI}Voiced_dental_and_alveolar_nasals`
  },
  {
    symbol: "ŋ",
    name: "Velar nasal",
    type: "Consonant",
    example: "sing",
    howTo: "Raise the back of your tongue to your soft palate and let air flow through your nose.",
    wikiUrl: `${WIKI}Voiced_velar_nasal`
  },
  {
    symbol: "l",
    name: "Alveolar lateral approximant",
    type: "Consonant",
    example: "lip",
    howTo: "Touch your tongue to the ridge behind your top teeth and let air flow around the sides.",
    wikiUrl: `${WIKI}Voiced_dental_and_alveolar_lateral_approximants`
  },
  {
    symbol: "r",
    name: "Alveolar approximant",
    type: "Consonant",
    example: "red",
    howTo: "Curl or bunch your tongue without touching the roof of your mouth.",
    wikiUrl: `${WIKI}Voiced_alveolar_approximant`
  },
  {
    symbol: "j",
    name: "Palatal approximant",
    type: "Consonant",
    example: "yes",
    howTo: "Raise your tongue toward your hard palate and glide quickly into the next vowel.",
    wikiUrl: `${WIKI}Voiced_palatal_approximant`
  },
  {
    symbol: "w",
    name: "Labial-velar approximant",
    type: "Consonant",
    example: "we",
    howTo: "Round your lips and raise the back of your tongue, then glide into the next vowel.",
    wikiUrl: `${WIKI}Voiced_labial%E2%80%93velar_approximant`
  }
];
