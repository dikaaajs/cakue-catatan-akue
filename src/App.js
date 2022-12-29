import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import Navigasi from "./components/layout/navbar";

// firebase auth
import { onAuthStateChanged } from "firebase/auth";
import { firebaseAuth } from "./config/fbConfig";
import LandingPage from "./components/home/home";

// routes
import DashboardRoutes from "./Routes/dashboardRoutes";
import AccountRoutes from "./Routes/accountRoutes";
import ProtecRoute from "./Routes/protecRoute";

export const TokenContext = React.createContext();

function App() {
  const [token, setToken] = useState();

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      const token = user?.emailVerified || "false";
      setToken(token);
    });
  }, []);

  return (
    <BrowserRouter>
      <TokenContext.Provider value={token}>
        <div className="app">
          {/* header section */}
          <Navigasi />

          {/* main section */}
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="account/*" element={<AccountRoutes />} />
            <Route element={<ProtecRoute />}>
              <Route path="/dashboard/*" element={<DashboardRoutes />} />
            </Route>
          </Routes>

          {/* footer section */}
        </div>
      </TokenContext.Provider>
    </BrowserRouter>
  );
}

export default App;
