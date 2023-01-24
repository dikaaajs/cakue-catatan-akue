import React from "react";
import { useSelector } from "react-redux";

const Log = () => {
  const dataLogs = useSelector((state) => state.papers);

  console.log(dataLogs)

  const componentLogs = dataLogs.map((dataLog) => {
    return (
      <div className="card-log" key={dataLog.id}>
        <p className="paragraf font-[400]">
          membuat catatan{" "}
          <span className="text-red-600 font-[600]">"{dataLog.header}"</span>
        </p>
        <p>{dataLog.updateAt}</p>
      </div>
    );
  });

  return <>{componentLogs}</>;
};

export default Log;
