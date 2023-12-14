import React from "react";
import data from "./data";

const RecentSearch = () => {
  return (
    <div className="container">
      <h1 className="mb-5">Recent Searched :</h1>
      <div className="row">
        {data.map((item) => (
          <div
            key={item.id}
            className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 mb-5"
          >
            <img className="img-fluid" src={item.img} alt={item.name} />
            <div className="img-details">
              <h3 className="title">{item.name}</h3>
              <p className="fst-italic">
                Category : <strong>{item.category}</strong>
                <br />
                Published <strong>{item.pub}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default RecentSearch;
