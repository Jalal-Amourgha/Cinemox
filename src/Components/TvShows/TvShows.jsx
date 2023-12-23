import React, { useState, useEffect } from "react";
import "./shows.css";
import data from "./shows";

const TvShows = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const sliderContent = document.getElementById("slider-content");

    const items = document.querySelectorAll(".slider-item");
    sliderContent.innerHTML = sliderContent.innerHTML + sliderContent.innerHTML;
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      updateSlider(newIndex);
      return newIndex;
    });
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      updateSlider(newIndex);
      return newIndex;
    });
  };

  const updateSlider = (newIndex) => {
    const newTransformValue = -newIndex * (300 + 10) + "px";
    const sliderContent = document.getElementById("slider-content");
    sliderContent.style.transform = "translateX(" + newTransformValue + ")";
  };

  return (
    <div className="m-100">
      <div className="container">
        <h3>ImDb Popular Tv Shows</h3>
        <div id="slider">
          <div id="slider-content">
            {data.map((item, index) => (
              <div key={index} className="slider-item">
                <img src={item.img} alt={item.name} />
                <h4 className="mt-3 mb-3">{item.name}</h4>
                <div className="d-flex justify-content-between align-items-center mb-3">
                  <p>{item.pub}</p>
                  <p>
                    <i className="fa-solid fa-star"></i>
                    {item.stars} ({item.rates})
                  </p>
                </div>
              </div>
            ))}
          </div>
          <button onClick={prevSlide} className="left-btn">
            <i className="fa-solid fa-arrow-left"></i>
          </button>
          <button onClick={nextSlide} className="right-btn">
            <i className="fa-solid fa-arrow-right"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TvShows;
