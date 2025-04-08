import React from "react";

const LanguageContext = React.createContext({
  activeLanguage: "EN",
  changeLanguage: () => {},
});

export default LanguageContext;
