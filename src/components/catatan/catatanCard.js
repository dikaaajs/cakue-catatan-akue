import React from "react";

const CatatanCard = () => {
  return (
    <button className="card-note">
      <h1 className="font-[700] text-[1.5rem] capitalize text-slate-800">
        judul note
      </h1>
      <p className="opacity-80 paragraf text-[0.7rem]">
        diupdate pada 09.00{" "}
        <span className="material-symbols-outlined text-black text-[0.7rem] opacity-80 align-middle">
          schedule
        </span>
      </p>
      <p className="text-slate-800 text-[0.8rem]">
        Proident reprehenderit amet occaecat nulla consequat cillum. Commodo
        adipisicing esse est dolor consequat ad eiusmod. Pariatur non
      </p>
    </button>
  );
};

export default CatatanCard;
