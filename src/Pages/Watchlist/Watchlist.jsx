import React, { useState, useEffect } from "react";
import "./watchlist.css";
import { useGlobalContext } from "../../Components/Context";

const Watchlist = () => {
  const [chnageRate, setChangeRate] = useState("");
  const [chnageNote, setChangeNote] = useState("");
  const [edit, setEdit] = useState(false);
  const { myRateList, removeItem, editItem, clearList } = useGlobalContext();
  const [isEditMode, setIsEditMode] = useState({});

  const handleEditClick = (itemName) => {
    setIsEditMode((prevIsEditMode) => ({
      ...prevIsEditMode,
      [itemName]: !prevIsEditMode[itemName],
    }));

    if (edit) {
      if (chnageRate <= 10 && chnageRate != "" && chnageNote !== "") {
        editItem(chnageRate, chnageNote, itemName);
      } else {
        alert("Pls Fill The Inputs and Rate should be less than 10 .");
      }
    }

    setEdit(!edit);
  };

  if (myRateList.length === 0) {
    return (
      <div className="container m-100">
        <h1 className="mt-5 text-center">No Items Added</h1>
      </div>
    );
  } else {
    return (
      <div className="container m-100">
        <div className="watchlist text-center mt-4 mb-4">
          <h1 className="mb-5">My Watchlist</h1>
          <div className="watchlist-box">
            {myRateList.map((item) => (
              <div key={item.name} className="item">
                <div className="d-flex justify-content-center align-items-center">
                  <img src={item.image} alt="" />
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  <h5>{item.name}</h5>
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  {isEditMode[item.name] ? (
                    <input
                      type="number"
                      max={10}
                      min={0}
                      placeholder={item.rate}
                      onChange={(e) => setChangeRate(e.target.value)}
                    />
                  ) : (
                    <h4>{item.rate} / 10</h4>
                  )}
                </div>
                <div className="d-flex justify-content-center align-items-center">
                  {isEditMode[item.name] ? (
                    <input
                      type="text"
                      placeholder={item.note}
                      onChange={(e) => setChangeNote(e.target.value)}
                    />
                  ) : (
                    <p>{item.note}</p>
                  )}
                </div>
                <div className="d-flex justify-content-evenly align-items-center">
                  <button onClick={() => handleEditClick(item.name)}>
                    {isEditMode[item.name] ? "Submit" : "Edit"}
                  </button>
                  <button onClick={() => removeItem(item.name)}>Remove</button>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <button onClick={clearList}>Clear List</button>
          </div>
        </div>
      </div>
    );
  }
};

export default Watchlist;
