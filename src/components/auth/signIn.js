import React, { useState } from "react";
import { ReactComponent as Logo } from "../../svg/logo.svg";

// firebase auth
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";

function SignIn() {
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
    signInWithEmailAndPassword(auth, state.email, state.password)
      .then((response) => {
        console.log(response.user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  return (
    <section className="w-full mt-[50px]">
      <div className="w-[95%] md:w-[30%] lg:[20%] mx-auto flex flex-col gap-[30px]">
        <div className="login-section border-[1px] border-solid border-slate-800 border-opacity-60">
          <div className="py-[30px]">
            <div className="w-full">
              <Logo className="w-[100px] p-[20px] bg-slate-800 rounded-[9px] mx-auto text-black" />
            </div>
          </div>

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
        </div>

        <div className="no-have-account w-full text-[0.8rem]">
          <p className="px-[30px] py-[10px] border-[1px] border-slate-800 border-opacity-60 text-center">
            tidak punya akun ? buat aku
            <a href="#" className="text-blue-400">
              disini
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

export default SignIn;
