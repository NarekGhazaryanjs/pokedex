import { AnyAction } from "redux";

import { filterPokemons } from "@utils";
import { INameURL, SortOptionsEnum } from "@types";
import { DEFAULT_LIMIT_OPTION, HYDRATE } from "@constants";

export const SET_PAGE = "SET_PAGE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_POKEMONS = "SET_POKEMONS";
export const SET_SORT_OPTION = "SET_SORT_OPTION";
export const SET_SEARCH_VALUE = "SET_SEARCH_VALUE";
export const START_POKEMON_TYPE_FILTER = "START_POKEMON_TYPE_FILTER";
export const SET_TYPE_FILTERED_POKEMONS = "SET_TYPE_FILTERED_POKEMONS";

export interface IPokemonsState {
  count: number;
  limit: number;
  offset: number;
  loading: boolean;
  searchValue: string;
  pokemons: INameURL[];
  sortOption: SortOptionsEnum;
  typeFilteredPokemons: INameURL[] | null;
}

const INITIAL_STATE: IPokemonsState = {
  count: 0,
  offset: 0,
  pokemons: [],
  loading: false,
  searchValue: "",
  typeFilteredPokemons: null,
  limit: DEFAULT_LIMIT_OPTION,
  sortOption: SortOptionsEnum.LOWEST_TO_HIGHEST_SORT,
};

const pokemonsReducer = (
  state = INITIAL_STATE,
  { type, payload }: AnyAction
) => {
  switch (type) {
    case HYDRATE: {
      return state.pokemons.length ? state : payload.pokemons;
    }

    case SET_POKEMONS: {
      return {
        ...state,
        pokemons: payload.pokemons,
        count: payload.pokemons.length,
      };
    }

    case SET_PAGE: {
      return { ...state, offset: (payload.page - 1) * state.limit };
    }

    case SET_LIMIT: {
      const pageIndex = Math.floor(state.offset / payload.limit);
      const newOffset = pageIndex * payload.limit;

      return { ...state, offset: newOffset, limit: payload.limit };
    }

    case SET_SEARCH_VALUE: {
      const pokemons = state.typeFilteredPokemons || state.pokemons;
      const filteredPokemons = filterPokemons(pokemons, payload.value);

      return {
        ...state,
        offset: 0,
        searchValue: payload.value,
        count: filteredPokemons.length,
      };
    }

    case SET_SORT_OPTION: {
      return { ...state, sortOption: payload.sortOption, offset: 0 };
    }

    case START_POKEMON_TYPE_FILTER: {
      return { ...state, loading: true };
    }

    case SET_TYPE_FILTERED_POKEMONS: {
      const pokemons = payload.pokemons || state.pokemons;
      const filteredPokemons = filterPokemons(pokemons, state.searchValue);

      return {
        ...state,
        offset: 0,
        loading: false,
        count: filteredPokemons.length,
        typeFilteredPokemons: payload.pokemons,
      };
    }

    default: {
      return state;
    }
  }
};

export default pokemonsReducer;
