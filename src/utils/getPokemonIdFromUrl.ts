const getPokemonIdFromUrl = (url: string): number => {
  const splitUrl = url.split("/");
  const idString = splitUrl[splitUrl.length - 2];

  return Number(idString);
};

export default getPokemonIdFromUrl;
