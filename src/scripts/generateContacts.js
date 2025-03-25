import { createFakeContact } from '../utils/createFakeContact.js';
import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

const generateContacts = (number) => {
  return Array.from({ length: number }, createFakeContact);
};

(async (number) => {
  try {
    let contacts = await readContacts();
    const newContacts = generateContacts(number);
    contacts = contacts.concat(newContacts);
    await writeContacts(contacts);
  } catch (error) {
    console.error('Error:', error);
  }
})(5);
