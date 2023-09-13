import React from "react";
import Link from "next/link";
import Image from "next/image";

import {
  getPokemonIdString,
  processPokemonName,
  getPokemonAvatarSrc,
} from "@utils";

import PokemonStats from "./PokemonStats";
import PokemonInfoGrid from "./PokemonInfoGrid";
import PokemonEvolutions from "./PokemonEvolutions";
import { PokemonPageProps } from "./types";
import styles from "./PokemonPage.module.scss";

const PokemonPageContainer: React.FC<PokemonPageProps> = ({
  genders,
  pokemonData,
  pokemonSpecies,
  evolutionPokemons,
}) => {
  const idString = getPokemonIdString(pokemonData.id);
  const processedName = processPokemonName(pokemonData.name);
  const avatarImageSrc = getPokemonAvatarSrc(pokemonData.id, { full: true });

  return (
    <div className={styles.container}>
      <Link href="/">
        <a className={styles.container__back}>← Explore more Pokémon</a>
      </Link>
      <h1 className={styles.container__title}>
        {processedName} #{idString}
      </h1>
      <div className={styles.container__grid}>
        <div className={styles.container__grid__avatar}>
          <Image
            width={430}
            height={430}
            priority={true}
            alt="pokemon avatar"
            src={avatarImageSrc}
          />
        </div>
        <div>
          <p className={styles.container__grid__flavor_text}>
            {pokemonSpecies.flavorText}
          </p>
          <PokemonInfoGrid
            genders={genders}
            pokemonData={pokemonData}
            pokemonSpecies={pokemonSpecies}
          />
          <PokemonStats pokemonStats={pokemonData.stats} />
        </div>
      </div>
      <PokemonEvolutions pokemons={evolutionPokemons} />
    </div>
  );
};

export default PokemonPageContainer;
