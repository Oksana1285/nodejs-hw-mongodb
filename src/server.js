import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import pino from 'pino-http';
import { pinoConfig } from './config/pinoConfig.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VARIANT } from './constants/constans.js';
import { notFoundHandler } from './middlewares/notFoundHandler.js';
import { errorHandler } from './middlewares/errorHandler.js';
import router from './routers/index.js';
import cookieParser from 'cookie-parser';
import { swaggerDocs } from './middlewares/swaggerDocs.js';

const PORT = Number(getEnvVar(ENV_VARIANT.PORT, 3000));

export const setupServer = () => {
  const app = express();

  app.use(cors());

  app.use(cookieParser());

  app.use(pino(pinoConfig));

  app.use(bodyParser.urlencoded({ extended: true }));

  app.use('/api-docs', swaggerDocs());

  app.use(router);

  app.use('*', notFoundHandler);

  app.use(errorHandler);

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
};
