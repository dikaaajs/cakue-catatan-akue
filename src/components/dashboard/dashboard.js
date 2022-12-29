import React from "react";
// component
import ContainerPaper from "../paper/container";
import Log from "./logs";

function Dashboard() {
  return (
    <section className="dashboard">
      <ContainerPaper />
      <Log />
    </section>
  );
}

export default Dashboard;
