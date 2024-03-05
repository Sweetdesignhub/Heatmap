import React, { useState } from "react";
import "./global.css";
import { Route, Routes } from "react-router-dom";
import FrameComponent from "./components/FrameComponent";
import Sidebar from "./components/Sidebar";



const App = () => {
  return (
    <div className="sidebar">
    <Sidebar />
    <main className="sidebarInner">
        <section className="sidebarParent">
        <Routes>
          {/* <Route path="/" element={<FrameComponent />} /> */}
          <Route path="/frame-screen" element={<FrameComponent />} />
        </Routes>
        </section>
        </main>
    </div>
  );
};

export default App;
