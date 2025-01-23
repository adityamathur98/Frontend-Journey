import React, { useState } from "react";

import "./index.css";

const EvenOddApp = () => {
  const [count, setCount] = useState(0);

  const isEvenOrOdd = count % 2 === 0 ? "Even" : "Odd";

  const incrementCount = () => {
    let randomNum = Math.ceil(Math.random() * 100);

    setCount(count + randomNum);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-gradient-to-b from-[#ff6e7f]/75 to-[#bfe9ff]/75 min-h-screen">
      <h1 className="text-[#0f172a] text-[32px] font-[700]">Count {count}</h1>
      <p className="text-[#334155] text-[20px] mt-[32px] font-[500]">
        Count is {isEvenOrOdd}
      </p>
      <button
        type="button"
        className="text-[#1e293b] text-[15px] font-[400] bg-white rounded-[8px] border-0 px-[32px] py-[8px] mt-5"
        onClick={incrementCount}>
        Increment
      </button>
      <p className="text-[#334155] text-[10px] mt-3">
        *Increase By Random Number Between 0 to 100
      </p>
    </div>
  );
};

export default EvenOddApp;
