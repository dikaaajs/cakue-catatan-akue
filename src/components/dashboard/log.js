import React, { useEffect, useState } from "react";
import { getPapers } from "../../utils/handlePaper";

const Log = () => {
  const [dataLogs, setLogs] = useState([]);

  useEffect(() => {
    getPapers()
      .then((response) => {
        setLogs(response);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [dataLogs]);

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
