const getPaginationButtonNames = ({
  limit,
  totalCount,
  currentPage,
}: {
  limit: number;
  totalCount: number;
  currentPage: number;
}): number[] => {
  const allButtonNames = Array.from(
    { length: totalCount / limit + 1 },
    (_, i) => i + 1
  );

  const isReachingTheEnd = allButtonNames.slice(-3).includes(currentPage);
  const lastButtons = allButtonNames.slice(-7);
  const buttonsAround = allButtonNames.slice(
    Math.max(0, currentPage - 4),
    Math.max(currentPage + 3, 7)
  );

  return isReachingTheEnd ? lastButtons : buttonsAround;
};

export default getPaginationButtonNames;
