import React from "react";
import { Route, Routes } from "react-router-dom";

// component
import Dashboard from "../components/dashboard/dashboard";
import CreatePaper from "../components/dashboard/paper-section/manage/create";
import Paper from "../components/dashboard/paper-section/view/paper";

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      <Route path="paper">
        <Route path=":id" element={<Paper />} />
        <Route path="create" element={<CreatePaper />} />
      </Route>
    </Routes>
  );
};

export default DashboardRoutes;
