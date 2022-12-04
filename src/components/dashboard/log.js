import React from "react";

const Log = () => {
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
      <div className="card-log">
        <p className="paragraf">membuat catatan materi biologi</p>
        <p>10.58</p>
      </div>
      <div className="card-log">
        <p className="paragraf">membuat catatan materi biologi</p>
        <p>10.58</p>
      </div>
      <div className="card-log">
        <p className="paragraf">membuat catatan materi biologi</p>
        <p>10.58</p>
      </div>
    </div>
  );
};

export default Log;
