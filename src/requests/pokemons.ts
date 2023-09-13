import { compact } from "lodash";

import { API } from "@utils";
import { INameURL, PokemonGenderEnum } from "@types";
import { MAX_POKEMON_COUNT, UNKNOWN_TYPE_NAME } from "@constants";

export const getAllPokemons = async () => {
  const { data } = await API.get("pokemon", {
    params: { offset: 0, limit: MAX_POKEMON_COUNT },
  });

  return data.results;
};

export const getPokemonData = async (name: string) => {
  const { data } = await API.get(`pokemon/${name}/`);

  return data;
};

export const getPokemonGenders = async (
  name: string
): Promise<(PokemonGenderEnum.MALE | PokemonGenderEnum.FEMALE)[]> => {
  const { data: femaleData } = await API.get(`gender/1`);
  const { data: maleData } = await API.get(`gender/2`);

  const getItemName = (item: { pokemon_species: INameURL }) =>
    item.pokemon_species.name;

  const malePokemonNames = maleData.pokemon_species_details.map(getItemName);
  const femalePokemonNames =
    femaleData.pokemon_species_details.map(getItemName);

  return compact([
    malePokemonNames.includes(name) ? PokemonGenderEnum.MALE : null,
    femalePokemonNames.includes(name) ? PokemonGenderEnum.FEMALE : null,
  ]);
};

export const getPokemonTypes = async () => {
  const { data } = await API.get("/type");

  return data.results.filter(
    (type: INameURL) => type.name !== UNKNOWN_TYPE_NAME
  );
};
