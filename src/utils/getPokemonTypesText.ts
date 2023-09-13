import { IPokemonTypeItem } from "@types";

const getPokemonTypesText = (types: IPokemonTypeItem[] | undefined): string =>
  types ? types.map(({ type }) => type.name).join(", ") : "";

export default getPokemonTypesText;
