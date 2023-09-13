import React from "react";

import { RightArrowIcon } from "@assets";
import { PokemonCard } from "@components";

import { PokemonEvolutionsProps } from "./types";
import styles from "./PokemonEvolutions.module.scss";

const PokemonEvolutions: React.FC<PokemonEvolutionsProps> = ({ pokemons }) => {
  const evolutionItems = pokemons.map(({ name, url }, index) => (
    <React.Fragment key={name}>
      <PokemonCard url={url} />
      {index !== pokemons.length - 1 && (
        <RightArrowIcon className={styles.content__list__arrow} />
      )}
    </React.Fragment>
  ));

  return (
    <div className={styles.content}>
      <h2 className={styles.content__heading}>Evolutions</h2>
      <div className={styles.content__list}>{evolutionItems}</div>
    </div>
  );
};

export default PokemonEvolutions;
