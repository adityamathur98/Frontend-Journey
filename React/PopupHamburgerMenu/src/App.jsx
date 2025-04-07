import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import NotFound from "./components/NotFound";

const App = () => (
  <>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/not-found" element={<NotFound />} />
      <Route path="*" element={<Navigate to="/not-found" />} />
    </Routes>
  </>
);

export default App;
