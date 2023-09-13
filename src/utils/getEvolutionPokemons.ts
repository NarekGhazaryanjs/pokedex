import axios from "axios";
import { compact } from "lodash";

import { IEvolutionChain, INameURL } from "@types";

const getEvolutionPokemons = async (
  chain: IEvolutionChain
): Promise<INameURL[]> => {
  const firstUrl = chain.species.url;
  const firstEvolvesTo = chain.evolves_to[0];
  const secondUrl = firstEvolvesTo ? firstEvolvesTo.species.url : "";
  const secondEvolvesTo = firstEvolvesTo?.evolves_to[0];
  const thirdUrl = secondEvolvesTo ? secondEvolvesTo.species.url : "";

  const speciesUrls = compact([firstUrl, secondUrl, thirdUrl]);

  const pokemonsPromises = speciesUrls.map(async (url) => {
    const { data } = await axios.get(url);

    return data.varieties[0].pokemon;
  });

  return Promise.all(pokemonsPromises);
};

export default getEvolutionPokemons;
