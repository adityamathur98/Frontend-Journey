import { useContext } from "react";

import themeContext from "../../context/themeContext";

const NotFound = () => {
  const { isDarkTheme } = useContext(themeContext);

  const containerClassName = `flex flex-col items-center justify-center h-screen ${
    isDarkTheme ? "bg-[#000000] text-[#ffffff]" : "bg-[#ffffff] text-[#000000]"
  }`;

  const headingClassName = `font-roboto text-[28px] font-[400] leading-[1.3] md:text-[36px] ${
    isDarkTheme ? "text-[#f8fafc]" : "text-[#334155]"
  }`;

  const notFoundContentClassname = `font-roboto text-[12px] leading-[1.7] md:text-[16px] ${
    isDarkTheme ? "text-[#f8fafc]" : "text-[#64748b]"
  }`;

  return (
    <div className={containerClassName}>
      <img
        src="https://assets.ccbp.in/frontend/react-js/not-found-img.png"
        alt="not found"
        className="w-[250px] md:w-[400px]"
      />
      <h1 className={headingClassName}>Lost Your Way?</h1>
      <p className={notFoundContentClassname}>
        We cannot seem to find the page you are looking for.
      </p>
    </div>
  );
};

export default NotFound;
