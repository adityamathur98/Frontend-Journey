import { useContext } from "react";
import themeContext from "../../context/themeContext";
import { Link } from "react-router-dom";

const Header = () => {
  const { isDarkTheme, toggleTheme } = useContext(themeContext);

  const themeImgUrl = isDarkTheme
    ? "https://assets.ccbp.in/frontend/react-js/light-theme-img.png"
    : "https://assets.ccbp.in/frontend/react-js/dark-theme-img.png";

  const websiteLogoImageURL = isDarkTheme
    ? "https://assets.ccbp.in/frontend/react-js/website-logo-dark-theme-img.png"
    : "https://assets.ccbp.in/frontend/react-js/website-logo-light-theme-img.png";

  const navbarBgClass = isDarkTheme
    ? "text-[#ffffff] bg-[#333333]"
    : "text-[#333333] bg-[#ffffff] border-b border-[#dcdcdc] shadow-[0px_0px_0px_1px_#dcdcdc]";

  return (
    <div className={`flex justify-around ${navbarBgClass}`}>
      <div className="flex items-center justify-between w-[85%] max-w-[1110px] py-[5px] md:w-[100%] md:px-[10px]">
        <Link to="/">
          <img
            src={websiteLogoImageURL}
            alt="website logo"
            className="h-[48px] ml-[12px]"
          />
        </Link>
        <ul className="flex justify-center items-center self-stretch list-none p-0 m-0">
          <li className="w-[100%] py-[12px] px-[15px]">
            <Link
              to="/"
              className={
                isDarkTheme
                  ? "font-roboto font-[14px] font-[700] no-underline text-[#ffffff]"
                  : "font-roboto font-[14px] font-[700] no-underline text-[#171f46]"
              }>
              Home
            </Link>
          </li>
          <li className="w-[100%] py-[12px] px-[15px]">
            <Link
              to="/about"
              className={
                isDarkTheme
                  ? "font-roboto font-[14px] font-[700] no-underline text-[#ffffff]"
                  : "font-roboto font-[14px] font-[700] no-underline text-[#171f46]"
              }>
              About
            </Link>
          </li>
        </ul>
        <button
          type="button"
          className="bg-trasparent borde-none outline-none cursor-pointer"
          onClick={() => toggleTheme()}>
          <img src={themeImgUrl} alt="theme" className="h-[32px]" />
        </button>
      </div>
    </div>
  );
};

export default Header;
