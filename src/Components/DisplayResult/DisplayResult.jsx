import React, { useEffect, useState } from "react";
import "./result.css";
import { Link } from "react-router-dom";
import { useGlobalContext } from "../Context";
import errorImg from "../../images/error.jpg";

const DisplayResult = () => {
  const { result, isLoading } = useGlobalContext();

  if (isLoading) {
    return (
      <div className="text-center mt-5">
        <div className="loader"></div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <div className="row">
          {result[0].d.map((item, index) =>
            index <= 4 ? (
              <div
                className="col-lg-3 col-md-4 col-sm-6 col-xsm-12 mb-5"
                key={index}
              >
                <div className="">
                  {typeof item.i === "undefined" ? (
                    <img src={errorImg} alt="This img does not exist" />
                  ) : (
                    <img
                      src={item.i.imageUrl}
                      alt={item.l}
                      className="img-style"
                    />
                  )}
                </div>
                <div className="img-details">
                  <h3 className="title">{item.l}</h3>
                  <p className="fst-italic">
                    Category : <strong>{item.q}</strong> <br /> Published in :
                    <strong> {item.y}</strong>
                  </p>
                  <div className="text-center mt-3">
                    <Link
                      to={`/Rate/${index}`}
                      state={item}
                      className="edit-btn"
                    >
                      Add Item
                    </Link>
                  </div>
                </div>
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    );
  }
};

export default DisplayResult;
