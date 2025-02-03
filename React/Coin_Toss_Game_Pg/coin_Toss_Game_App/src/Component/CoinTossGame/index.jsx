import React, { useState } from "react";

const HEADS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/heads-img.png";

const TAILS_IMG_URL = "https://assets.ccbp.in/frontend/react-js/tails-img.png";

const CoinTossGame = () => {
  const [tossResultImg, setTossResult] = useState(HEADS_IMG_URL);
  const [headCount, setHeadCount] = useState(0);
  const [tailCount, setTailCount] = useState(0);

  const onClickToss = () => {
    const tossResult = Math.floor(Math.random() * 2);

    if (tossResult === 0) {
      setTossResult(HEADS_IMG_URL);
      setHeadCount((prevState) => prevState + 1);
    } else {
      setTossResult(TAILS_IMG_URL);
      setTailCount((prevState) => prevState + 1);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-[#e2a139] to-[#f9d423]">
      <div className="bg-[#ffffff] rounded-[16px] flex flex-col items-center p-[24px] w-[80%] md:max-w-[500px] md:p-[64px]">
        <h1 className="text-[#a35200] text-[28px] font-[500] mb-[8px] md:text-[48px] md:mb-[16px]">
          Coin Toss Game
        </h1>
        <p className="text-[#334155] text-[20px] font-[500] mb-[8px] md:text-[24px] md:mb-[16px]">
          Heads (or) Tails
        </p>
        <img
          src={tossResultImg}
          alt="toss result"
          className="w-[150px] h-[150px] md:w-[250px] md:h-[250px]"
        />
        <button
          type="button"
          onClick={onClickToss}
          className="bg-[#ffda6f] text-[#a35200] text-sm font-medium border-none rounded-lg px-4 py-2 mt-4 outline-none cursor-pointer md:mt-[32px]">
          Toss Coin
        </button>
        <div className="flex flex-col items-center mt-16px md:mt-[32px] md:flex-row md:justify-center md:items-center md:mt-[32px]">
          <p className="text-[#475569] text-[16px] font-[500] ml-[24px] mr-[24px]">
            Total: {headCount + tailCount}
          </p>
          <p className="text-[#475569] text-[16px] font-[500] ml-[24px] mr-[24px]">
            Heads: {headCount}
          </p>
          <p className="text-[#475569] text-[16px] font-[500] ml-[24px] mr-[24px]">
            Tails: {tailCount}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoinTossGame;
