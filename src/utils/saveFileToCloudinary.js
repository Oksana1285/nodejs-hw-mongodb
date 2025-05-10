import cloudinary from 'cloudinary';
import fs from 'node:fs/promises';
import { ENV_VARIANT } from '../constants/constans.js';
import { getEnvVar } from './getEnvVar.js';

const { CLOUD_NAME, API_KEY, API_SECRET } = ENV_VARIANT.CLOUDINARY;
cloudinary.v2.config({
  secure: true,
  cloud_name: getEnvVar(CLOUD_NAME),
  api_key: getEnvVar(API_KEY),
  api_secret: getEnvVar(API_SECRET),
});

export const saveFileToCloudinary = async (file) => {
  const response = await cloudinary.v2.uploader.upload(file.path);
  await fs.unlink(file.path);
  return response.secure_url;
};
