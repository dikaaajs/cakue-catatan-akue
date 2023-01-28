import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import Navigasi from "./components/layout/navigasi/navbar";

// firebase auth
import { onAuthStateChanged, getAuth } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";

import { db, firebaseAuth } from "./config/fbConfig";

import LandingPage from "./components/home/home";

// routes
import DashboardRoutes from "./Routes/dashboardRoutes";
import AccountRoutes from "./Routes/accountRoutes";
import ProtectRoute from "./Routes/protecRoute";

export const TokenContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);
  return (
    <BrowserRouter>
      <div className="app">
        {/* header section */}
        <Navigasi />

        {/* main section */}
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="account/*" element={<AccountRoutes />} />
          <Route element={<ProtectRoute />}>
            <Route path="/dashboard/*" element={<DashboardRoutes />} />
          </Route>
        </Routes>

        {/* footer section */}
      </div>
    </BrowserRouter>
  );
}

export default App;
