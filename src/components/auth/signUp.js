import React, { useEffect, useRef, useState } from "react";

// firebase
import {
  getAuth,
  createUserWithEmailAndPassword,
  sendEmailVerification,
} from "firebase/auth";
import { firebaseAuth } from "../../config/fbConfig";

// custom function for dom
import { handlePopup, popupHidden } from "./popupHandle";

// main content
function SignUp() {
  const [state, setState] = useState();
  const [warningInput, setWarningInput] = useState({
    username: "",
    email: "",
    password: "",
  });
  const auth = getAuth();
  const usernameDOM = useRef();
  const passwordDOM = useRef();
  const submitButton = useRef();

  console.log(auth);

  // fungsi untuk menghandle warning pada input
  useEffect(() => {
    const usernameWarning = warningInput.username.length;
    const passwordWarning = warningInput.password.length;

    if (usernameWarning !== 0) {
      // kondisi username ada warning
      usernameWarningDOM(warningInput.username, true);
    }

    if (usernameWarning === 0) {
      // kondisi username tidak ada warning
      usernameWarningDOM(warningInput.username, false);
    }

    if (passwordWarning !== 0) {
      // kondisi password ada warning
      passwordWarningDOM(warningInput.password, true);
    }

    if (passwordWarning === 0) {
      // kondisi password tidak ada warning
      passwordWarningDOM(warningInput.password, false);
    }

    if (passwordWarning !== 0 || usernameWarning !== 0) {
      submitButton.current.classList.add("cursor-not-allowed");
      submitButton.current.parentElement.classList.add("opacity-60");
    } else {
      submitButton.current.classList.remove("cursor-not-allowed");
      submitButton.current.parentElement.classList.remove("opacity-60");
    }
  }, [warningInput]);

  // handle jika ada warning di username
  function usernameWarningDOM(message, isWarning) {
    if (isWarning) {
      // create element
      const warningTextUsername = document.createElement("p");
      warningTextUsername.innerText = message;
      warningTextUsername.classList.add("warning-text");

      if (usernameDOM.current.nextSibling == null) {
        usernameDOM.current.parentElement.appendChild(warningTextUsername);
      } else {
        usernameDOM.current.nextSibling.classList.remove("hidden");
      }
    } else {
      if (usernameDOM.current.nextSibling !== null) {
        usernameDOM.current.nextSibling.classList.add("hidden");
      }
    }
  }

  // handle jika ada warning di password
  function passwordWarningDOM(message, isWarning) {
    // jika ada error
    if (isWarning) {
      const passwordTextWarning = document.createElement("p");
      passwordTextWarning.innerText = message;
      passwordTextWarning.classList.add("warning-text");

      if (passwordDOM.current.nextSibling == null) {
        passwordDOM.current.parentElement.appendChild(passwordTextWarning);
      } else {
        passwordDOM.current.nextSibling.classList.remove("hidden");
      }

      // jika gada error
    } else {
      if (passwordDOM.current.nextSibling !== null) {
        passwordDOM.current.nextSibling.classList.add("hidden");
      }
    }
  }

  // setiap ada perubahan di input section akan mentriger setWarningInput. untuk mengecek apakah user memasukan pola yang seharusnya pada input
  const handleChangeForm = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    // check on input username
    if (name === "displayName") {
      const regex = new RegExp(/^[^\W_]{5,15}$/);
      const checkUsername = regex.test(value);

      if (!checkUsername) {
        setWarningInput({
          ...warningInput,
          username:
            "username tidak boleh lebih dari 15 character dan tidak boleh memakai simbol",
        });
      } else if (checkUsername) {
        setWarningInput({ ...warningInput, username: "" });
      }
    }

    // check on input password
    if (name === "password") {
      const regexExp = new RegExp(/^[^\W_]{5,15}$/);
      const checkPassword = regexExp.test(value);

      if (!checkPassword) {
        setWarningInput({
          ...warningInput,
          password:
            "password minimal mempunyai 8 karakter dan memiliki 1 nomor",
        });
      } else if (checkPassword) {
        setWarningInput({ ...warningInput, password: "" });
      }
    }

    const newState = { name: value };
    setState({
      ...state,
      ...newState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // auth user and store data to firestore
    // if (
    //   warningInput.username.length !== 0 ||
    //   warningInput.password.length !== 0
    // ) {
    //   handlePopup(true, "cek dulu inputnya gan. barangkali ada yang salah");
    // } else {

    // }

    createUserWithEmailAndPassword(auth, state.email, state.password)
      .then(() => {
        console.log("akun berhasil dibuat");
      })
      .catch((err) => {
        console.log(err.message);
      });
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
                ref={usernameDOM}
                required
              />
            </div>
            <div className="container-label-account">
              <label className="text-[0.8rem]">email :</label>
              <input
                name="email"
                type="email"
                className="input-account focus:!border-blue-400"
                required
              />
            </div>
            <div className="container-label-account">
              <label className="text-[0.8rem]">password :</label>
              <input
                name="password"
                type="password"
                className="input-account"
                ref={passwordDOM}
                required
              />
            </div>
            <div className="submit-btn">
              <button type="submit" ref={submitButton}>
                submit
              </button>
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
