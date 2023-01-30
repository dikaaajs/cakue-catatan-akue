import React from "react";
import { useDispatch } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { SET_USER_NULL } from "../../../redux/slice/authSlice";

const NavAfterLogin = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(SET_USER_NULL());
  };

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

export { NavAfterLogin, NavBeforeLogin };
