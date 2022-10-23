import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";
import { GoogleAuthProvider } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3Ozz3eCyblGbuYkIYYQN7TZjHZN6BdW0",
  authDomain: "slack-clone-4df82.firebaseapp.com",
  projectId: "slack-clone-4df82",
  storageBucket: "slack-clone-4df82.appspot.com",
  messagingSenderId: "393335143184",
  appId: "1:393335143184:web:d597718d5e6ed84ce84395",
  measurementId: "G-WQ2HK4FEWV",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth(firebaseApp);
const provider = new GoogleAuthProvider();
const getRooms = async () => {
  const roomsCol = collection(db, "rooms");
  const roomSnapshot = await getDocs(roomsCol);
  const roomList = roomSnapshot.docs.map((doc) => ({
    id: doc.id,
    name: doc.data().name,
  }));
  return roomList;
};

export { auth, provider, getRooms };

export default db;
