import React, { useState, useEffect } from "react";
import "./rate.css";
import { useLocation } from "react-router-dom";
import { useGlobalContext } from "../Context";

const Rate = () => {
  const { myRateList, updateMyRateList } = useGlobalContext();
  const location = useLocation();
  const data = location.state;
  const [myRate, setMyRate] = useState("");
  const [myNote, setMyNote] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  const [countdown, setCountdown] = useState(3);

  useEffect(() => {
    let countdownInterval;

    if (showPopup) {
      countdownInterval = setInterval(() => {
        setCountdown((prevCountdown) => {
          const newCountdown = prevCountdown - 0.01;
          return newCountdown > 0 ? newCountdown : 0;
        });
      }, 10);
    }
    return () => {
      clearInterval(countdownInterval);
    };
  }, [showPopup]);

  useEffect(() => {
    if (countdown === 0) {
      setShowPopup(false);
      setCountdown(3);
    }
  }, [countdown]);

  const showPopupHandler = () => {
    setMyRate("");
    setMyNote("");
    setShowPopup(true);
    updateMyRateList([
      ...myRateList,
      {
        image: data.i.imageUrl,
        name: data.l,
        rate: myRate,
        note: myNote,
      },
    ]);
    setShowPopup(true);
  };

  function addItem(e) {
    e.preventDefault();

    myRate !== "" && myNote !== ""
      ? showPopupHandler()
      : alert("Enter Your Rate And Note.");
  }

  return (
    <div className="container m-100">
      <h1 className="text-center mt-3">Rate Here</h1>
      {showPopup && (
        <div className="popup">
          <div>
            <h5 className="mt-1 mb-3">Your Item is successfully added.</h5>
          </div>
          <div className="countdownBar">
            <div
              className="countdownFill"
              style={{ width: `${(countdown / 3) * 100}%` }}
            ></div>
          </div>
        </div>
      )}
      <div className="rate-box">
        <div className="d-flex justify-content-center text-center">
          <img src={data.i.imageUrl} alt="whatever" />
        </div>
        <div className="details-box">
          <form onSubmit={addItem}>
            <div className="mb-4">
              <label className="fs-5">
                Name : <strong>{data.l}</strong>
              </label>
            </div>
            <div className="mb-4">
              <label htmlFor="rate" className="fs-5 me-2">
                Rate :
              </label>
              <input
                type="number"
                name="rate"
                id="rate"
                max={10}
                min={0}
                placeholder="?"
                value={myRate}
                onChange={(e) => setMyRate(e.target.value)}
              />
              <label className="fs-5">
                <strong> / 10</strong>
              </label>
            </div>
            <div className="mb-4 me-3 d-flex">
              <label htmlFor="note" className="fs-5 me-2">
                Note :
              </label>
              <textarea
                name="note"
                cols="30"
                rows="10"
                placeholder="Type Your Note ..."
                value={myNote}
                onChange={(e) => setMyNote(e.target.value)}
              ></textarea>
            </div>
            <div className="text-center mt-3">
              <button className="edit-btn">Submit</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Rate;
