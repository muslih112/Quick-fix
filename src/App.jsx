import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/dashboard" element={<Dashboard />} />
    </Routes>
  );
}

export default App;
