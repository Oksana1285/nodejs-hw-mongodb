import { readContacts } from '../utils/readContacts.js';

export const getAllContacts = async () => {
  try {
    return await readContacts();
  } catch (error) {
    console.error('Error:', error);
  }
};

console.log(await getAllContacts());
