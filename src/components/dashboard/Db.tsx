import { openDB } from "idb";

const DATABASE_NAME = "UserDatabase";
const DATABASE_VERSION = 1;
const STORE_NAME = "users";

export const initDB = async () => {
  return openDB(DATABASE_NAME, DATABASE_VERSION, {
    upgrade(db) {
      if (!db.objectStoreNames.contains(STORE_NAME)) {
        db.createObjectStore(STORE_NAME, {
          keyPath: "id",
          autoIncrement: true,
        });
      }
    },
  });
};

export const addUserToDB = async (user: any) => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  tx.store.put(user);
  await tx.done;
};

export const getUsersFromDB = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readonly");
  const users = await tx.store.getAll();
  await tx.done;
  return users;
};

export const clearUsersFromDB = async () => {
  const db = await initDB();
  const tx = db.transaction(STORE_NAME, "readwrite");
  await tx.store.clear();
  await tx.done;
};
