import React, { useEffect, useRef, useState } from "react";

// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

// custom function for dom
import { handlePopup, popupHidden } from "./popupHandle";
import { warning } from "@remix-run/router";

// main content
function SignUp() {
  const [state, setState] = useState();
  const [warningInput, setWarningInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  const username = useRef();
  const password = useRef();

  const handleChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "displayName") {
      const regex = new RegExp(/^[^\W_]{5,15}$/);
      const checkUsername = regex.test(value);

      !checkUsername
        ? setWarningInput({
            ...warningInput,
            username:
              "username tidak boleh lebih dari 15 character dan tidak boleh memakai simbol",
          })
        : setWarningInput({ ...warningInput, username: "" });
    }

    if (name === "password") {
      const regexExp = new RegExp(/^(?=.*[a-z])(?=.*\d)[A-Za-z\d]{8,}$/);
      const checkPassword = regexExp.test(value);
      !checkPassword
        ? setWarningInput({
            ...warningInput,
            password:
              "password minimal mempunyai 8 karakter dan memiliki 1 nomor",
          })
        : setWarningInput({ ...warningInput, password: "" });
    }
  };

  const handleChange = (e) => {
    const newState = { [e.target.name]: e.target.value };
    setState({
      ...state,
      ...newState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // auth user and store data to firestore
    if (!state) {
      handlePopup("password harus lebih dari 8 karakter");
    } else {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then(() => {
          auth.currentUser.displayName = state.displayName;
          sendEmailVerification(auth.currentUser)
            .then(() => {
              const status = true; //berhasil
              const message =
                "akun kamu udah beres dibuat gan. sekarang kamu tinggal verifikasi emailnya. note: mungkin aja email verifikasinya dikirim sebagai email spam";
              handlePopup(status, message);
            })
            .catch((err) => err.message);
        })
        .catch((err) => {
          const status = false; //gagal
          const message = err.message;
          handlePopup(status, message);
        });
    }
  };

  return (
    <section className="w-full bg-loginAndSignUp h-screen flex items-center bg-cover">
      {/* background */}

      <div className="w-[80%] md:w-[30%] lg:[20%] mx-auto flex flex-col gap-[30px] bg-white rounded-[9px] h-fit">
        <div>
          <div className="py-[30px]">
            <div className="w-full">
              <p className="text-center font-poppins font-bold text-[3rem]">
                Daftar
              </p>
            </div>
          </div>

          {/* form section */}
          <form
            className="form-account"
            onSubmit={(e) => handleSubmit(e)}
            onChange={handleChangeForm}
          >
            <div className="container-label-account">
              <label className="text-[0.8rem]">username :</label>
              <input
                name="displayName"
                type="text"
                className="input-account"
                onChange={handleChange}
                ref={username}
                required
              />
            </div>
            <div className="container-label-account">
              <label className="text-[0.8rem]">email :</label>
              <input
                name="email"
                type="email"
                className="input-account focus:!border-blue-400"
                onChange={handleChange}
                required
              />
            </div>
            <div className="container-label-account">
              <label className="text-[0.8rem]">password :</label>
              <input
                name="password"
                type="password"
                className="input-account"
                onChange={handleChange}
                ref={password}
                required
              />
            </div>
            <div className="submit-btn">
              <button type="submit">submit</button>
            </div>
          </form>

          <div className="no-have-account w-full text-[0.8rem] flex flex-col gap-[5px] text-center py-[15px]">
            <p className="">
              sudah punya akun ? login{" "}
              <a href="/account/login" className="text-blue-400">
                disini
              </a>
            </p>
          </div>
        </div>
      </div>

      {/* pop up */}
      <div
        className="berhasil-buat-akun absolute w-[90%] md:w-[50%] bg-green-500 text-white shadow-lg rounded-[9px] left-[50%] -translate-x-[10%] py-[30px] px-[20px] top-[50px] opacity-0 duration-300 transition"
        id="popupAuth"
      >
        <div className="relative w-full h-full">
          <p id="message"></p>
          <div
            className="absolute right-0 top-[-20px] cursor-pointer"
            onClick={popupHidden}
          >
            <span className="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
