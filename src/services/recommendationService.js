// This service completely hides the data store from the rest of the app.
// No other part of the app knows how the data is stored. If anyone wants
// to read or write data, they have to go through this service.

import { auth, database } from "../firebaseConfig";
import {
  collection,
  query,
  getDocs,
  addDoc,
  orderBy,
  limit,
  Timestamp,
} from "firebase/firestore";

export async function createRecommendation({ title }) {
  const data = {
    title,
    userId: auth.currentUser.uid,
    date: Timestamp.now(),
  };
  const docRef = await addDoc(collection(database, "recommendations"), data);
  return { id: docRef.id, ...data };
}
