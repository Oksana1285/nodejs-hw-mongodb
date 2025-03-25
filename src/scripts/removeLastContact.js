import { readContacts } from '../utils/readContacts.js';
import { writeContacts } from '../utils/writeContacts.js';

export const removeLastContact = async () => {
  try {
    let contacts = await readContacts();
    if (!contacts.length) return;
    contacts.pop();
    await writeContacts(contacts);
    console.log('Last contact removed and file updated successfully');
  } catch (error) {
    console.error('Error:', error);
  }
};

removeLastContact();
