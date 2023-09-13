import { INameURL } from "@types";

const filterPokemons = (pokemons: INameURL[], searchValue: string) => {
  return pokemons.filter((pokemon) => pokemon.name.includes(searchValue));
};

export default filterPokemons;
