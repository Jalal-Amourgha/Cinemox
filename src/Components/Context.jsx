import React, { useState, useEffect, useContext } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [displayRecentSearch, setDisplayRecentSearch] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [result, setResult] = useState([]);
  const [myRateList, setMyRateList] = useState(
    JSON.parse(localStorage.getItem("myVariable")) || []
  );

  const changeDisplay = () => {
    setDisplayRecentSearch(false);
  };

  const updateResult = (data) => {
    setResult(data);
  };

  useEffect(() => {
    localStorage.setItem("myVariable", JSON.stringify(myRateList));
  }, [myRateList]);

  const updateMyRateList = (newList) => {
    setMyRateList(newList);
  };

  const removeItem = (id) => {
    const updatedList = myRateList.filter((item) => item.name !== id);
    setMyRateList(updatedList);
  };

  const editItem = (rate, note, id) => {
    let indexToModify = myRateList.findIndex((item) => item.name === id);

    myRateList[indexToModify].rate = rate;
    myRateList[indexToModify].note = note;

    localStorage.setItem("myVariable", JSON.stringify(myRateList));
  };

  const clearList = () => {
    setMyRateList([]);
  };

  return (
    <AppContext.Provider
      value={{
        displayRecentSearch,
        changeDisplay,
        result,
        isLoading,
        setIsLoading,
        updateResult,
        myRateList,
        updateMyRateList,
        removeItem,
        editItem,
        clearList,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
