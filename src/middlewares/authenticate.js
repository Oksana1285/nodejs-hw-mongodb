import createHttpError from 'http-errors';
import { HTTP_STATUS } from '../constants/constans.js';
import { SessionCollection } from '../db/models/Sessions.js';
import { UserCollection } from '../db/models/users.js';

const { NOT_FOUND, UNAUTHORIZED } = HTTP_STATUS;

export const authenticate = async (req, res, next) => {
  const authHeader = req.get('Authorization');

  if (!authHeader) {
    return next(createHttpError(NOT_FOUND, 'Authorization header not found'));
  }

  const [bearer, token] = authHeader.split(' ');

  if (bearer !== 'Bearer' || !token) {
    return next(
      createHttpError(UNAUTHORIZED, 'Auth header should be of type Bearer'),
    );
  }

  try {
    const session = await SessionCollection.findOne({ accessToken: token });

    if (!session) {
      return next(createHttpError(NOT_FOUND, 'Session not found'));
    }

    const isAccessTokenExpired =
      new Date() > new Date(session.accessTokenValidUntil);

    if (isAccessTokenExpired) {
      return next(createHttpError(UNAUTHORIZED, 'Access token expired'));
    }

    const user = await UserCollection.findById(session.userId);

    if (!user) {
      return next(createHttpError(NOT_FOUND, 'User not found'));
    }

    req.user = user;

    next();
  } catch (error) {
    next(error);
  }
};
