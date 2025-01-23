import React, { useState } from "react";

import "./index.css";

const RandomNumberGenerator = () => {
  const [number, setNumber] = useState(0);

  function getNum() {
    return Math.ceil(Math.random() * 100);
  }

  const generateNumber = () => {
    const randomNum = getNum();
    setNumber(randomNum);
  };

  return (
    <div className="app-container flex justify-center items-center bg-cover h-screen">
      <div className="random-number-container flex flex-col items-center bg-[#ffffff] w-[80%] md:w-[35%] max-w-[500px] rounded-[16px] border border-[#e4ebf3] p-[36px]">
        <h1 className="text-center text-[#0b69ff] text-[20px] font-[700] md:text-[24px] ">
          Random Number
        </h1>
        <p className="text-center text-[#333333] text-[14px] md:text-[18px]">
          Generate a random number in the range of 0 to 100
        </p>
        <button
          type="button"
          onClick={generateNumber}
          className="bg-[#0b69ff] text-white font-['Roboto'] text-[12px] font-[500] rounded-[8px] border-0 py-[8px] px-[16px] mt-[14px] outline-none cursor-pointer">
          Generate
        </button>
        <p className="text-[#0b69ff] text-[40px] font-[700] mt-[24px] md:text-[48px]">
          {number}
        </p>
      </div>
    </div>
  );
};

export default RandomNumberGenerator;
