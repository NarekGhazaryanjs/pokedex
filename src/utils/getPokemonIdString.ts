const getPokemonIdString = (id: number): string => {
  const stringId = String(id);

  return stringId.length < 3 ? `00${stringId}`.slice(-3) : stringId;
};

export default getPokemonIdString;
