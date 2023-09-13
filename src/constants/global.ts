import { SortOptionsEnum } from "@types";

export const API_URL = "https://pokeapi.co/api/v2/";
export const ASSETS_URL = "https://assets.pokemon.com/assets/cms2/img/pokedex";

export const HYDRATE = "__NEXT_REDUX_WRAPPER_HYDRATE__";

export const MAX_POKEMON_COUNT = 898;
export const LIMIT_OPTIONS = [10, 20, 50];
export const DEFAULT_LIMIT_OPTION = LIMIT_OPTIONS[1];

export const SORT_OPTIONS: SortOptionsEnum[] = [
  SortOptionsEnum.LOWEST_TO_HIGHEST_SORT,
  SortOptionsEnum.HIGHEST_TO_LOWEST_SORT,
  SortOptionsEnum.A_Z_SORT,
  SortOptionsEnum.Z_A_SORT,
];

export const ALL_TYPES_NAME = "all types";
export const UNKNOWN_TYPE_NAME = "unknown";

export const HP_TEXT = "HP";

export const TABLET_SIZE = 768;

export const MOBILE_LIMIT_STEP = 20;
export const MOBILE_LOAD_MORE_DELAY = 600;
