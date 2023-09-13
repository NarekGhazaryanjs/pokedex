import { PATHS } from "@constants";

const getPokemonRoute = (name: string) => {
  return `${PATHS.pokemon}/${name}`;
};

export default getPokemonRoute;
