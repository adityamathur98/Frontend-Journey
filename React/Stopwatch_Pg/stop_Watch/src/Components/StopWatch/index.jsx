import React, { useState, useEffect, useRef } from "react";

const StopWatch = () => {
  const [time, setTime] = useState(0);
  const [isTimeRunning, setIsTimeRunning] = useState(false);

  const intervalRef = useRef(null);

  useEffect(() => {
    return () => clearInterval(intervalRef.current);
  }, []);

  const onResetTimer = () => {
    clearInterval(intervalRef.current);
    setIsTimeRunning(false);
    setTime(0);
  };

  const onStopTimer = () => {
    clearInterval(intervalRef.current);
    setIsTimeRunning(false);
  };

  const onStartTimer = () => {
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 1);
    }, 1000);
    setIsTimeRunning(true);
  };

  const renderSeconds = () => {
    const seconds = Math.floor(time % 60);

    if (seconds < 10) {
      return `0${seconds}`;
    }
    return seconds;
  };

  const renderMinutes = () => {
    const minutes = Math.floor(time / 60);
    if (minutes < 10) {
      return `0${minutes}`;
    }
    return minutes;
  };

  const timer = `${renderMinutes()}:${renderSeconds()}`;

  return (
    <div className="bg-[url('https://assets.ccbp.in/frontend/react-js/stopwatch-sm-bg.png')] md:bg-[url('https://assets.ccbp.in/frontend/react-js/stopwatch-lg-bg.png')] h-screen bg-cover w-screen">
      <div className="flex flex-col items-center pt-[64px] md:items-start md:ml-[160px]">
        <h1 className="text-[#333333] font-roboto text-[36px] font-[500] md:text-[64px]">
          StopWatch
        </h1>
        <div className="flex flex-col items-center bg-[#ffffff] w-[310px] rounded-[12px] p-[32px] shadow-[0px_4px_40px_rgba(23,31,70,0.16)]">
          <div className="flex items-center">
            <img
              src="https://assets.ccbp.in/frontend/react-js/stopwatch-timer.png"
              alt="stopWatch"
              className="mr-[8px]"
            />
            <p className="text-[#333333] font-roboto text-[24px] font-[500]">
              Timer
            </p>
          </div>
          <h1 className="text-[#333333] font-roboto text-[36px] font-[500] mt-0 md:text-[64px]">
            {timer}
          </h1>
          <div className="flex space-between">
            <button
              type="button"
              className="bg-[#1db05f] mr-[24px] text-[#2de16c] font-roboto text-[14px] font-[600] rounded-[4px] py-[4px] px-[20px] cursor-pointer border-none outline-none md:py-[8px]"
              onClick={onStartTimer}
              disabled={isTimeRunning}>
              Start
            </button>
            <button
              type="button"
              className="bg-[#ef0d36] mr-[24px] text-[#ef3535] font-roboto text-[14px] font-[600] rounded-[4px] py-[4px] px-[20px] cursor-pointer border-none outline-none  md:py-[8px]"
              onClick={onStopTimer}>
              Stop
            </button>
            <button
              type="button"
              className="bg-[#eaa800] text-[#ccd33b] font-roboto text-[14px] font-[600] rounded-[4px] py-[4px] px-[20px] cursor-pointer border-none outline-none  md:py-[8px]"
              onClick={onResetTimer}>
              Reset
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StopWatch;
