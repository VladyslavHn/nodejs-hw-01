import { PATH_DB } from '../constants/contacts.js';
import fs from 'fs/promises';

export const getAllContacts = async () => {
    let data = await fs.readFile(PATH_DB, 'utf8');
    data = JSON.parse(data);
    return data;
};

console.log(await getAllContacts());
