import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOyGG_hs19Z3Ck8o7GIflAzlxovN11Doc",
  authDomain: "ripetomatoes-5355c.firebaseapp.com",
  projectId: "ripetomatoes-5355c",
  storageBucket: "ripetomatoes-5355c.appspot.com",
  messagingSenderId: "319483350447",
  appId: "1:319483350447:web:19ae52263da9b7e1a0f35a",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
