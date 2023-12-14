import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGlobalContext } from "./Context";

const DisplayResult = () => {
  const { result } = useGlobalContext();

  return (
    <div className="container">
      <div className="row">
        {result[0]["d"].map((item, index) => (
          <div
            className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 mb-5"
            key={index}
          >
            <div className="">
              <img src={item.i.imageUrl} alt={item.l} />
            </div>
            <div className="img-details">
              <h3 className="title">{item.l}</h3>
              <p className="fst-italic">
                Category : <strong>{item.q}</strong> <br /> Published in :
                <strong> {item.y}</strong>
              </p>
              <div className="text-center">
                <Link to={`/Rate/${index}`} state={item} className="edit-btn">
                  Rate
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayResult;
