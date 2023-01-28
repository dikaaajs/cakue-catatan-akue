import { signOut } from "firebase/auth";
import { db, firebaseAuth } from "../config/fbConfig";
import { doc, getDoc } from "firebase/firestore";

const handleLogOut = () => {
  signOut(firebaseAuth)
    .then(() => {
      console.log("berhasil keluar");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

const getData = async (uid) => {
  try {
    // dari uid akan
    const dataRefUser = doc(db, "users", uid);
    const queryUser = await getDoc(dataRefUser);
    const dataUser = queryUser.data();

    const papersDataRef = doc(db, "papers", dataUser.paperID);
    const queryPapers = await getDoc(papersDataRef);
    const papers = queryPapers.data();

    return {
      papers,
      dataUser,
    };
  } catch (error) {
    console.log(error.message);
  }
};

export { handleLogOut, getData };
