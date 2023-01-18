import React, { useState, useEffect, useContext } from "react";
import { useSelector } from "react-redux";

const PaperCard = () => {
  const papers = useSelector(state => state.papers.papers)
  console.log(papers)

  // handle event
  const handleClick = (e) => {
    console.log(e.target.key);
  };

  let loop
  if(papers){
    loop = papers.map((paper) => {
      return (
        <div
          className="card-note cursor-pointer"
          key={paper.id}
          onClick={handleClick}
        >
          <h1 className="font-[700] text-[1.5rem] capitalize text-slate-800">
            {paper.judul}
          </h1>
          <p className="opacity-80 paragraf text-[0.7rem]">
            {`terakhir diupdate pada ${paper.updateAt} `}
            <span className="material-symbols-outlined text-black text-[0.7rem] opacity-80 align-middle">
              schedule
            </span>
          </p>
          <p className="text-slate-800 text-[0.8rem]">{paper.content}</p>
        </div>
      );
    });
  }else {
    loop = (
      <h1>kamu belum membuat paper</h1>
    )
  }

  return <>{loop}</>;
};

export default PaperCard;
