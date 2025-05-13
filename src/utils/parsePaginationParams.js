import { PAGINATION_DEFAULT_DATA } from '../constants/constans.js';

const parseNumber = (number, defaultValue) => {
  const isString = typeof number === 'string';

  if (!isString) return defaultValue;

  const parsedNumber = parseInt(number);

  if (Number.isNaN(parsedNumber)) return defaultValue;

  return Math.abs(parsedNumber);
};

export const parsePaginationParams = (query) => {
  const { page, perPage } = query;
  return {
    page: parseNumber(page, PAGINATION_DEFAULT_DATA.PAGE),
    perPage: parseNumber(perPage, PAGINATION_DEFAULT_DATA.PER_PAGE),
  };
};
