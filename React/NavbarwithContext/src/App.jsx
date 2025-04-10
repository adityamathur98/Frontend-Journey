import { Navigate, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

import themeContext from "./context/themeContext";
import { useState } from "react";

const App = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prevTheme) => !prevTheme);
  };
  return (
    <>
      <themeContext.Provider value={{ isDarkTheme, toggleTheme }}>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </themeContext.Provider>
    </>
  );
};

export default App;
