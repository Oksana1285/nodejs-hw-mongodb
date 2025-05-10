import { json, Router } from 'express';
import {
  getContactController,
  getContactByIdController,
  createContactController,
  updateUserController,
  deleteContactController,
} from '../controllers/contacts.js';
import { ctrlWrapper } from '../utils/ctrlWrapper.js';

import { validateBody } from '../middlewares/validateBody.js';
import {
  createContactSchema,
  updateContactSchema,
} from '../validation/contacts.js';
import { isValidId } from '../middlewares/isValidId.js';

const contactsRouter = Router();
const jsonParser = json();

contactsRouter.get('/', ctrlWrapper(getContactController));

contactsRouter.get(
  '/:contactId',
  isValidId('contactId'),
  ctrlWrapper(getContactByIdController),
);

contactsRouter.post(
  '/',
  jsonParser,
  validateBody(createContactSchema),
  ctrlWrapper(createContactController),
);

contactsRouter.patch(
  '/:contactId',
  isValidId('contactId'),
  jsonParser,
  validateBody(updateContactSchema),
  ctrlWrapper(updateUserController),
);

contactsRouter.delete(
  '/:contactId',
  isValidId('contactId'),
  ctrlWrapper(deleteContactController),
);

export default contactsRouter;
