import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Home from "./Pages/Home";
import Watchlist from "./Pages/Watchlist/Watchlist";
import Rate from "./Components/Rate/Rate";
import Contact from "./Pages/Contact/Contact";
import Registration from "./Pages/Registration/Registration";
import ErrorPage from "./Pages/ErrorPage/ErrorPage";
import Footer from "./Components/Footer/Footer";

const App = () => {
  return (
    <>
      <HashRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Rate/:id" element={<Rate />}></Route>
          <Route path="/Watchlist" element={<Watchlist />}></Route>
          <Route path="/Registration" element={<Registration />}></Route>
          <Route path="/Contact" element={<Contact />}></Route>
          <Route path="/*" element={<ErrorPage />}></Route>
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;
