import React, { useState } from "react";

import "./index.css";

const Speedometer = () => {
  const [speed, setSpeed] = useState(0);

  const onAccelerate = () => {
    if (speed < 200) {
      setSpeed((prevSpeed) => prevSpeed + 10);
    }
  };

  const onApplyBreaks = () => {
    if (speed > 0) {
      setSpeed((prevSpeed) => prevSpeed - 10);
    }
  };

  return (
    <div className="flex justify-center items-center bg-[#07080c] h-screen">
      <div className="flex flex-col items-center">
        <h1 className="heading text-[#ffffff] text-[36px] font-[500]">
          SPEEDOMETER
        </h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
          alt="speedometer"
          className="w-[300px] h-[125px] md:w-[700px] md:h-[300px]"
        />
        <h1 className="speed-text text-[#ffffff] text-[24px] text-[500] md:text-[32px]">
          Speed is {speed}mph
        </h1>
        <p className="speed-limit text-[#cbd5e1] text-[12px] mb-[48px] md:text-[16px]">
          Min Limit is 0mph, Max Limit is 200mph
        </p>
        <div className="flex justify-center">
          <button
            class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-[12px]"
            onClick={onAccelerate}>
            Accelerate
          </button>
          <button
            class="text-[#94a3b8] bg-transparent font-roboto text-[12px] font-medium border-2 border-[#94a3b8] px-4 py-2 rounded ml-[12px]"
            onClick={onApplyBreaks}>
            Apply Brake
          </button>
        </div>
      </div>
    </div>
  );
};

export default Speedometer;
