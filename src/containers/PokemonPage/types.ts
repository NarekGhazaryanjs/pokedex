import { INameURL, IPokemonData, IPokemonSpecies } from "@types";

export type PokemonPageProps = {
  genders: string[];
  pokemonData: IPokemonData;
  evolutionPokemons: INameURL[];
  pokemonSpecies: IPokemonSpecies;
};
