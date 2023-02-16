import { arrayRemove, doc, updateDoc } from "firebase/firestore";
import React, { useContext, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { db } from "../../../../config/fbConfig";
import { SET_DATA_CONTEXT } from "../../../../Routes/protecRoute";

const PaperCard = () => {
  const set_data = useContext(SET_DATA_CONTEXT);
  const papers = useSelector((state) => state.papers.papers.papers);
  const idPapers = useSelector((state) => state.auth.paperID);
  const filter = useSelector((state) => state.filter)
  const navigate = useNavigate();
  const [page, setPage] = useState(0);

  let formatPaper = [];
  formatPaper.push(...papers);

  // filter paper
  if (filter.filterBy === "time") {
    if (filter.status === "asc") {
      formatPaper.reverse();
      console.log(formatPaper)
    }
  }

  if (filter.filterBy === "alfa") {
    if (filter.status === "asc") {
      formatPaper.sort((a, b) => {
        console.log('iulang')
        return (a.judul > b.judul) ? 1 : -1
      })
    }
  }

  const MAX_CARD_IN_ONE_SECTION = 6;
  const DATA_PAPER = [];
  for (let i = 0; i < papers.length; i += MAX_CARD_IN_ONE_SECTION) {
    DATA_PAPER.push(formatPaper.slice(i, i + MAX_CARD_IN_ONE_SECTION));
  }

  // handle event
  const handleClick = (e) => {
    const idPaper = e.getAttribute("key-data");
    navigate(`paper/${idPaper}`);
  };

  const moreOption = (e) => {
    e.currentTarget.nextSibling.classList.toggle("hidden");
  };

  const handleDelete = async (paper) => {
    const docRef = doc(db, "papers", idPapers);
    updateDoc(docRef, {
      papers: arrayRemove(paper),
    })
      .then(() => {
        // pengen manggil setData() disini
        set_data();
      })
  };

  const handleNext = () => {
    setPage(page + 1);
  };

  const handlePrev = () => {
    setPage(page - 1);
  };

  const handleButtonNav = (page) => {
    setPage(page);
  };

  // ui card
  let cardsComponent = [];
  if (DATA_PAPER) {
    let newPaper = DATA_PAPER[page];
    cardsComponent = newPaper.map((paper) => {
      const MORE = " ... ";
      const MAX_CHARA_IN_HEADLINE = 30;
      const MAX_CHARA_IN_P = 100;
      let judul = paper.judul.slice(0, MAX_CHARA_IN_HEADLINE);
      let paragraph = paper.content.slice(0, MAX_CHARA_IN_P);
      if (paper.judul.length >= MAX_CHARA_IN_HEADLINE) {
        judul += MORE
      }
      if (paper.content.length >= MAX_CHARA_IN_P) {
        paragraph += MORE
      }

      return (
        <div key={paper.id} className="relative">
          {/* card section */}
          <div
            className="card-note cursor-pointer z-10 flex flex-col gap-2"
            key-data={paper.id}
            key={paper.id}
            onClick={(e) => handleClick(e.currentTarget)}
          >
            {/* judul */}
            <h1 className="font-[700] text-[1.5rem] capitalize text-slate-800 leading-[27px]">
              {judul}
            </h1>

            {/* time */}
            <p className="opacity-80 paragraf text-[0.7rem]">
              {`terakhir diupdate pada ${paper.updateAt} `}
              <span className="material-symbols-outlined text-black text-[0.7rem] opacity-80 align-middle">
                schedule
              </span>
            </p>

            {/* content */}
            <p className="text-slate-800 text-[0.8rem]">{paragraph}</p>
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
                <button onClick={() => handleDelete(paper)}>delete</button>
              </li>
            </ul>
          </div>
        </div>
      );
    });
  } else {
    cardsComponent = <h1>kamu belum membuat paper</h1>;
  }

  // ui button nav in footer
  let buttonTotal = [];
  for (let i = 0; i <= DATA_PAPER.length - 1; i++) {
    buttonTotal.push(i);
  }
  let buttonNav = buttonTotal
    .filter((i) => i === page || i === page - 1 || i === page + 1)
    .map((i) => {
      let isActive = false;
      if (i === page) {
        isActive = true;
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
    });

  return (
    <div>
      <div className="flex flex-col gap-[20px]">{cardsComponent}</div>
      <div className="my-[40px]">

        {/* navbar footer section */}
        <div className="flex gap-2 justify-center">
          {page !== 0 && (
            <div
              className="w-10 h-10 bg-white rounded-full flex justify-center items-center"
              onClick={handlePrev}
            >
              <p className="align-middle h-fit">{"<"}</p>
            </div>
          )}
          {buttonNav}
          {page < DATA_PAPER.length - 1 && (
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
