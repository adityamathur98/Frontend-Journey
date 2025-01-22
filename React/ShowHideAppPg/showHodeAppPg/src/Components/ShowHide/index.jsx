import React, { useState } from "react";

import "./index.css";

const ShowHide = () => {
  const [showHide, setName] = useState({
    showFirstName: false,
    showLastName: false,
  });

  const onFirstName = () => {
    setName((prevState) => ({
      ...prevState,
      showFirstName: !prevState.showFirstName,
    }));
  };

  const onLastName = () => {
    setName((prevState) => ({
      ...prevState,
      showLastName: !prevState.showLastName,
    }));
  };

  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gradient-to-r from-red-500 to-pink-500">
      <h1 className="text-[#ffffff] font-roboto text-[48px] font-[700] mb-[22px]">
        Show/Hide
      </h1>
      <div className="flex justify-center items-center flex-wrap">
        <div className="flex flex-col items-center w-[300px] h-[200px] ml-[32px] mr-[32px]">
          <button
            type="button"
            className="bg-[#ffffff] text-[#dd1264] font-roboto text-[14px] font-medium rounded-[12px] px-[24px] py-[12px] border-none"
            onClick={onFirstName}>
            Show/Hide First Name
          </button>
          {showHide.showFirstName && (
            <p className="text-center bg-[#ffffff] font-roboto text-[24px] font-[500] rounded-[12px] pt-[48px] pl-[106px] pr-[106px] pb-[48px] mt-3">
              Joe
            </p>
          )}
        </div>
        <div className="flex flex-col items-center w-[300px] h-[200px] ml-[32px] mr-[32px]">
          <button
            type="button"
            className="bg-[#ffffff] text-[#dd1264] font-roboto text-[14px] font-medium rounded-[12px] px-[24px] py-[12px] border-none"
            onClick={onLastName}>
            Show/Hide Last Name
          </button>
          {showHide.showLastName && (
            <p className="text-center bg-[#ffffff] font-roboto text-[24px] font-[500] rounded-[12px] pt-[48px] pl-[106px] pr-[106px] pb-[48px] mt-3">
              Jonas
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ShowHide;
