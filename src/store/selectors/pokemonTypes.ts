import { createSelector } from "reselect";

import { IState } from "@types";

export const selectPokemonTypes = (state: IState) => state.pokemonTypes.types;

export const selectActiveType = (state: IState) =>
  state.pokemonTypes.activeType;

export const selectPokemonTypeNames = createSelector(
  selectPokemonTypes,
  (types) => types.map((type) => type.name)
);
