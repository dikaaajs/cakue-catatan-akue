import React, { useEffect } from "react";
// component
import ContainerPaper from "./paper-section/container";
import Log from "./log-section/logs";

function Dashboard() {
  return (
    <section className="dashboard">
      <ContainerPaper />
      <Log />
    </section>
  );
}

export default Dashboard;
