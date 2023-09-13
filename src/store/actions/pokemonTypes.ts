import {
  SET_POKEMON_TYPES,
  SET_ACTIVE_POKEMON_TYPE,
} from "@reducers/pokemonTypes";
import { INameURL } from "@types";
import { createAction } from "@utils";

export const setPokemonTypes = (types: INameURL[]) =>
  createAction(SET_POKEMON_TYPES, { types });

export const setActiveType = (typeName: string) =>
  createAction(SET_ACTIVE_POKEMON_TYPE, { typeName });
