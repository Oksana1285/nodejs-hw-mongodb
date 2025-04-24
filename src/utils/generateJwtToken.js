import jwt from 'jsonwebtoken';
import { ENV_VARIANT, JWT } from '../constants/constans.js';
import { getEnvVar } from './getEnvVar.js';

export const generateJwtToken = (id, email) => {
  return jwt.sign(
    {
      sub: id,
      email,
    },
    getEnvVar(ENV_VARIANT.JWT_SECRET),
    {
      expiresIn: JWT.EXPIRE_IN,
    },
  );
};
