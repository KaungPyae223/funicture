import React from "react";
import Nav from "./Components/Nav";
import Home from "./Pages/Home";
import Customers from "./Pages/Customers";
import { Route, Routes } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Products from "./Pages/Products";
import { AnimatePresence } from "framer-motion";
import DetailPage from "./Pages/DetailPage";
import Cookies from 'js-cookie';
import { useDispatch } from "react-redux";
import { AddFromCookie } from "./features/craftSlice";
import Loading from "./Pages/Loading";

const App = () => {
  const dispatch = useDispatch();

  if(Cookies.get("Craft")){
    const CraftItems = JSON.parse(Cookies.get("Craft"));
    dispatch(AddFromCookie(CraftItems));
  }

  return (
    <div className="max-w-[100vw] overflow-hidden">
      <Nav />
      <AnimatePresence mode={"wait"}>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/products" element={<Products />} />
          <Route path="/detail/:id" element={<DetailPage />} />

        </Routes>
      </AnimatePresence>
    </div>
  );
};

export default App;
