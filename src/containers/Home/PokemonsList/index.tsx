import React from "react";
import { useSelector } from "react-redux";

import { INameURL } from "@types";
import { PokemonCard } from "@components";
import { pokemonSelectors } from "@selectors";

import styles from "./PokemonsList.module.scss";

const PokemonsList: React.FC = () => {
  const visiblePokemons = useSelector(pokemonSelectors.selectVisiblePokemons);

  const listItems = visiblePokemons.map(({ url, name }: INameURL) => (
    <li key={name}>
      <PokemonCard url={url} className={styles.list__card} />
    </li>
  ));

  return visiblePokemons.length ? (
    <ul className={styles.list}>{listItems}</ul>
  ) : (
    <p className={styles.empty_list}>Nothing was found</p>
  );
};

export default PokemonsList;
