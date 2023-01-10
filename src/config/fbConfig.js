import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDGvNIfrqJVI1UU4Kf0rBSG-eAMfpcM3Mw",
  authDomain: "cakue-project.firebaseapp.com",
  projectId: "cakue-project",
  storageBucket: "cakue-project.appspot.com",
  messagingSenderId: "297970886155",
  appId: "1:297970886155:web:160de2bdc97ed8dfc6c90e",
  measurementId: "G-88J9V916K3",
};

const app = initializeApp(firebaseConfig);

// services init
const firebaseAuth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { firebaseAuth, db, storage };
