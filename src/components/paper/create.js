import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { addPaper } from "../../utils/handlePaper";

const CreatePaper = () => {
  const [state, setState] = useState({});
  const navigate = useNavigate();

  // event handler
  const handleChange = (e) => {
    const newState = { [e.target.name]: e.target.value };
    setState({
      ...state,
      ...newState,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addPaper(state);
    navigate("/dashboard", { state: { m: "berhasil menambahkan data" } });
  };

  return (
    <div className="bg-[#edf1f5] w-full h-screen pt-[50px]">
      <div className="w-[90%] md:w-[80%] lg:w-[80%] bg-white mx-auto h-full py-[100px]">
        <form
          onSubmit={handleSubmit}
          className="w-[80%] mx-auto flex flex-col gap-[5px]"
        >
          {/* judul */}
          <div>
            <input
              type="text"
              placeholder="judul..."
              name="header"
              className="text-[2.5rem] input-note"
              onChange={handleChange}
            />
          </div>

          {/* text area */}
          <div>
            <textarea
              name="content"
              className="w-full h-auto content input-note text-[.8rem]"
              onChange={handleChange}
            ></textarea>
          </div>
          <button className="bg-green-400 btn">done</button>
        </form>
      </div>
    </div>
  );
};

export default CreatePaper;
