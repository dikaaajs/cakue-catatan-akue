import { onAuthStateChanged } from "firebase/auth";
import React, { useContext, useEffect, useState } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { firebaseAuth } from "../config/fbConfig";

const ProtecRoute = () => {
  const [token, setToken] = useState(undefined);

  useEffect(() => {
    onAuthStateChanged(firebaseAuth, (user) => {
      if (user) {
        setToken(true);
      }
    });
  }, [token]);

  return token !== undefined ? <Outlet /> : <h1>loading</h1>;
};

export default ProtecRoute;
