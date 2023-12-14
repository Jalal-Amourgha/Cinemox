import React, { useEffect, useState, useRef } from "react";
import { useGlobalContext } from "./Context";

const SearchComponent = () => {
  const [search, setSearch] = useState("");
  const { setIsLoading, changeDisplay, updateResult } = useGlobalContext();
  const searchValue = useRef("");

  const url = `https://online-movie-database.p.rapidapi.com/auto-complete?q=${search}`;
  const options = {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "c57d428066msh0c0924c31458087p19ab57jsnbba6e6cac10b",
      "X-RapidAPI-Host": "online-movie-database.p.rapidapi.com",
    },
  };

  const fetchUrl = async () => {
    try {
      const response = await fetch(url, options);
      const data = await response.json();
      setIsLoading(false);

      updateResult([data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    searchValue.current.focus();
  }, []);

  function handleSubmit(e) {
    e.preventDefault();

    fetchUrl();
    changeDisplay();
  }

  return (
    <div className="search-box">
      <h3 className="mb-4">SEARCH FOR YOUR FAVORITE SERIE OR MOVIE</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Search Here"
          ref={searchValue}
          className="input-style"
          onChange={(e) => setSearch(e.target.value)}
        />
        <button type="submit" className="edit-btn">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchComponent;
