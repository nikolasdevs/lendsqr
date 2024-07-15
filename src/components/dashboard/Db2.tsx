// import { openDB } from "idb";

// const DB_NAME = "guarantorDB";
// const STORE_NAME = "guarantors";

// export const initDB = async () => {
//   const db = await openDB(DB_NAME, 1, {
//     upgrade(db) {
//       db.createObjectStore(STORE_NAME, {
//         keyPath: "id",
//         autoIncrement: true,
//       });
//     },
//   });
//   return db;
// };

// export const addGuarantor = async (guarantor: any) => {
//   const db = await initDB();
//   await db.add(STORE_NAME, guarantor);
// };

// export const addGuarantors = async (guarantors: any[]) => {
//   const db = await initDB();
//   const tx = db.transaction(STORE_NAME, "readwrite");
//   guarantors.forEach((guarantor) => tx.store.add(guarantor));
//   await tx.done;
// };

// export const getGuarantors = async () => {
//   const db = await initDB();
//   return await db.getAll(STORE_NAME);
// };

// export const clearGuarantors = async () => {
//   const db = await initDB();
//   await db.clear(STORE_NAME);
// };

import React from 'react'

const Db2 = () => {
  return (
    <div>Db2</div>
  )
}

export default Db2