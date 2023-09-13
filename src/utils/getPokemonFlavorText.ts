import { IFlavorTextEntry } from "@types";

const getPokemonFlavorText = (
  flavorTextEntries: IFlavorTextEntry[]
): string => {
  const englishText = flavorTextEntries.find(
    (item) => item.language.name === "en"
  );

  return englishText
    ? englishText.flavor_text
        .replace("\f", " ")
        .split("POKéMON")
        .join("Pokémon")
    : "";
};

export default getPokemonFlavorText;
