import App from "../App";
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

export async function createRecommendation({ movieName }) {
  const data = {
    movieName,
    userId: auth.currentUser.uid,
    date: Timestamp.now(),
  };
  const docRef = await addDoc(collection(database, "recommendations"), data);
  return { id: docRef.id, ...data };
}
