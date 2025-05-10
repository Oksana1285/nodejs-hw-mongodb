import bcrypt from 'bcrypt';
import { ENV_VARIANT } from '../constants/constans.js';
import { getEnvVar } from './getEnvVar.js';

export const getEncryptedPassword = async (password) =>
  await bcrypt.hash(password, Number(getEnvVar(ENV_VARIANT.SALT)));
