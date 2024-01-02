import React, { useState } from "react";
import "./movies.css";
import data from "./movies";

const TopMovies = () => {
  const [type, setType] = useState("ranking");

  const handleSelectChange = (event) => {
    setType(event.target.value);
  };

  return (
    <div className="container m-100">
      <div className="d-flex justify-content-between mb-5">
        <h4 className="movie-title">Discover Movies</h4>
        <div>
          <select value={type} onChange={handleSelectChange}>
            <option value="ranking">Ranking</option>
            <option value="popularity">Popularity</option>
            <option value="rates">Rates</option>
          </select>
        </div>
      </div>
      <div className="row">
        {data.map((item) =>
          item.type.map((e) =>
            e == type ? (
              <div
                key={item.id}
                className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 mb-5"
              >
                <div className="position-relative">
                  <img className="img-style" src={item.img} alt={item.name} />
                  <span className="movie-rate">{item.rate}</span>
                </div>

                <div className="img-details mt-3">
                  <h6 className="genre">
                    {item.pub} / {item.genre}
                  </h6>
                  <h3 className="title">{item.name}</h3>
                </div>
              </div>
            ) : (
              ""
            )
          )
        )}
      </div>
    </div>
  );
};

export default TopMovies;
