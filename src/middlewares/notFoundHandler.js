import createHttpError from 'http-errors';
import { HTTP_STATUS } from '../constants/constans.js';

export const notFoundHandler = (req, res, next) => {
  const ERROR = createHttpError(HTTP_STATUS.NOT_FOUND, 'Route not found');
  const ERROR_STATUS = ERROR.status;
  const ERROR_MESSAGE = ERROR.message;

  res.status(ERROR_STATUS).json({
    status: ERROR_STATUS,
    message: ERROR_MESSAGE,
  });
};
