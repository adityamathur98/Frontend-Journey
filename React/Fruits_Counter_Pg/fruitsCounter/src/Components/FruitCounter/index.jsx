import React, { useState } from "react";

import "./index.css";

const FruitCounter = () => {
  const [appleCounter, setAppleCounter] = useState(0);
  const [bananaCounter, setBananaCounter] = useState(0);

  const addAppleCount = () => {
    setAppleCounter((prevCount) => prevCount + 1);
  };

  const addBananaCount = () => {
    setBananaCounter((prevCount) => prevCount + 1);
  };

  return (
    <div className="flex justify-center items-center bg-[#ffd569] h-screen">
      <div className="flex flex-col items-center bg-[#ffffff] rounded-[16px] w-[90%] p-[24px] max-w-[1110px] md:w-[80%] md:pt-[96px] md:pl-[64px] md:pr-[64px] md:pb-[96px]">
        <h1 className="count-text text-center text-[#000000] text-[20px] font-[700] md:text-[48px]">
          Bob ate <span className="text-[#ffd569]">{appleCounter}</span> mangoes
          <span className="text-[#ffd569]"> {bananaCounter}</span> bananas
        </h1>
        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col mt-[32px] ml-[16px] mr-[16px] md:mt-[96px] md:ml-[48px] md:mr-[48px]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
              alt="mango"
              className="w-[200px] h-[175px] md:w-[296px] md:h-[275px]"
            />
            <div className="text-center mt-24px md:mt-[48px]">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={addAppleCount}>
                Eat Mango
              </button>
            </div>
          </div>
          <div className="flex flex-col mt-[32px] ml-[16px] mr-[16px] md:mt-[96px] md:ml-[48px] md:mr-[48px]">
            <img
              src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
              alt="banana"
              className="w-[200px] h-[175px] md:w-[296px] md:h-[275px]"
            />
            <div className="text-center mt-24px md:mt-[48px]">
              <button
                class="px-4 py-2 bg-blue-500 text-white rounded"
                onClick={addBananaCount}>
                Eat Banana
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FruitCounter;
