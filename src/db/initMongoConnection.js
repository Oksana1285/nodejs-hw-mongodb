import mongoose from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';
import { ENV_VARIANT } from '../constants/constans.js';

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_URL, MONGODB_DB } =
  ENV_VARIANT.MONGO;

export const initMongoConnection = async () => {
  try {
    const user = getEnvVar(MONGODB_USER);
    const pwd = getEnvVar(MONGODB_PASSWORD);
    const url = getEnvVar(MONGODB_URL);
    const db = getEnvVar(MONGODB_DB);

    await mongoose.connect(
      `mongodb+srv://${user}:${pwd}@${url}/${db}?retryWrites=true&w=majority&appName=Cluster01`,
    );

    console.log(`Successfully connection to database`);
  } catch (error) {
    console.error(`Error while setting up mongo connection`, error);
    throw error;
  }
};
