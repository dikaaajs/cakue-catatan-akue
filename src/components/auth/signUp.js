import React, { useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import {handlePopup, popupHidden} from "./popupHandle"

function SignUp() {
  const [state, setState] = useState();
  const auth = getAuth();

  const handleChange = (e) => {
    const newState = { [e.target.name]: e.target.value };
    setState({
      ...state,
      ...newState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.password < 8) {
      handlePopup("password harus lebih dari 8 karakter");
    } else {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              const status = true //berhasil
              const message ="akun kamu udah beres dibuat gan. sekarang kamu tinggal verifikasi emailnya. note: mungkin aja email verifikasinya dikirim sebagai email spam"
              handlePopup(status, message);
            })
            .catch((err) => err.message);
        })
        .catch((err) => {
          const status = false //gagal
          const message = err.message
          handlePopup(status, message)
        });
    }
  };

  return (
    <section className="w-full bg-loginAndSignUp h-screen flex items-center bg-cover">
      {/* background */}
      <img src="/src/svg/SimpleShiny.svg" />

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
          <form className="form-account" onSubmit={(e) => handleSubmit(e)}>
            <div className="container-label-account">
              <label className="text-[0.8rem]">username :</label>
              <input
                name="usename"
                type="text"
                className="input-account focus:!border-blue-400"
                onChange={handleChange}
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
                className="input-account focus:!border-blue-400"
                onChange={handleChange}
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
