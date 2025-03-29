import express from 'express';
import cors from 'cors';
import pino from 'pino-http';
import { corsConfig } from './config/corsConfig.js';
import { pinoConfig } from './config/pinoConfig.js';
import { getEnvVar } from './utils/getEnvVar.js';
import { ENV_VARIANT, HTTP_STATUS } from './constants/constans.js';

import { getAllContacts, getContactById } from './services/contacts.js';

const PORT = Number(getEnvVar(ENV_VARIANT.PORT, 3000));
const STATUS_OK = HTTP_STATUS.OK;
const STATUS_NOT_FOUND = HTTP_STATUS.NOT_FOUND;

export const setupServer = () => {
  const app = express();

  app.use(express.json());

  app.use(cors(corsConfig));

  app.use(pino(pinoConfig));

  app.get('/contacts', async (req, res) => {
    const data = await getAllContacts();

    res.status(STATUS_OK).json({
      status: STATUS_OK,
      message: 'Successfully found contacts!',
      data: data,
    });
  });

  app.get('/contacts/:contactId', async (req, res, next) => {
    const { contactId } = req.params;
    const contact = await getContactById(contactId);
    console.log('contact: ', contact);
    if (!contact) {
      res
        .status(STATUS_NOT_FOUND)
        .json({ status: STATUS_NOT_FOUND, message: 'Contact not found' });
      return;
    }
    res.status(STATUS_OK).json({
      status: STATUS_OK,
      message: `Successfully found contact with id ${contactId}!`,
      data: contact,
    });
  });

  app.use((req, res, next) => {
    const url = req.url;
    res.status(STATUS_NOT_FOUND).json({
      status: STATUS_NOT_FOUND,
      message: `Route ${url} Not found`,
    });
  });

  app.listen(PORT, () => {
    console.log(`Server is running on PORT: ${PORT}`);
  });
};
