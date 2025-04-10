import createHttpError from 'http-errors';
import { isValidObjectId } from 'mongoose';
import { HTTP_STATUS } from '../constants/constans.js';

export const isValidId =
  (idName = 'id') =>
  (req, res, next) => {
    const id = req.params[idName];
    console.log('id: ', id);

    if (!id) throw new Error('id is not provided in isValidId');

    if (!isValidObjectId(id))
      return next(
        createHttpError(HTTP_STATUS.NOT_FOUND, `Invalid ID: '${id}' provided.`),
      );

    return next();
  };
