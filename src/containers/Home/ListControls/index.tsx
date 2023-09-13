import React from "react";
import classNames from "classnames";
import { useDispatch, useSelector } from "react-redux";

import { useDidUpdateEffect } from "@hooks";
import { Dropdown, Searchbar } from "@components";
import { pokemonActions, pokemonTypesActions } from "@actions";
import { pokemonSelectors, pokemonTypesSelectors } from "@selectors";
import { ALL_TYPES_NAME, LIMIT_OPTIONS, SORT_OPTIONS } from "@constants";

const LIMIT_STRING_OPTIONS = LIMIT_OPTIONS.map((item) => String(item));

import styles from "./ListControls.module.scss";

const ListControls: React.FC = () => {
  const pokemonTypeNames = useSelector(
    pokemonTypesSelectors.selectPokemonTypeNames
  );
  const sortOption = useSelector(pokemonSelectors.selectSortOption);
  const activeType = useSelector(pokemonTypesSelectors.selectActiveType);
  const { limit } = useSelector(pokemonSelectors.selectPaginationParams);
  const typeFilteredPokemons = useSelector(
    pokemonSelectors.selectTypeFilteredPokemons
  );

  const searchSuggestions = typeFilteredPokemons.map((pokemon) => pokemon.name);

  const pokemonTypesOptions = [ALL_TYPES_NAME, ...pokemonTypeNames];

  const typesDropdownClasses = classNames(
    styles.controls__left__dropdown,
    styles.controls__left__dropdown_types
  );

  const dispatch = useDispatch();

  useDidUpdateEffect(() => {
    dispatch(pokemonActions.filterByType(activeType));
  }, [activeType]);

  const setLimitValue = (limitOption: string) => {
    dispatch(pokemonActions.setLimit(Number(limitOption)));
  };

  const setActiveType = (typeName: string) => {
    dispatch(pokemonTypesActions.setActiveType(typeName));
  };

  const setSortOption = (sortOption: string) => {
    dispatch(pokemonActions.setSortOption(sortOption));
  };

  const setSearchValue = (value: string) => {
    dispatch(pokemonActions.setSearchValue(value));
  };

  return (
    <div className={styles.controls}>
      <div className={styles.controls__left}>
        <Searchbar
          maxLength={30}
          options={searchSuggestions}
          placeholder="Search by name"
          setSearchValue={setSearchValue}
          className={styles.controls__left__searchbar}
        />
        <Dropdown
          options={pokemonTypesOptions}
          selectedOption={activeType.name}
          className={typesDropdownClasses}
          setSelectedOption={setActiveType}
          optionsClassName={styles.controls__left__dropdown_types__options}
        />
        <Dropdown
          options={SORT_OPTIONS}
          selectedOption={sortOption}
          setSelectedOption={setSortOption}
          className={styles.controls__left__dropdown}
        />
      </div>
      <div className={styles.controls__right}>
        <p>Show per page: </p>
        <Dropdown
          options={LIMIT_STRING_OPTIONS}
          selectedOption={String(limit)}
          setSelectedOption={setLimitValue}
        />
      </div>
    </div>
  );
};

export default ListControls;
