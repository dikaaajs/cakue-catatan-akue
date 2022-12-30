import React, { useContext, useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { handleLogOut } from "../../../utils/handleAccount";
import { storage } from "../../../config/fbConfig";
import { ref, getDownloadURL } from "firebase/storage";

// context
import { TokenContext } from "../../../App";

const NavAfterLogin = () => {
  // const [PP, setPP] = useState("");

  // useEffect(() => {
  //   const PPRef = ref(storage, "pp/texas.jpg");
  //   getDownloadURL(PPRef)
  //     .then((url) => {
  //       setPP(url);
  //     })
  //     .catch((e) => {
  //       console.log(e.message);
  //     });
  // }, [PP]);

  return (
    <div className="h-fit w-1/4">
      <div className="flex gap-[10px] items-center justify-end">
        <Link onClick={handleLogOut} className="mr-[10px] text-[1rem]">
          <span className="material-symbols-outlined flex items-center">
            logout
          </span>
        </Link>
        <Link to="/" className="p-[10px] rounded-[50%] text-[1rem] w-1/5">
          <img src="" alt="" />
        </Link>
        <Link
          to="/dashboard/paper/create"
          className="fixed bottom-10 right-4 z-10"
        >
          <span className="py-[18px] px-[15px] shadow-lg rounded-[10px] border-[2px] border-slate-800 border-solid text-[1rem] text-black translate-y-[-0.2rem] hover:translate-y-[-0.4rem] block bg-white duration-150 z-[20]">
            paper +
          </span>
        </Link>
      </div>
    </div>
  );
};

const NavBeforeLogin = () => {
  return (
    <div className="h-fit">
      <ul className="flex justify-between content-center h-fit gap-[40px]">
        <li>
          <NavLink to="/account/login">login</NavLink>
        </li>
        <li>
          <NavLink to="/account/signup">sign up</NavLink>
        </li>
      </ul>
    </div>
  );
};

export {NavAfterLogin, NavBeforeLogin}