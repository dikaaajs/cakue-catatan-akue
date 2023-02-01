import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const PaperCard = () => {
  let papers = useSelector((state) => state.papers.papers.papers);
  const navigate = useNavigate();

  // handle event
  const handleClick = (e) => {
    console.log(e)
    const idPaper = e.getAttribute("key-data");
    console.log(e)
    navigate(`paper/${idPaper}`);
  };

  const moreOption = (e) => {
    const idPaper = e.getAttribute("key-data");
    console.log(e)
  }

  let cards;
  if (papers) {
    let newPaper = papers.slice().reverse()
    cards = newPaper.map((paper) => {
      return (
        <div
          className="card-note cursor-pointer z-10"
          key-data={paper.id}
          key={paper.id}
          onClick={handleClick}
        >
          <button
            onClick={(e) => moreOption(e.currentTarget)}

          >
            <span className="material-symbols-outlined">more_vert</span>
          </button>
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
  } else {
    cards = <h1>kamu belum membuat paper</h1>;
  }

  return <>{cards}</>;
};

export default PaperCard;
