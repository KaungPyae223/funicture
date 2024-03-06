import React from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";

const App = () => {
  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Nav/>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/customers" element={<Customers/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/products" element={<Products/>}/>

      </Routes>
    </div>
  );
};

export default App;
