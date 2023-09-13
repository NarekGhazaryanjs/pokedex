import React, { useMemo } from "react";

import { kgToLbs, metersToFt } from "@utils";

import { PokemonInfoGridProps } from "./types";
import styles from "./PokemonInfoGrid.module.scss";

const PokemonInfoGrid: React.FC<PokemonInfoGridProps> = ({
  genders,
  pokemonData,
  pokemonSpecies,
}) => {
  const heightM = pokemonData.height / 10;
  const weightKg = pokemonData.weight / 10;
  const heightFt = metersToFt(heightM);
  const weightLbs = kgToLbs(weightKg);

  const foundGenus = pokemonSpecies.genera.find(
    (item) => item.language.name === "en"
  )?.genus;

  const category = foundGenus ? foundGenus.replace("Pokémon", "") : "unknown";

  const genderTexts = genders.map((item) => <p key={item}>{item}</p>);

  const types = useMemo(
    () =>
      pokemonData.types.map(({ type }) => <p key={type.name}>{type.name}</p>),
    [pokemonData]
  );

  const abilities = useMemo(
    () =>
      pokemonData.abilities.reduce((acc, { ability, is_hidden }) => {
        if (!is_hidden) {
          acc.push(<p key={ability.name}>{ability.name}</p>);
        }

        return acc;
      }, [] as React.ReactNode[]),
    [pokemonData]
  );

  return (
    <div className={styles.content}>
      <div className={styles.content__item}>
        <p className={styles.content__item__heading}>Height</p>
        <p>
          {heightM}m ({heightFt})
        </p>
      </div>
      <div className={styles.content__item}>
        <p className={styles.content__item__heading}>Weight</p>
        <p>
          {weightKg}kg ({weightLbs}lbs)
        </p>
      </div>
      <div className={styles.content__item}>
        <p className={styles.content__item__heading}>Category</p>
        <p>{category}</p>
      </div>
      <div className={styles.content__item}>
        <p className={styles.content__item__heading}>Types</p>
        {types}
      </div>
      <div className={styles.content__item}>
        <p className={styles.content__item__heading}>Abilities</p>
        {abilities}
      </div>
      <div className={styles.content__item}>
        <p className={styles.content__item__heading}>Genders</p>
        {genders.length ? genderTexts : <p>none</p>}
      </div>
    </div>
  );
};
export default PokemonInfoGrid;
