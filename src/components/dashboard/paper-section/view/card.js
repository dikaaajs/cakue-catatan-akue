import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PaperCard = () => {
  let papers = useSelector((state) => state.papers.papers.papers);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // block array per 6 data
  let arrayPapers = []
  papers.map(i => {
    let fivePapers = []
    console.log(i)
  })


  // handle event
  const handleClick = (e) => {
    const idPaper = e.getAttribute("key-data");
    navigate(`paper/${idPaper}`);
  };

  const moreOption = (e) => {
    e.currentTarget.nextSibling.classList.toggle("hidden")
  }

  let cards;
  if (papers) {
    let newPaper = papers.slice().reverse()
    cards = newPaper.map((paper) => {
      return (
        <div key={paper.id} className="relative" >
          {/* card section */}
          <div
            className="card-note cursor-pointer z-10"
            key-data={paper.id}
            key={paper.id}
            onClick={(e) => handleClick(e.currentTarget)}
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

          {/* button section */}
          <button
            className="absolute right-2 top-2 z-10"
            onClick={(e) => moreOption(e)}

          >
            <span className="material-symbols-outlined">more_vert</span>
          </button>

          {/* popup more option */}
          <div className="absolute bg-white md:w-[10%] w-[20%] text-center z-20 top-2 right-10 py-[10px] rounded-[5px] text-[.7rem] shadow-md hidden">
            <ul className="flex flex-col gap-1">
              <li><Link>view</Link></li>
              <li><Link>edit</Link></li>
              <li className="text-red-500"><Link>delete</Link></li>
            </ul>
          </div>
        </div>
      );
    });
  } else {
    cards = <h1>kamu belum membuat paper</h1>;
  }

  return <>{cards}</>;
};

export default PaperCard;
