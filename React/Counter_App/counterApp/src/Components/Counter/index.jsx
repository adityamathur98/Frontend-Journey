import React, { useState } from "react";

import "./index.css";

const Counter = () => {
  const [count, setCount] = useState(0);

  const onIncrease = () => {
    setCount((prevState) => prevState + 1);
  };

  const onDecrease = () => {
    setCount((prevState) => prevState - 1);
  };

  const onReset = () => {
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="heading text-[40px]">Counter</h1>
      <p className="counter text-[80px] mt-[8px] mb-[20px]">{count}</p>
      <div>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-[8px] button"
          onClick={onDecrease}>
          Decrease
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-[8px] button"
          onClick={onReset}>
          Reset
        </button>
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 m-[8px] button"
          onClick={onIncrease}>
          Increase
        </button>
      </div>
    </div>
  );
};

export default Counter;
