import React from "react";

const themeContext = React.createContext({
  isDarkTheme: false,
  toggleTheme: () => {},
});

export default themeContext;
