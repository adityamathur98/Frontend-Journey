import { useState } from "react";

import LanguageContext from "./context/languageContext";

import Header from "./components/Header";
import LandingSection from "./components/LandingSection";
import FeaturesSection from "./components/FeaturesSection";

import "./App.css";

const App = () => {
  const [activeLanguage, setActiveLanguage] = useState("EN");

  return (
    <LanguageContext.Provider
      value={{
        activeLanguage,
        changeLanguage: setActiveLanguage,
      }}>
      <Header />
      <LandingSection />
      <FeaturesSection />
    </LanguageContext.Provider>
  );
};

export default App;
