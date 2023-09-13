import { INameURL, SortOptionsEnum } from "@types";

const getPokemonSortFunction = (sortOption: SortOptionsEnum) => {
  const alphabeticalSortASC = (a: INameURL, b: INameURL) => {
    return a.name.localeCompare(b.name);
  };
  const alphabeticalSortDESC = (a: INameURL, b: INameURL) => {
    return b.name.localeCompare(a.name);
  };
  const noSort = () => 1;
  const reverseSort = () => -1;

  switch (sortOption) {
    case SortOptionsEnum.A_Z_SORT: {
      return alphabeticalSortASC;
    }

    case SortOptionsEnum.Z_A_SORT: {
      return alphabeticalSortDESC;
    }

    case SortOptionsEnum.LOWEST_TO_HIGHEST_SORT: {
      return noSort;
    }

    case SortOptionsEnum.HIGHEST_TO_LOWEST_SORT: {
      return reverseSort;
    }

    default: {
      return noSort;
    }
  }
};

export default getPokemonSortFunction;
