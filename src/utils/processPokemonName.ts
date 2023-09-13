import { capitalizeFirstLetter } from "@utils";

const processPokemonName = (name: string): string => {
  const nameSlice = name.includes("-")
    ? name.slice(0, name.indexOf("-"))
    : name;

  return capitalizeFirstLetter(nameSlice);
};

export default processPokemonName;
