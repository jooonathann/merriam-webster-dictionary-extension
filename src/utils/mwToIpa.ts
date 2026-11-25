const REPLACEMENTS: [string, string][] = [
  ["t\u035Fh", "ð"],
  ["au\u0307", "aʊ"],
  ["u\u0307", "ʊ"],
  ["ȯi", "ɔɪ"],
  ["th", "θ"],
  ["sh", "ʃ"],
  ["zh", "ʒ"],
  ["ch", "tʃ"],
  ["hw", "hw"],
  ["kw", "kw"],
  ["ä", "ɑ"],
  ["ā", "eɪ"],
  ["ē", "i"],
  ["ī", "aɪ"],
  ["ō", "oʊ"],
  ["ȯ", "ɔ"],
  ["ü", "u"],
  ["ȧ", "æ"],
  ["ᵊ", "ə"],
  ["ŋ", "ŋ"],
  ["j", "dʒ"],
  ["y", "j"],
  ["g", "ɡ"],
  ["a", "æ"],
  ["e", "ɛ"],
  ["i", "ɪ"],
  ["o", "ɑ"],
  ["u", "ʊ"],
  ["-", ""]
];

export function mwToIpa(pron?: string | null): string {
  if (!pron) {
    return "";
  }

  let result = "";
  let index = 0;

  while (index < pron.length) {
    const replacement = REPLACEMENTS.find(([from]) => pron.startsWith(from, index));

    if (replacement) {
      result += replacement[1];
      index += replacement[0].length;
    }
    else {
      result += pron[index];
      index += 1;
    }
  }

  return result.replace(/\s+/g, " ").trim();
}
