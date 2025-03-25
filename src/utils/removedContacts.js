import { PATH_DB, UNICODE } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removedContacts = async () => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify([], null, 2), UNICODE);
    console.log('Contacts remove successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};
