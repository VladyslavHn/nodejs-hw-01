import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const removeAllContacts = async () => {
    const data = await fs.readFile(PATH_DB, 'utf8');
    const contacts = JSON.parse(data);
    contacts = [];
    await fs.writeFile(PATH_DB, JSON.stringify(contacts));
};

await removeAllContacts();
