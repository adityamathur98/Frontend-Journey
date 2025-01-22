import React, { useState } from "react";

import "./index.css";

const LightDarkMode = () => {
  const [isDarkMode, setMode] = useState(true);

  const modeClassname = isDarkMode ? "dark-mode" : "light-mode";
  const btnText = isDarkMode ? "Light Mode" : "Dark Mode";

  return (
    <div className="flex justify-center items-center h-screen p-[24px]">
      <div className={`text-center rounded-[12px] p-[24px] ${modeClassname}`}>
        <h1 className="font-roboto text-[32px]">Click to Change Mode</h1>
        <button
          type="button"
          class="text-base border border-teal-500 rounded px-4 py-4 rounded-lg bg-white text-black mt-6"
          onClick={() => setMode(!isDarkMode)}>
          {btnText}
        </button>
      </div>
    </div>
  );
};

export default LightDarkMode;
