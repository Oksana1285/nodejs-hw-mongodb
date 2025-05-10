export const ENV_VARIANT = {
  PORT: 'PORT',
  MONGODB_USER: 'MONGODB_USER',
  MONGODB_PASSWORD: 'MONGODB_PASSWORD',
  MONGODB_URL: 'MONGODB_URL',
  MONGODB_DB: 'MONGODB_DB',
};

export const HTTP_STATUS = {
  OK: 200,
  CREATED: 201,
  NO_CONTENT: 204,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  METHOD_NOT_ALLOWED: 405,
  REQUEST_TIMEOUT: 408,
  TOO_MANY_REQUESTS: 429,
  INTERNAL_SERVER_ERROR: 500,
};

export const VALIDATION_LENGTH = {
  MIN_LENGTH: 3,
  MAX_LENGTH: 20,
};

export const PAGINATION_DEFAULT_DATA = {
  PAGE: 1,
  PER_PAGE: 10,
};

export const JOI_MSG_VALIDATION = {
  MIN: `'{{#label}}' must be at least '{{#limit}}''`,
  MAX: `'{{#label}}' must be less than or equal to '{{#limit}}''`,
  ONE_OF: `'{{#label}}' must be one of the following values: '{{#valids}}''`,
  REQUIRED: `'{{#label}}' is a required field`,
  STRING: `'{{#label}} must be a string'`,
  NUMBER: `'{{#label}}' must be a number'`,
  INTEGER: `'{{#label}}' must be an integer'`,
  BOOLEAN: `'{{#label}}' must be a boolean value'`,
  PHONE_NUMBER: `'{{#label}}' must be a valid phone number'`,
  EMAIL: `'{{#label}}' must be a valid email address'`,
};

export const SORT_LIST = {
  ASC: 'asc',
  DESC: 'desc',
};
