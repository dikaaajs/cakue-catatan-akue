import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import NavbarPaper from "./navbarPaper";

const Paper = () => {
  const { id } = useParams();
  const dataPapers = useSelector((state) => state.papers.papers.papers);
  const [paper, setPaper] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect((idParams = id, papers = dataPapers) => {
    const paper = papers.find((paper) => {
      let result
      if (paper.id === idParams) {
        result = paper
      }
      return result
    });

    setPaper(paper);
    setIsLoading(false);
    // eslint-disable-next-line
  }, []);

  return (
    <div className="bg-[#edf1f5] w-full h-fit min-h-screen py-[50px]">
      <div id="container-paper" className="bg-white text-zinc-800 w-[90%] md:w-[80%] lg:w-[80%] mx-auto h-fit min-h-screen py-[50px]">
        <div className="w-[80%] mx-auto flex flex-col">

          {/* sistem logika loading */}
          {isLoading ? (
            <div>Loading...</div>
          ) : (
            <>
              {/* navbar */}
              <NavbarPaper page={paper.judul} link={`paper/${paper.id}`} />

              <h1 className="text-[2rem] font-bold">{paper.judul}</h1>
              <p className="text-[0.7rem] font-normal leading-[1.2]">
                {paper.content}
              </p>
            </>
          )}

        </div>
      </div>
    </div>
  );
};

export default Paper;
