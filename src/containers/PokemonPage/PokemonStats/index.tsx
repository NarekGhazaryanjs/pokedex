import React, { useMemo } from "react";

import StatColumn from "../StatColumn";

import { PokemonStatsProps } from "./types";
import styles from "./PokemonStats.module.scss";

const PokemonStats: React.FC<PokemonStatsProps> = ({ pokemonStats }) => {
  const statsSection = useMemo(
    () =>
      pokemonStats.map(({ stat, base_stat }) => (
        <StatColumn key={stat.name} stat={stat} baseStat={base_stat} />
      )),
    [pokemonStats]
  );

  return (
    <div className={styles.content}>
      <h2 className={styles.content__heading}>Stats</h2>
      <div className={styles.content__stats}>{statsSection}</div>
    </div>
  );
};

export default PokemonStats;
