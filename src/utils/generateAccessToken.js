import crypto from 'crypto';

export const generateAccessToken = () => {
  return crypto.randomBytes(32).toString('base64');
};
