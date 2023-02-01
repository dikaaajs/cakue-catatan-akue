// component
import React from "react";
import PaperCard from "./view/card";
import SearchSection from "./layout/search";

const ContainerPaper = () => {
  return (
    <div className="container-note">
      {/* search section */}
      <SearchSection />
      {/* cards section */}
      <PaperCard />
    </div>
  );
};

export default ContainerPaper;
