import React, { Component, useState } from "react";
import { Link } from "react-router-dom";
import { ConditionalNav } from "./conditionalNav";

function Navigasi() {
  return (
    <nav className="bg-slate-800 flex justify-between items-center text-white px-[20px] md:px-[40px] py-[10px] ">
      <Link to="/" className="text-left w-1/4">
        <p className="font-bold font-poppins text-[1.5rem]">CK</p>
      </Link>

      {/* pengkondisian */}
      <ConditionalNav className="w-1/4" />
    </nav>
  );
}

export default Navigasi;
