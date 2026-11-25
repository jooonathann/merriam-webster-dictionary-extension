import { IPA_SYMBOLS } from "../constants/ipaSymbols";
import { IpaSymbol } from "../types";

export type SplitIpaSymbol = {
  symbol: string;
  entry?: IpaSymbol;
};

const SORTED_SYMBOLS = [...IPA_SYMBOLS].sort((a, b) => b.symbol.length - a.symbol.length);
const IGNORED_MARKS = /[ˈˌː.\s-]/g;

export function splitIpaIntoSymbols(ipa: string): SplitIpaSymbol[] {
  const cleaned = ipa.replace(IGNORED_MARKS, "");
  const result: SplitIpaSymbol[] = [];

  let index = 0;

  while (index < cleaned.length) {
    const match = SORTED_SYMBOLS.find(({ symbol }) => cleaned.startsWith(symbol, index));

    if (match) {
      result.push({ symbol: match.symbol, entry: match });
      index += match.symbol.length;
    }
    else {
      result.push({ symbol: cleaned[index] });
      index += 1;
    }
  }

  return result;
}
