import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const PaperCard = () => {
  const papers = useSelector((state) => state.papers.papers.papers);
  const navigate = useNavigate();
  const [index, setIndex] = useState(0);

  // block array per 6 data
  let formatPaper = []
  formatPaper.push(...papers)
  formatPaper.reverse()

  console.log(formatPaper)
  console.log(papers)


  const chunkSize = 6;
  const chunks = [];
  for (let i = 0; i < papers.length; i += chunkSize) {
    chunks.push(formatPaper.slice(i, i + chunkSize));
  }




  // handle event
  const handleClick = (e) => {
    const idPaper = e.getAttribute("key-data");
    navigate(`paper/${idPaper}`);
  };

  const moreOption = (e) => {
    e.currentTarget.nextSibling.classList.toggle("hidden");
  };

  const handleNext = () => {
    setIndex(index + 1);
  };

  const handlePrev = () => {
    setIndex(index - 1);
  };

  const handleButtonNav = (index) => {
    setIndex(index);
  };

  // loop for card
  let cards;
  if (papers) {
    let newPaper = chunks[index];
    cards = newPaper.map((paper) => {
      return (
        <div key={paper.id} className="relative">
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
              <li>
                <Link>view</Link>
              </li>
              <li>
                <Link>edit</Link>
              </li>
              <li className="text-red-500">
                <Link>delete</Link>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  } else {
    cards = <h1>kamu belum membuat paper</h1>;
  }

  // loop for button
  let buttonTotal = [];
  for (let i = 0; i <= chunks.length - 1; i++) {
    buttonTotal.push(i);
  }

  let buttonNav = buttonTotal.map((i) => {
    let isActive;

    if (i === index || i === index - 1 || i === index + 1) {
      isActive = false;
      if (i === index) {
        isActive = true;
      }
    } else {
      return
    }

    const status = isActive ? "active-filter-button" : "isNotActive";
    return (
      <div
        className={`w-10 h-10 bg-white rounded-full flex justify-center items-center ${status}`}
        onClick={() => handleButtonNav(i)}
        key={i}
      >
        <p className="align-middle h-fit">{i + 1}</p>
      </div>
    );

    // // eslint-disable-next-line
  });

  return (
    <div>
      <div className="flex flex-col gap-[20px]">{cards}</div>
      <div className="my-[40px]">
        <div className="flex gap-2 justify-center">
          {/* prev button */}
          {index !== 0 && (
            <div
              className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
              onClick={handlePrev}
            >
              <p className="align-middle h-fit">{"<"}</p>
            </div>
          )}

          {buttonNav}

          {/* next button */}
          {index < chunks.length - 1 && (
            <div
              className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
              onClick={handleNext}
            >
              <p className="align-middle h-fit">{">"}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PaperCard;
