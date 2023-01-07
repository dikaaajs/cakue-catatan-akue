import React, { useState, useRef } from "react";

// firebase auth
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function ResetPass() {
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
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((response) => {
        if (!response.user.emailVerified) {
          console.log("email telah rerverifikasi");
        }
        console.log(response.user.emailVerified);
      })
      .catch((err) => {
        handlePopup(err.message, "error");
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

export default ResetPass;
