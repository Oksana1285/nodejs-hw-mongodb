import { isHttpError } from 'http-errors';
import { HTTP_STATUS } from '../constants/constans.js';
import { MongooseError } from 'mongoose';

export const errorHandler = (error, req, res, next) => {
  let ERROR_STATUS;

  if (isHttpError(error)) {
    ERROR_STATUS = error.status;
    res.status(ERROR_STATUS).json({
      status: ERROR_STATUS,
      message: error.name,
      data: error.message,
    });
    return;
  }

  ERROR_STATUS = HTTP_STATUS.INTERNAL_SERVER_ERROR;

  if (error instanceof MongooseError) {
    res.status(ERROR_STATUS).json({
      status: ERROR_STATUS,
      message: 'Mongoose error',
      data: { message: error.message },
    });
  }

  res.status(ERROR_STATUS).json({
    status: ERROR_STATUS,
    message: 'Something went wrong',
    data: { message: error.message },
  });
};
