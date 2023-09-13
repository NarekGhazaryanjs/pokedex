export interface INameURL {
  url: string;
  name: string;
}

export enum PokemonGenderEnum {
  MALE = "male",
  FEMALE = "female",
}

export type PokemonStatName =
  | "hp"
  | "speed"
  | "attack"
  | "defense"
  | "special-attack"
  | "special-defense";

export enum PokemonAvatarQuality {
  FULL = "full",
  DETAIL = "detail",
}

interface IAbilityItem {
  slot: number;
  ability: INameURL;
  is_hidden: boolean;
}

export interface IPokemonTypeItem {
  slot: number;
  type: INameURL;
}

export interface IPokemonStat {
  url: string;
  name: PokemonStatName;
}

export interface IPokemonStatData {
  effort: 1;
  base_stat: number;
  stat: IPokemonStat;
}

export interface IPokemonData {
  id: number;
  name: string;
  height: number;
  weight: number;
  species: INameURL;
  stats: IPokemonStatData[];
  types: IPokemonTypeItem[];
  abilities: IAbilityItem[];
}

export interface IFlavorTextEntry {
  flavor_text: string;
  version: INameURL;
  language: INameURL;
}

interface IGeneraItem {
  genus: string;
  language: INameURL;
}

export interface IPokemonSpecies {
  flavorText: string;
  genera: IGeneraItem[];
  evolution_chain: { url: string };
}

export interface IEvolutionChain {
  species: INameURL;
  evolves_to: IEvolutionChain[];
}

export enum SortOptionsEnum {
  A_Z_SORT = "A-Z",
  Z_A_SORT = "Z-A",
  LOWEST_TO_HIGHEST_SORT = "Lowest to highest number",
  HIGHEST_TO_LOWEST_SORT = "Highest to lowest number",
}

export interface ITypeResponsePokemon {
  slot: number;
  pokemon: INameURL;
}
