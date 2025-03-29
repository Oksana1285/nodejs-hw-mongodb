import dotenv from 'dotenv';

dotenv.config();

// const MONGO_URI = process.env.MONGO_URI;

// console.log('MONGO_URI:', MONGO_URI);

export const getEnvVar = (name, defaultValue) => {
  const value = process.env[name];

  if (value) return value;

  if (defaultValue) return defaultValue;

  throw new Error(`Missing: process.env['${name}'].`);
};
