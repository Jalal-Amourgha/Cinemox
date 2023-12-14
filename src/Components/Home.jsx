import React, { useState, useEffect, useRef } from "react";
import RecentSearch from "./RecentSearch";
import DisplayResult from "./DisplayResult";
import SearchComponent from "./SearchComponent";
import { useGlobalContext } from "./Context";

const Home = () => {
  const { displayRecentSearch } = useGlobalContext();

  return (
    <div className="container">
      <SearchComponent />
      {displayRecentSearch ? <RecentSearch /> : <DisplayResult />}
    </div>
  );
};

export default Home;
