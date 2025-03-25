import { PATH_DB, UNICODE } from '../constants/contacts.js';
import fs from 'fs/promises';

export const writeContacts = async (contacts) => {
  try {
    await fs.writeFile(PATH_DB, JSON.stringify(contacts, null, 2), UNICODE);
    console.log('Contacts added successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};
