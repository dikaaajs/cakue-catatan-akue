import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// component
import SignIn from "./components/auth/signIn";
import SignUp from "./components/auth/signUp";
import CatatanCreate from "./components/catatan/catatanCreate";
import Dashboard from "./components/dashboard/dashboard";
import Navigasi from "./components/layout/navbar";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app">
          <Navigasi />
          <Routes>
            <Route exact path="/" element={<Dashboard />} />
            <Route path="/account/login" element={<SignIn />} />
            <Route path="/account/signup" element={<SignUp />} />
            <Route path="/create" element={<CatatanCreate />} />
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
