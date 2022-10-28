import "firebase/compat/firestore";
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA3Ozz3eCyblGbuYkIYYQN7TZjHZN6BdW0",
  authDomain: "slack-clone-4df82.firebaseapp.com",
  projectId: "slack-clone-4df82",
  storageBucket: "slack-clone-4df82.appspot.com",
  messagingSenderId: "393335143184",
  appId: "1:393335143184:web:d597718d5e6ed84ce84395",
  measurementId: "G-WQ2HK4FEWV",
};
const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
export default db;
