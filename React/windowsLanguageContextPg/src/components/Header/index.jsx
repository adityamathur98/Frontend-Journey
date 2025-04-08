import { useContext } from "react";

import LanguageContext from "../../context/languageContext";

import "./index.css";

const languageOptions = [
  { id: 1, value: "EN", language: "English" },
  { id: 2, value: "HI", language: "हिंदी" },
  { id: 3, value: "TE", language: "తెలుగు" },
];

const Header = () => {
  const { activeLanguage, changeLanguage } = useContext(LanguageContext);

  const onChangeLanguage = (event) => {
    changeLanguage(event.target.value);
  };
  return (
    <nav className="nav-header">
      <img
        className="website-logo"
        src="https://assets.ccbp.in/frontend/react-js/windows-logo-img.png"
        alt="website logo"
      />
      <select
        className="language-dropdown"
        value={activeLanguage}
        onChange={onChangeLanguage}>
        {languageOptions.map((eachOption) => (
          <option key={eachOption.id} value={eachOption.value}>
            {eachOption.language}
          </option>
        ))}
      </select>
    </nav>
  );
};

export default Header;
