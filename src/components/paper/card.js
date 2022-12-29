import React, { useState, useEffect } from "react";
import { getPapers } from "../../utils/handlePaper";

const PaperCard = () => {
  const [papers, setPapers] = useState([]);

  useEffect(() => {
    getPapers()
      .then((response) => {
        setPapers(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [papers]);

  // handle event
  const handleClick = (e) => {
    console.log(e.target.key);
  };

  const loop = papers.map((paper) => {
    return (
      <div
        className="card-note cursor-pointer"
        key={paper.id}
        onClick={handleClick}
      >
        <h1 className="font-[700] text-[1.5rem] capitalize text-slate-800">
          {paper.header}
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

  return <>{loop}</>;
};

export default PaperCard;
