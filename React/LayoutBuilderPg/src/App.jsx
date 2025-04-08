import { useState } from "react";
import ConfigurationContext from "./context/ConfigurationContext";

import ConfigurationController from "./components/ConfigurationController";
import Layout from "./components/Layout";

const App = () => {
  const [showContent, setShowContent] = useState(true);
  const [showLeftNavbar, setShowLeftNavbar] = useState(true);
  const [showRightNavbar, setShowRightNavbar] = useState(true);

  const onToggleShowContent = () => {
    setShowContent((prev) => !prev);
  };

  const onToggleShowLeftNavbar = () => {
    setShowLeftNavbar((prev) => !prev);
  };

  const onToggleShowRightNavbar = () => {
    setShowRightNavbar((prev) => !prev);
  };

  return (
    <ConfigurationContext.Provider
      value={{
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      }}>
      <div className="flex flex-col min-h-screen ">
        <ConfigurationController />
        <Layout />
      </div>
    </ConfigurationContext.Provider>
  );
};

export default App;
