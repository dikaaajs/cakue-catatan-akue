import React from "react";
import { Route, Routes } from "react-router-dom";
import ResetPass from "../components/auth/resetPass";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/signUp";

const AccountRoutes = () => {
  return (
    <Routes>
      <Route path="login" element={<SignIn />} />
      <Route path="signup" element={<SignUp />} />
      <Route path="forgot" element={<ResetPass />} />
    </Routes>
  );
};

export default AccountRoutes;
