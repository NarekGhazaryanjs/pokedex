import { IPokemonsState } from "@reducers/pokemons";
import { IPokemonTypesState } from "@reducers/pokemonTypes";

export interface IState {
  pokemons: IPokemonsState;
  pokemonTypes: IPokemonTypesState;
}
