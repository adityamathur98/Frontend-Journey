import React, { useState } from "react";

import "./index.css";

const LetterCalculator = () => {
  const [inputPhase, setInputPhase] = useState("");

  const onChangeInput = (e) => {
    setInputPhase(e.target.value);
  };

  return (
    <div className="flex justify-center items-center bg-gradient-to-r from-[#1d976c] to-[#93f9b9] h-screen">
      <div className="flex flex-col justify-center items-center w-[90%] md:flex-row">
        <div className="flex flex-col items-center order-1 md:items-start md:order-0">
          <h1 className="text-center text-[#ffffff] text-[24px] font-[700] md:text-[46px] lg:text-start lg:text-[46px]">
            Calculate the Letter You enter
          </h1>
          <div className="flex flex-col">
            <label
              className="text-[#ffffff] text-[12px] font-[700]"
              htmlFor="phaseText">
              Enter the Phase
            </label>
            <input
              type="text"
              value={inputPhase}
              placeholder="Enter the Phase"
              onChange={onChangeInput}
              className="text-white bg-transparent font-roboto text-[16px] font-medium border border-[#e4e7eb] rounded-md mt-2 py-2 px-3 outline-none md:w-[350px]"
              id="phaseText"
            />
          </div>
          <p className="self-center text-[#219a6f] bg-[#ffffff] text-[24px] font-[700] rounded-[12px] mt-[32px] p-[18px] pr-[24px] pl-[24px] md:self-start md:p-[24px] md:pr-[32px] md:pl-[32px]">
            No.of letters:{inputPhase.length}
          </p>
        </div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/stop-watch-with-calculator-img.png"
          alt="letter calculator"
          className="w-[100%] order-0 md:w-[550px] md:order-1 lg:w-[700px]"
        />
      </div>
    </div>
  );
};

export default LetterCalculator;
