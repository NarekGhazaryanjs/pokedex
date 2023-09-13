import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { pokemonActions } from "@actions";
import { pokemonSelectors } from "@selectors";
import { Pagination, Loader } from "@components";

import LoadMore from "./LoadMore";
import styles from "./Home.module.scss";
import PokemonsList from "./PokemonsList";
import ListControls from "./ListControls";

const HomeContainer: React.FC = () => {
  const { count, limit } = useSelector(pokemonSelectors.selectPaginationParams);
  const currentPage = useSelector(pokemonSelectors.selectCurrentPage);
  const searchValue = useSelector(pokemonSelectors.selectSearchValue);
  const isLoading = useSelector(pokemonSelectors.selectPokemonsLoading);

  const dispatch = useDispatch();

  const setPage = (page: number) => {
    dispatch(pokemonActions.setPage(page));
    window.scroll(0, 0);
  };

  return (
    <div className={styles.container}>
      <h1 className={styles.container__title}>Pokédex</h1>
      <ListControls />
      {searchValue && (
        <p className={styles.container__search_filter}>
          Showing matches for{" "}
          <span className={styles.container__search_filter__value}>
            &quot;{searchValue}&quot;
          </span>
        </p>
      )}
      {isLoading ? (
        <div className={styles.container__list_loading}>
          <Loader />
        </div>
      ) : (
        <React.Fragment>
          <PokemonsList />
          <div className={styles.container__pagination}>
            <Pagination
              limit={limit}
              setPage={setPage}
              totalCount={count}
              currentPage={currentPage}
            />
          </div>
        </React.Fragment>
      )}
      <LoadMore />
    </div>
  );
};

export default HomeContainer;
