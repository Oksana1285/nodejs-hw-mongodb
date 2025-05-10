export const calculatePaginationData = (count, page = 1, perPage = 10) => {
  const safePage = Math.max(1, parseInt(page, 10));
  const safePerPage = Math.max(1, parseInt(perPage, 10));

  const totalPages = Math.ceil(count / safePerPage);
  const hasNextPage = safePage < totalPages;
  const hasPreviousPage = safePage > 1;

  return {
    page: safePage,
    perPage: safePerPage,
    totalItems: count,
    totalPages,
    hasNextPage,
    hasPreviousPage,
  };
};
