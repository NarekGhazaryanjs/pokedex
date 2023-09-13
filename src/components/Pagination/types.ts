export type PaginationTypes = {
  limit: number;
  totalCount: number;
  currentPage: number;
  setPage: (page: number) => void;
};
