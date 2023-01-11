import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { TokenContext } from "../../../App";
import { NavAfterLogin, NavBeforeLogin } from "./conditionalNav";

function Navigasi() {
  const user = useContext(TokenContext);

  return (
    <nav className="bg-slate-800 flex justify-between items-center text-white px-[20px] md:px-[40px] py-[10px] ">
      <Link to="/" className="text-left w-1/4">
        <p className="font-bold font-poppins text-[1.5rem]">CK</p>
      </Link>

      {user ? <NavAfterLogin /> : <NavBeforeLogin />}
    </nav>
  );
}

export default Navigasi;
