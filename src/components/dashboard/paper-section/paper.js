import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const Paper = () => {
  const { id } = useParams();
  const dataPapers = useSelector((state) => state.papers.papers);
  const [paper, setPaper] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const paper = dataPapers.papers.find((paper) => {
      if (paper.id === id) {
        return paper;
      }
    });

    setPaper(paper);
    setIsLoading(false);
  }, []);

  return (
    <div className="px-[15px] py-[15px]">
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className="text-zinc-800 ">
          {/* navbar */}
          <div className="flex text-[0.7rem] font-normal">
            <Link to="/dashboard" className="text-blue-400">
              dashboard
            </Link>
            <span className="px-[5px]">{">"}</span>
            <Link to={`paper/${id}`} className="text-blue-400">
              {paper.judul}
            </Link>
          </div>

          <h1 className="text-[2rem] font-bold">{paper.judul}</h1>
          <p className="text-[0.7rem] font-normal leading-[1.2]">
            {paper.content}
          </p>
        </div>
      )}
    </div>
  );
};

export default Paper;
