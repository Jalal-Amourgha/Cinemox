import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import MyRates from "./Components/MyRates";
import Rate from "./Components/Rate";
import Contact from "./Components/Contact";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/MyRates" element={<MyRates />}></Route>
          <Route path="/Rate/:id" element={<Rate />}></Route>
          <Route path="/MyRates" element={<MyRates />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
