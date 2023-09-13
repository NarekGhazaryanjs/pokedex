import processPokemonName from "./processPokemonName";

const MAX_SUGGESTIONS = 5;

const getPokemonSuggestions = (options: string[], value: string) => {
  return options
    .filter((option) => {
      const lowercaseOption = option.toLowerCase();
      const lowercaseInputValue = value.toLowerCase();

      return lowercaseOption.includes(lowercaseInputValue);
    })
    .slice(0, MAX_SUGGESTIONS)
    .map((name) => processPokemonName(name));
};

export default getPokemonSuggestions;
