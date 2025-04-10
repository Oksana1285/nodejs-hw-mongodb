import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { corsConfig } from './config/corsConfig.js';
import { pinoConfig } from './config/pinoConfig.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VARIANT } from './constants/constans.js';

import contactsRouter from './routers/contacts.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';

const PORT = Number(getEnvVar(ENV_VARIANT.PORT, 3000));

export const setupServer = () => {
  const app = express();

  app.use(cors(corsConfig));

  app.use(pino(pinoConfig));

  app.use('/contacts', contactsRouter);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
};
