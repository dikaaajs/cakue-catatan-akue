import React, { Component } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as LogoFilter } from "../../../svg/filter.svg";

class SearchSection extends Component {
  render() {
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
                  <button className="text-blue-400">ascending</button>
                </li>
                <li>
                  <button>descending</button>
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
          <div className="popup-filter hidden">
            <ul>
              <li>waktu dibuat</li>
              <li>waktu dibuat</li>
            </ul>
          </div>
        </div>
      </section>
    );
  }
}

export default SearchSection;
