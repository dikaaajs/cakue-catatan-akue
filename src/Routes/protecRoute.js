import React, { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../config/fbConfig";
import { USER_LOGIN } from "../redux/slice/authSlice";
import { GET_PAPERS } from "../redux/slice/papersSlice";
import { getPapers } from "../utils/handlePaper";

// fungsi ini bertujuan untuk jika user belum memiliki akun (belum melakukan login) lalu mengakses halaman dashboard, user akan diarahkan ke menu login
export default function ProtectRoute() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        dispatch(
          USER_LOGIN({
            email: user.email,
            username: user.displayName,
            uid: user.uid,
            isLoggedIn: true,
          })
        );
      } else {
        dispatch(
          USER_LOGIN({
            email: null,
            username: null,
            uid: null,
            isLoggedIn: false,
          })
        );
      }
    });
  }, []);
  console.log(isLoggedIn);

  return isLoggedIn ? <Outlet /> : <h1>Loading ...</h1>;
}
