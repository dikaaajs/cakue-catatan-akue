import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export class NavAfterLogin extends Component {
  render() {
    return (
      <div className="container-NavAfterLogin h-fit">
        <div>
          <NavLink to="/" className="mr-[10px] text-[1rem]">
            log out
          </NavLink>
          <NavLink
            to="/"
            className="p-[10px] rounded-[50%] bg-red-500 text-[1rem]"
          >
            DJ
          </NavLink>
          <NavLink to="/" className="fixed bottom-10 right-4 z-10">
            <button className="bg-black rounded-[15px]">
              <span className="py-[18px] px-[15px] shadow-lg rounded-[15px] border-[2px] border-slate-800 border-solid text-[1rem] text-black translate-y-[-0.2rem] hover:translate-y-[-0.4rem] block bg-white duration-150 z-[20]">
                buat +
              </span>
            </button>
          </NavLink>
        </div>

        {/* <ul className="flex justify-between md:justify-end md:gap-[50px] items-center h-fit text-[14px]">
          <li>
            <NavLink to="/">catatan baru</NavLink>
          </li>
          <li>
            <NavLink to="/">log out</NavLink>
          </li>
          <li className="p-[10px] rounded-[50%] bg-red-500">
            <NavLink to="/">DJ</NavLink>
          </li>
        </ul> */}
      </div>
    );
  }
}

export class NavBeforeLogin extends Component {
  render() {
    return (
      <div className="container-NavAfterLogin h-fit">
        <ul className="flex justify-between content-center h-fit">
          <li>
            <NavLink to="/">login</NavLink>
          </li>
          <li>
            <NavLink to="/">sign up</NavLink>
          </li>
        </ul>
      </div>
    );
  }
}
