import React, { Component } from "react";

// component
import CatatanList from "../catatan/catatanList";
import Log from "./log";

class Dashboard extends Component {
  render() {
    return (
      <section className="dashboard">
        <CatatanList />

        <Log />
      </section>
    );
  }
}

export default Dashboard;
