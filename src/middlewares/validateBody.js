import { HTTP_STATUS } from '../constants/constans.js';
import createHttpError from 'http-errors';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });

    next();
  } catch (error) {
    const errorMessages = error.details
      .map((detail) => detail.message.replace(/"/g, ''))
      .join('; ');

    const httpError = createHttpError(
      HTTP_STATUS.BAD_REQUEST,
      'Bad request, body parameters are incorrect',
      {
        errors: errorMessages,
      },
    );

    next(httpError);
  }
};
