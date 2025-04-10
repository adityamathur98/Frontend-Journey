import { useContext } from "react";

import themeContext from "../../context/themeContext";

const Home = () => {
  const { isDarkTheme } = useContext(themeContext);

  const containerClassName = `flex flex-col items-center justify-center h-screen ${
    isDarkTheme ? "bg-[#000000] text-[#ffffff]" : "bg-[#ffffff] text-[#000000]"
  }`;

  const headingClassName = `font-roboto text-[32px] md:text-[48px] ${
    isDarkTheme ? "text-[#ffffff]" : "text-[#1e293b]"
  }`;

  return (
    <div className={containerClassName}>
      <img
        src={
          isDarkTheme
            ? "https://assets.ccbp.in/frontend/react-js/home-dark-img.png"
            : "https://assets.ccbp.in/frontend/react-js/home-light-img.png"
        }
        alt="home"
        className="h-[124px]"
      />
      <h1 className={headingClassName}>Home</h1>
    </div>
  );
};

export default Home;
