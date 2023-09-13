import { Dispatch } from "redux";

import {
  SET_PAGE,
  SET_LIMIT,
  SET_POKEMONS,
  SET_SORT_OPTION,
  SET_SEARCH_VALUE,
  START_POKEMON_TYPE_FILTER,
  SET_TYPE_FILTERED_POKEMONS,
} from "@reducers/pokemons";
import { MAX_POKEMON_COUNT } from "@constants";
import { INameURL, ITypeResponsePokemon } from "@types";
import { createAction, API, getPokemonIdFromUrl } from "@utils";

export const setPokemons = (pokemons: INameURL[]) =>
  createAction(SET_POKEMONS, { pokemons });

export const setPage = (page: number) => createAction(SET_PAGE, { page });

export const setSearchValue = (value: string) =>
  createAction(SET_SEARCH_VALUE, { value });

export const setLimit = (limit: number) => createAction(SET_LIMIT, { limit });

export const setSortOption = (sortOption: string) =>
  createAction(SET_SORT_OPTION, { sortOption });

const setTypeFilteredPokemons = (pokemons: INameURL[] | null) =>
  createAction(SET_TYPE_FILTERED_POKEMONS, { pokemons });

const startPokemonTypeFilter = () =>
  createAction(START_POKEMON_TYPE_FILTER, {});

export const filterByType = (type: INameURL) => async (dispatch: Dispatch) => {
  dispatch(startPokemonTypeFilter());

  const response = type.url ? await API.get(type.url) : null;
  const pokemonData = response?.data.pokemon || null;
  const pokemons = pokemonData
    ? pokemonData.map((item: ITypeResponsePokemon) => item.pokemon)
    : null;
  const filteredPokemons = pokemons
    ? pokemons.filter(
        (pokemon: INameURL) =>
          getPokemonIdFromUrl(pokemon.url) < MAX_POKEMON_COUNT
      )
    : null;

  dispatch(setTypeFilteredPokemons(filteredPokemons));
};
