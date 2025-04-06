import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Home from "./components/Home";
import Profile from "./components/Profile";
import Chain from "./Product/Chain";
import Ring from "./Product/Ring";
import Gold from "./Product/Gold";
import { LoginProvider } from "./context/LoginContext";

function App() {
  return (
    <LoginProvider>
      <Router>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/chains" element={<Chain />} />
          <Route path="/rings" element={<Ring />} />
          <Route path="/gold" element={<Gold />} />
        </Routes>
      </Router>
    </LoginProvider>
  );
}

export default App;
