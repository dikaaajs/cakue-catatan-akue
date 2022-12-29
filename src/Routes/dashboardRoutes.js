import React from "react";
import { Route, Routes } from "react-router-dom";

// component
import CreatePaper from "../components/paper/create";
import Dashboard from "../components/dashboard/dashboard";
import Paper from "../components/paper/paper";
import Update from "../components/paper/update";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="paper">
        <Route path=":id" element={<Paper />} />
        <Route path="create" element={<CreatePaper />} />
        <Route path="update" element={<Update />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
