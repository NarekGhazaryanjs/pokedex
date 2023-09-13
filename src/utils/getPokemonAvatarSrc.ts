import { ASSETS_URL } from "@constants";
import { getPokemonIdString } from "@utils";
import { PokemonAvatarQuality } from "@types";

const getPokemonAvatarSrc = (
  id: number,
  options?: { full: boolean }
): string => {
  const idString = getPokemonIdString(id);
  const quality = options?.full
    ? PokemonAvatarQuality.FULL
    : PokemonAvatarQuality.DETAIL;

  return `${ASSETS_URL}/${quality}/${idString}.png`;
};

export default getPokemonAvatarSrc;
