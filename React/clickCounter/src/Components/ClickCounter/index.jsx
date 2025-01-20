import React, { useState } from "react";
import "./index.css";

const ClickCounter = () => {
  const [counter, setCounter] = useState(0);

  const onClickIncrease = () => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[#f1f5f8]">
      <h1 className="counter-heading text-[32px] font-[800] text-center">
        The Button has been clicked
        <br /> <span className="counter-value font-[900]">{counter}</span> times
      </h1>
      <p className="description text-center text-[16px]">
        Click the button to increase the count!
      </p>
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-4"
        onClick={onClickIncrease}>
        Click Me
      </button>
    </div>
  );
};

export default ClickCounter;
