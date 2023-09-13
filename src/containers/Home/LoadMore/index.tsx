import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { Loader } from "@components";
import { pokemonActions } from "@actions";
import { useMobileLoadMore } from "@hooks";
import { pokemonSelectors, pokemonTypesSelectors } from "@selectors";

const LoadMore: React.FC = () => {
  const sortOption = useSelector(pokemonSelectors.selectSortOption);
  const searchFilter = useSelector(pokemonSelectors.selectSearchValue);
  const activeType = useSelector(pokemonTypesSelectors.selectActiveType);
  const { count, limit } = useSelector(pokemonSelectors.selectPaginationParams);

  const dispatch = useDispatch();

  const setLimit = (newLimit: number) => {
    dispatch(pokemonActions.setLimit(newLimit));
  };

  const isLoadingMore = useMobileLoadMore({
    limit,
    setLimit,
    sortOption,
    searchFilter,
    totalCount: count,
    typeFilter: activeType.name,
  });

  return isLoadingMore ? <Loader loadingMore={true} /> : <React.Fragment />;
};

export default LoadMore;
