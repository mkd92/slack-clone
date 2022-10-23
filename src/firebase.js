import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyA3Ozz3eCyblGbuYkIYYQN7TZjHZN6BdW0",
  authDomain: "slack-clone-4df82.firebaseapp.com",
  projectId: "slack-clone-4df82",
  storageBucket: "slack-clone-4df82.appspot.com",
  messagingSenderId: "393335143184",
  appId: "1:393335143184:web:d597718d5e6ed84ce84395",
  measurementId: "G-WQ2HK4FEWV",
};
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
export default db;
