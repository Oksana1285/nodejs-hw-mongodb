import { PATH_DB, UNICODE } from '../constants/contacts.js';
import fs from 'fs/promises';

export const readContacts = async () => {
  try {
    const data = await fs.readFile(PATH_DB, UNICODE);
    return data.length > 0 ? JSON.parse(data) : [];
  } catch (error) {
    console.error('Error:', error);
    return [];
  }
};
