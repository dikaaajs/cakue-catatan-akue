import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { ReactComponent as LogoFilter } from "../../../../svg/filter.svg";
import { SET_FILTERBY, SET_STATUS } from "../../../../redux/slice/filterSlice";

const SearchSection = () => {
  const dispatch = useDispatch()
  const filter = useSelector((state) => state.filter)
  console.log(filter)
  return (
    <section className="container-filter">
      <div className="search-section">
        <input
          type="text"
          placeholder="cari berdasarkan judul..."
          className="w-full placeholder:text-[0.6rem] rounded-[5px] placeholder:pl-[20px]"
        />
      </div>

      {/* ascending and create paper section */}
      <div className="ascending-section">
        <div className="create-paper w-1/2">
          <Link
            className="button-create-paper text-[0.6rem] py-[5px] px-[8px] rounded-[3px] bg-white"
            to="paper/create"
          >
            buat +
          </Link>
        </div>

        <div className="filter-1 w-1/3">
          <div>
            <ul className="flex text-[0.6rem] gap-[0.5rem] py-[5px] px-[8px] bg-white w-fit">
              <li>
                <button onClick={() => dispatch(SET_STATUS("asc"))} className={filter.status === "asc" ? "active-filter-button" : ""}>ascending</button>
              </li>
              <li>
                <button onClick={() => dispatch(SET_STATUS("des"))} className={filter.status === "des" ? "active-filter-button" : ""}>descending</button>
              </li>
            </ul>
          </div>
        </div>

        <div className="filter-2">
          <button className="h-full">
            <LogoFilter className="h-full opacity-70 text-slate-400 hover:text-blue-500" />
          </button>
        </div>
        {/* popup filter-section */}
        <div className="absolute bg-white md:w-[10%] w-[20%] text-center z-20 top-20 right-10 py-[10px] rounded-[5px] text-[.6rem] shadow-md ">
          <ul className="flex flex-col gap-1">
            <p className="text-[.5rem]">sortir menurut :</p>
            <li><button onClick={() => { dispatch(SET_FILTERBY("time")) }} className={filter.filterBy === "time" ? "active-filter-button" : ""}>waktu</button></li>
            <li><button onClick={() => { dispatch(SET_FILTERBY("alfa")) }} className={filter.filterBy === "alfa" ? "active-filter-button" : ""}>alfabet</button></li>
          </ul>
        </div>
      </div>
    </section>
  );
}


export default SearchSection;
