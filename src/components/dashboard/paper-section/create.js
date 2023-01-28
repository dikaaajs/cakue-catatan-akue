import { doc, setDoc } from "firebase/firestore";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { db } from "../../../config/fbConfig";
import { addPaper } from "../../../utils/handlePaper";

const CreatePaper = () => {
  const idPapers = useSelector((state) => state.auth.paperID);
  const [state, setState] = useState({});
  const navigate = useNavigate();

  console.log(idPapers);

  // event handler
  const handleChange = (e) => {
    const newState = { [e.target.name]: e.target.value };
    setState({
      ...state,
      ...newState,
    });

    const textarea = e.target;
    textarea.style.height = "auto";
    textarea.style.height = textarea.scrollHeight + "px";
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const createdAt = new Date();
    const updateAt = new Date();

    const papersDataRef = doc(db, "papers", idPapers);
    setDoc(papersDataRef, state);
    navigate("/dashboard", { state: { message: "berhasil menambahkan data" } });
  };

  return (
    <div className="bg-[#edf1f5] w-full h-screen pt-[50px]">
      <div className="w-[90%] md:w-[80%] lg:w-[80%] bg-white mx-auto h-full py-[100px]">
        <form onSubmit={handleSubmit} className="w-[80%] mx-auto flex flex-col">
          {/* judul */}
          <div>
            <textarea
              type="text"
              placeholder="judul..."
              name="judul"
              className="text-[2rem] input-note font-bold w-full h-[3rem]"
              onChange={handleChange}
            ></textarea>
          </div>

          {/* text area */}
          <div>
            <textarea
              name="content"
              className="w-full h-auto content input-note text-[.8rem]"
              onChange={handleChange}
              placeholder="content..."
            ></textarea>
          </div>
          <button className="border-[2px] w-1/4 border-black border-solid rounded-[5px] bg-black text-white">
            done
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreatePaper;
