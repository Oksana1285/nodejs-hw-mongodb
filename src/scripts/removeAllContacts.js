import { removedContacts } from '../utils/removedContacts.js';

export const removeAllContacts = async () => {
  try {
    await removedContacts();
  } catch (error) {
    console.error('Error:', error);
  }
};

removeAllContacts();
