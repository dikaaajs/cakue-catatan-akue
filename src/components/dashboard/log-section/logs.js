import React from "react";
import Log from "./log";

const Logs = () => {
  return (
    <div className="log">
      {/* judul section */}
      <div className="header-log">
        <p className="z-10">
          <span className="material-symbols-outlined">history</span>
          log aktivitas
        </p>
      </div>

      {/* card section */}
      <Log />
    </div>
  );
};

export default Logs;
