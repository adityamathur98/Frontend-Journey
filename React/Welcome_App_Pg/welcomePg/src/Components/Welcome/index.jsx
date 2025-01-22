import React, { useState } from "react";

import "./index.css";

const Welcome = () => {
  const [isSubscribe, setSubscribetion] = useState(false);

  const subcribeOrNot = () => {
    if (isSubscribe) {
      return (
        <button className="bg-white text-black rounded px-4 py-2 shadow hover:bg-gray-100">
          Subscribed
        </button>
      );
    }
    return (
      <button className="bg-white text-black rounded px-4 py-2 shadow hover:bg-gray-100">
        Subscribe
      </button>
    );
  };

  const onSuscribe = () => {
    setSubscribetion(!isSubscribe);
  };

  return (
    <div className="flex flex-col justify-center items-center bg-[#1e293b] h-screen">
      <h1 className="text-[#f0bb03] text-[64px] mb-[16px] font-bree md:text-[96px]">
        Welcome
      </h1>
      <p className="text-[#ffffff] font-bree text-[24px] md:text-[36px] mb-[24px]">
        Thank you! Happy Learning
      </p>
      <button type="button" onClick={onSuscribe}>
        {subcribeOrNot()}
      </button>
    </div>
  );
};

export default Welcome;
