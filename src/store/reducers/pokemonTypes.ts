import { AnyAction } from "redux";

import { INameURL } from "@types";
import { ALL_TYPES_NAME, HYDRATE } from "@constants";

export const SET_POKEMON_TYPES = "SET_POKEMON_TYPES";
export const SET_ACTIVE_POKEMON_TYPE = "SET_ACTIVE_POKEMON_TYPE";

export interface IPokemonTypesState {
  types: INameURL[];
  activeType: INameURL;
}

const INITIAL_STATE: IPokemonTypesState = {
  types: [],
  activeType: {
    name: ALL_TYPES_NAME,
    url: "",
  },
};

const pokemonTypesReducer = (
  state = INITIAL_STATE,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case HYDRATE: {
      return state.activeType.url ? state : payload.pokemonTypes;
    }

    case SET_POKEMON_TYPES: {
      return { ...state, types: payload.types };
    }

    case SET_ACTIVE_POKEMON_TYPE: {
      const foundType = state.types.find(
        (type) => type.name === payload.typeName
      );
      const type =
        payload.typeName === ALL_TYPES_NAME
          ? INITIAL_STATE.activeType
          : foundType;

      return { ...state, activeType: type };
    }

    default: {
      return state;
    }
  }
};

export default pokemonTypesReducer;
