import React, { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

// firebase auth
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

// custom function for DOM
import { handlePopup, popupHidden } from "./popupHandle";

// redux
import { useDispatch } from "react-redux";
import { USER_LOGIN } from "../../redux/slice/authSlice";
import { GET_PAPERS } from "../../redux/slice/papersSlice";
import { getPapers } from "../../utils/handlePaper";

function SignIn() {
  const [state, setState] = useState();
  const auth = getAuth();
  const navigate = useNavigate();

  const dispatch = useDispatch()

  //  ref DOM
  const popupDOM = useRef();
  const messageDOM = useRef();

  const handleChange = (e) => {
    const newState = { [e.target.name]: e.target.value };
    setState({
      ...state,
      ...newState,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((response) => {
        const dataUSER = {
          username: response.user.displayName ,
          email: response.user.email,
          uid: response.user.uid
        }
        const dataPaper = getPapers()
        dispatch(USER_LOGIN(dataUSER))
        dispatch(GET_PAPERS(dataPaper))

        navigate("/dashboard", { replace: true });
      })
      .catch((err) => {
        handlePopup(true, err.message, popupDOM, messageDOM);
      });
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
