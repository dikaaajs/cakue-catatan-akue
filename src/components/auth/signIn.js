import React, { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { handlePopup, popupHidden } from "./popupHandle";
import { useDispatch } from "react-redux";
import { SET_USER } from "../../redux/slice/authSlice";
import { SET_PAPERS } from "../../redux/slice/papersSlice";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../config/fbConfig";

function SignIn() {
  const [state, setState] = useState();
  const auth = getAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const popupDOM = useRef();
  const messageDOM = useRef();
  const location = useLocation();

  useEffect(() => {
    const warningMessage = location?.state?.message;
    if (warningMessage) {
      handlePopup(true, warningMessage, popupDOM, messageDOM);
    }
  }, []);

  const handleChange = (e) => {
    const newState = { [e.target.name]: e.target.value };
    setState({
      ...state,
      ...newState,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let dataUser = {
      email: "",
      paperID: "",
      username: "",
    };
    let papers = [];

    try {
      const response = await signInWithEmailAndPassword(
        auth,
        state.email,
        state.password
      );
      // ambil data dari firestore
      const dataRefUser = doc(db, "users", response.user.uid);
      const queryUser = await getDoc(dataRefUser);
      dataUser = queryUser.data();
      console.log(dataUser);

      const papersDataRef = doc(db, "papers", dataUser.paperID);
      const queryPapers = await getDoc(papersDataRef);
      papers = queryPapers.data();

      dispatch(SET_USER(dataUser));
      dispatch(SET_PAPERS(papers));

      navigate("/dashboard");
    } catch (err) {
      handlePopup(true, err.message, popupDOM, messageDOM);
      console.log(err.message);
    }
  };

  return (
    <section className="w-full bg-loginAndSignUp py-[100px]">
      <div className="w-[95%] md:w-[30%] lg:[20%] mx-auto flex flex-col gap-[30px] bg-white rounded-[9px]">
        <div>
          <div className="py-[30px]">
            <div className="w-full">
              <p className="text-center font-poppins font-bold text-[3rem]">
                Masuk
              </p>
            </div>
          </div>

          {/* form section */}
          <form className="form-account" onSubmit={handleSubmit}>
            <div className="container-label-account">
              <label className="text-[0.8rem]">email :</label>
              <input
                name="email"
                type="email"
                className="input-account focus:!border-blue-400"
                onChange={handleChange}
              />
            </div>
            <div className="container-label-account">
              <label className="text-[0.8rem]">password :</label>
              <input
                name="password"
                type="password"
                className="input-account"
                onChange={handleChange}
              />
            </div>
            <div className="submit-btn">
              <button type="submit">submit</button>
            </div>
          </form>

          <div className="no-have-account w-full text-[0.8rem] flex flex-col gap-[5px] text-center py-[15px]">
            <p className="">
              tidak punya akun ? buat akun{" "}
              <a href="/account/signUp" className="text-blue-400">
                disini
              </a>
            </p>
            <p className="">
              lupa password ? reset password{" "}
              <a href="/account/resetPass" className="text-blue-400">
                disini
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* pesan error */}
      <div
        className="berhasil-buat-akun absolute w-[90%] md:w-[50%] bg-green-500 text-white shadow-lg rounded-[9px] left-[50%] -translate-x-[10%] py-[30px] px-[20px] top-[50px] opacity-0 duration-300 transition"
        ref={popupDOM}
      >
        <div className="relative w-full h-full">
          <p ref={messageDOM}></p>
          <div
            className="absolute right-0 top-[-20px] cursor-pointer"
            onClick={() => {
              popupHidden(popupDOM);
            }}
          >
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
