import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

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
const analytics = getAnalytics(app);

export const firebaseAuth = getAuth(app);
