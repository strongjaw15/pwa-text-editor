import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

export const putDb = async (content) => {
  // asyncronously await the opening of the database
  const databaseOpener = await openDB('jate', 1);

  // create a variable for the transaction
  const jateTransaction = jateDb.transaction('jate', 'readwrite');

  // create a variable for the store
  const jateStore = tx.objectStore('jate');

  // perform the update
  const request = store.put({ id: 1, value: content });

  const result = await request;
  console.log('🚀 - data saved to the database', result.value);
};

export const getDb = async () => {
  
  const databaseOpener = await openDB('jate', 1);

  const jateTransaction = jateDb.transaction('jate', 'readonly');

  const jateStore = tx.objectStore('jate');

  const request = store.get(1);
  const result = await request;
  result
    ? console.log('🚀 - data retrieved from the database', result.value)
    : console.log('🚀 - data not found in the database');
  return result?.value;
};

initdb();