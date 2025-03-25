import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};
export const addOneContact = async () => {
  try {
    let contacts = await readContacts();
    const newContacts = generateContacts(1);
    contacts = contacts.concat(newContacts);
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error:', error);
  }
};

addOneContact();
