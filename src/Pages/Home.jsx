import React, { useState, useEffect, useRef } from "react";
import TopMovies from "../Components/TopMovies/TopMovies";
import DisplayResult from "../Components/DisplayResult/DisplayResult";
import SearchComponent from "../Components/SearchComponent/SearchComponent";
import BackgroundImage from "../Components/BackgroundImage/BackgroundImage";
import Footer from "../Components/Footer/Footer";
import { useGlobalContext } from "../Components/Context";
import TvShows from "../Components/TvShows/TvShows.jsx";

const Home = () => {
  const { displaySearchResult } = useGlobalContext();
  return (
    <>
      <BackgroundImage />
      <TvShows />
      <SearchComponent />
      {displaySearchResult ? <DisplayResult /> : ""}
      <TopMovies />
      <Footer />
    </>
  );
};

export default Home;
