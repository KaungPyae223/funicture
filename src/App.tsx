import React from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";

const App = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Nav/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
      </Routes>
    </div>
  );
};

export default App;
