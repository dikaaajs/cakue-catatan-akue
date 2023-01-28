import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavAfterLogin, NavBeforeLogin } from "./conditionalNav";
import { useSelector } from "react-redux";

function Navigasi() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (isLoggedIn !== undefined) {
      setIsLoading(false);
    }
  }, [isLoggedIn]);

  return (
    <nav className="bg-slate-800 flex justify-between items-center text-white px-[20px] md:px-[40px] py-[10px] ">
      {/* logo */}
      <Link to="/" className="text-left w-1/4">
        <p className="font-bold font-poppins text-[1.5rem]">CK</p>
      </Link>

      {/* condition nav */}
      {isLoading ? (
        <div></div>
      ) : isLoggedIn ? (
        <NavAfterLogin />
      ) : (
        <NavBeforeLogin />
      )}
    </nav>
  );
}

export default Navigasi;
