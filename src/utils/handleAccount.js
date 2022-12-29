import { signOut } from "firebase/auth";
import { firebaseAuth } from "../config/fbConfig";

const handleLogOut = () => {
  signOut(firebaseAuth)
    .then(() => {
      console.log("berhasil keluar");
    })
    .catch((err) => {
      console.log(err.message);
    });
};

export { handleLogOut };
