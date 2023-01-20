import React from "react";
import { Route, Routes } from "react-router";
import Nav from "./Nav";
import { Navbar } from "./Navbar";
import SignInSide from "./SignInSide";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/login" element={<SignInSide />} />
      </Routes>
      <Routes>
        <Route path="/dashboard" element={<Nav />} />
      </Routes>
    </div>
  );
}

export default App;
