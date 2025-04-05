import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';
import { ENV_VARIANT } from '../constants/constans.js';

export const initMongoConnection = async () => {
  try {
    const user = getEnvVar(ENV_VARIANT.MONGODB_USER);
    const pwd = getEnvVar(ENV_VARIANT.MONGODB_PASSWORD);
    const url = getEnvVar(ENV_VARIANT.MONGODB_URL);
    const db = getEnvVar(ENV_VARIANT.MONGODB_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster01`,
    );

    console.log(`Successfully connection to database`);
  } catch (error) {
    console.error(`Error while setting up mongo connection`, error);
    throw error;
  }
};
