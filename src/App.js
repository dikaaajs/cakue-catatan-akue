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
import ProtecRoute from "./Routes/protecRoute";

export const TokenContext = React.createContext();

function App() {
  const [user, setUser] = useState(null);

  const auth = getAuth();

  const refreshUser = () => {
    onAuthStateChanged(firebaseAuth, (user) => {
      const docRef = doc(db, "users", auth.currentUser.uid);
      getDoc(docRef).then((res) => {
        if (res.exists()) {
          console.log(res.data());
          setUser(res.data());
        } else {
          // doc.data() will be undefined in this case
          console.log("No such document!");
        }
      });
    });
  };

  useEffect(() => {
    refreshUser();
  }, []);

  console.log(user);

  return (
    <BrowserRouter>
      <TokenContext.Provider value={user}>
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
