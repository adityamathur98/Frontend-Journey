import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav className="flex justify-between items-center p-[32px] px-[95px] max-sm:p-[15px]">
      <div className="flex items-center">
        <img
          src="https://assets.ccbp.in/frontend/react-js/wave-logo-img.png"
          alt="wave"
          className="w-[24px] h-[24px] mr-[8px]"
        />
        <h1 className="text-[#12022f] text-[16px] font-bold text-[16px]">
          Wave
        </h1>
      </div>
      <ul className="flex pl-0">
        <li className="list-none">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `text-[#12022f] text-[16px] font-bold no-underline ml-[16px] max-md:ml-[10px] ${
                isActive ? "text-red-500 underline" : ""
              }`
            }>
            Home
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/about"
            className={({ isActive }) =>
              `text-[#12022f] text-[16px] font-bold no-underline ml-[16px] max-md:ml-[10px] ${
                isActive ? "text-red-500 underline" : ""
              }`
            }>
            About
          </NavLink>
        </li>
        <li className="list-none">
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `text-[#12022f] text-[16px] font-bold no-underline ml-[16px] max-md:ml-[10px] ${
                isActive ? "text-red-500 underline" : ""
              }`
            }>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
