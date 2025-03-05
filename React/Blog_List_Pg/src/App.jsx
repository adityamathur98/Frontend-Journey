import { Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <div className="flex items-center justify-center w-screen">
      <div className="flex flex-col w-[80%] border-4 border-[#551e53] rounded-[12px] max-sm:w-[85%]">
        <Header />
        <div className="flex justify-center items-center flex-grow">
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route exact path="/about" element={<About />} />
            <Route exact path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

export default App;
