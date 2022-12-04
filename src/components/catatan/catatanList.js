import React from "react";
import CatatanCard from "./catatanCard";
import CatatanCari from "./catatanCari";

const CatatanList = () => {
  return (
    <div className="container-note">
      {/* search section */}
      <CatatanCari />

      {/* cards section */}
      <CatatanCard />
      <CatatanCard />
      <CatatanCard />
    </div>
  );
};

export default CatatanList;
