import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Dashboard from "./Dashboard";
import Devices from "./Devices";
import Navbar from "./Navbar";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/devices" element={<Devices />} />
      </Routes>

    </BrowserRouter>
  );
}

export default App;