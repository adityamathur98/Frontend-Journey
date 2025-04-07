import { AiFillHome } from "react-icons/ai";
import { BsInfoCircleFill } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import Popup from "reactjs-popup";

const Header = () => (
  <div className="flex justify-center shadow-[0_0_0_1px_#dcdcdc]">
    <div className="flex items-center justify-between w-[90%] py-[18px] max-w-[458px] md:py-[26px] md:max-w-[1110px]">
      <Link to="/">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          className="w-[38px] h-[38px] md:w-[48px] md:h-[48px]"
          alt="website logo"
        />
      </Link>
      <Popup
        modal
        trigger={
          <button
            className="bg-transparent w-[42px] h-[35px] border-none outline-none cursor-pointer"
            type="button">
            <GiHamburgerMenu size={30} />
          </button>
        }
        className="flex flex-col items-center bg-[#ffffff] w-[100vw] h-[100vh]">
        {(close) => (
          <div className="flex flex-col items-center bg-[#ffffff] w-[100vw] h-[100vh] max-w-[458px] md:max-w-[1110px]">
            <button
              type="button"
              className="self-end bg-transparent w-[30px] h-[30px] border-none mt-[32px] outline-none border-none"
              onClick={() => close()}>
              <IoMdClose size={30} color="#616e7c" />
            </button>
            <ul className="grow-1 flex flex-col justify-center items-center pl-0">
              <li className="list-none">
                <Link
                  className="flex justify-center items-center text-[#1e293b] no-underline mb-[32px]"
                  to="/"
                  onClick={() => close()}>
                  <AiFillHome size={36} />
                  <p className="font-Roboto font-[500] text-[32px] leading-[1.2] m-0 ml-[8px] md:text-[40px]">
                    Home
                  </p>
                </Link>
              </li>
              <li className="list-none">
                <Link
                  className="flex justify-center items-center text-[#1e293b] no-underline mb-[32px]"
                  to="/about"
                  onClick={() => close()}>
                  <BsInfoCircleFill size={36} />
                  <p className="font-Roboto font-[500] text-[32px] leading-[1.2] m-0 ml-[8px] md:text-[40px]">
                    About
                  </p>
                </Link>
              </li>
            </ul>
          </div>
        )}
      </Popup>
    </div>
  </div>
);

export default Header;
