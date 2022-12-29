import React, { useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../config/fbConfig";

const ProtecRoute = () => {
  const navigate = useNavigate();
  const [token, setToken] = useState(false);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      const data = user?.emailVerified || false;
      if (data == false) {
        navigate("account/login");
      } else {
        setToken(true);
      }
    });
  }, []);

  onAuthStateChanged(firebaseAuth, (user) => {
    const data = user?.emailVerified || false;
    if (data == false) {
      navigate("account/login");
    }
  });

  return token ? <Outlet /> : <h1>loading</h1>;
};

export default ProtecRoute;
