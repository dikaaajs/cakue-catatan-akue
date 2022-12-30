// component
import React from "react";
import PaperCard from "./card";
import SearchSection from "./search";

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
