export const metersToFt = (meters: number) => {
  const realFt = (meters * 39.37) / 12;
  const roundFt = Math.floor(realFt);
  const inches = Math.round((realFt - roundFt) * 12);

  return roundFt + "'" + inches + '"';
};

export const kgToLbs = (kg: number) => Math.round(kg * 2.205 * 10) / 10;
