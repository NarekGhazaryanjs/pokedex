import React from "react";
import classNames from "classnames";

import { PokemonStatName } from "@types";
import { HP_TEXT, MAX_STAT_VALUES } from "@constants";

import { StatColumnProps } from "./types";
import styles from "./StatColumn.module.scss";

const StatColumn: React.FC<StatColumnProps> = ({ stat, baseStat }) => {
  const blockNumbers = Array.from({ length: 15 }, (_, index) => index);
  const nameWithoutDash = stat.name.replace("-", " ");
  const statName =
    stat.name === HP_TEXT.toLowerCase() ? HP_TEXT : nameWithoutDash;

  const getBlockClassName = (
    number: number,
    statName: PokemonStatName,
    baseStat: number
  ) => {
    const isLast = number === blockNumbers.length - 1;
    const maxValue = MAX_STAT_VALUES[statName];
    const progress = (baseStat / maxValue) * 15;
    const hasPassed = progress >= blockNumbers.length - number;

    return classNames(styles.column__block, {
      [styles.column__block_filled]: hasPassed || isLast,
    });
  };

  const blocks = blockNumbers.map((number) => {
    const className = getBlockClassName(number, stat.name, baseStat);

    return <div key={number} className={className} />;
  });

  return (
    <div>
      <div className={styles.column}>{blocks}</div>
      <p className={styles.column_name}>{statName}</p>
    </div>
  );
};

export default StatColumn;
