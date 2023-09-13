import type { NextPage, GetStaticProps } from "next";

import { wrapper } from "@store";
import { HelmetLayout } from "@layouts";
import { HomeContainer } from "@containers";
import { getAllPokemons, getPokemonTypes } from "@requests";
import { pokemonActions, pokemonTypesActions } from "@actions";

const Home: NextPage = () => (
  <HelmetLayout
    title="Pokédex"
    metaDescription="Explore Pokémon from the original Pokémon API."
  >
    <HomeContainer />
  </HelmetLayout>
);

export const getStaticProps: GetStaticProps = wrapper.getStaticProps(
  (store) => async () => {
    try {
      const allPokemons = await getAllPokemons();
      store.dispatch(pokemonActions.setPokemons(allPokemons));

      const pokemonTypes = await getPokemonTypes();
      store.dispatch(pokemonTypesActions.setPokemonTypes(pokemonTypes));

      return { props: {} };
    } catch {
      return { notFound: true };
    }
  }
);

export default Home;
