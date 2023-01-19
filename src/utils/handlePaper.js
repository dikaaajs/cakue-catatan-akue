import { db } from "../config/fbConfig";
import { collection, doc, getDocs, setDoc } from "firebase/firestore";
import { nanoid } from "nanoid";

const getPapers = () => {};

const addPaper = (paperData) => {
  const docRef = doc(db, "papers", nanoid());
  const dataSend = {
    ...paperData,
    createdAt: new Date().toISOString().split("T")[0],
    updateAt: new Date().toISOString().split("T")[0],
  };

  setDoc(docRef, dataSend)
    .then(() => {
      console.log("add data");
    })
    .catch(() => {
      console.log("failed add data");
    });
};

export { getPapers, addPaper };
