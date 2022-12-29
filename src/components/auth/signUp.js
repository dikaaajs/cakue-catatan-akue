import React, { useState, useRef } from "react";

// firebase auth
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";

function SignUp() {
  const [state, setState] = useState();
  const [message, setMessage] = useState(null);
  const auth = getAuth();
  const popup = useRef();

  const hiddenPopup = () => {
    popup.current.classList.remove("-translate-x-[50%]");
    popup.current.classList.remove("opacity-100");
    popup.current.classList.add("opacity-0");
    popup.current.classList.add("-translate-x-[10%]");
  };

  const handlePopup = (message, status) => {
    setMessage(message);
    popup.current.classList.remove("opacity-0");
    popup.current.classList.remove("-translate-x-[10%]");
    popup.current.classList.add("-translate-x-[50%]");
    popup.current.classList.add("opacity-100");
    if (status) {
      popup.current.classList.remove("bg-green-500");
      popup.current.classList.add("bg-red-500");
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
    if (state.password < 8) {
      handlePopup("password harus lebih dari 8 karakter");
    } else {
      createUserWithEmailAndPassword(auth, state.email, state.password)
        .then(() => {
          sendEmailVerification(auth.currentUser)
            .then(() => {
              console.log("send verification");
              handlePopup(
                "akun kamu udah beres dibuat gan. sekarang kamu tinggal verifikasi emailnya. note: mungkin aja email verifikasinya dikirim sebagai email spam"
              );
            })
            .catch((err) => err.message);
        })
        .catch((err) => {
          handlePopup(err.message, { bg: "red" });
        });
    }
  };

  return (
    <section className="w-full bg-loginAndSignUp h-screen flex items-center">
      <div className="w-[80%] md:w-[30%] lg:[20%] mx-auto flex flex-col gap-[30px] bg-white rounded-[9px] h-fit">
        <div>
          <div className="py-[30px]">
            <div className="w-full">
              <p className="text-center font-poppins font-bold text-[3rem]">
                Masuk
              </p>
            </div>
          </div>

          {/* form section */}
          <form className="form-account" onSubmit={(e) => handleSubmit(e)}>
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
        ref={popup}
      >
        <div className="relative w-full h-full">
          <p>{message}</p>
          <div
            className="absolute right-0 top-[-20px] cursor-pointer"
            onClick={hiddenPopup}
          >
            <span class="material-symbols-outlined">close</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default SignUp;
