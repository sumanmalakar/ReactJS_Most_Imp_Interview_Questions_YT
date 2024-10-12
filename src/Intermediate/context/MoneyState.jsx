import React from "react";
import MoneyContext from "./MoneyContext";

const MoneyState = (props) => {
  const money = 1000;
  const adhar = 500;
  const dollar = 10;
  return (
    <MoneyContext.Provider
      value={{
        money,
        adhar,
        dollar
      }}
    >
      {props.children}
    </MoneyContext.Provider>
  );
};

export default MoneyState;
