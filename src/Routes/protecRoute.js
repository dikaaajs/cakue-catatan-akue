import React, { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "../config/fbConfig";
import { SET_USER, SET_USER_NULL } from "../redux/slice/authSlice";
import { getData } from "../utils/handleAccount";
import { SET_PAPERS } from "../redux/slice/papersSlice";
const SET_DATA_CONTEXT = React.createContext();

// fungsi ini bertujuan untuk jika user belum memiliki akun (belum melakukan login) lalu mengakses halaman dashboard, user akan diarahkan ke menu login
export default function ProtectRoute() {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const navigate = useNavigate();

  const setData = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        // ambil data dari firestore
        getData(user.uid)
          .then((response) => {
            dispatch(SET_USER(response.dataUser));
            dispatch(SET_PAPERS(response.papers));
          })
          .catch((err) => {
            console.log(err.message);
          });
      } else {
        console.log("ada yang salah");
        dispatch(SET_USER_NULL());
        navigate("account/login", {
          state: {
            message:
              "kamu belum memiliki akun. silahkan login atau signup terlebih dahulu",
          },
        });
      }
    });
  };

  // refresh data after making changes
  const location = useLocation();
  if (location.state?.refreshData === true) {
    setData();
  }

  useEffect(() => {
    setData();
    // eslint-disable-next-line
  }, []);

  return isLoggedIn ? (
    <SET_DATA_CONTEXT.Provider value={setData}>
      <Outlet />
    </SET_DATA_CONTEXT.Provider>
  ) : (
    <h1>Loading ...</h1>
  );
}

export { SET_DATA_CONTEXT };
