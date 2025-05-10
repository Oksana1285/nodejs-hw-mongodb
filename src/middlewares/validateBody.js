import { HTTP_STATUS } from '../constants/constans.js';

export const validateBody = (schema) => async (req, res, next) => {
  try {
    await schema.validateAsync(req.body, { abortEarly: false });
    next();
  } catch (error) {
    const formattedErrors = error.details.map((detail) => ({
      field: detail.path.join('.'),
      message: detail.message.replace(/"/g, ''),
    }));

    return res.status(HTTP_STATUS.BAD_REQUEST).json({
      status: 'fail',
      message: 'Validation error',
      errors: formattedErrors,
    });
  }
};
