import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/Header";
import About from "./components/About";
import Contact from "./components/Contact";
import BlogsList from "./components/BlogsList";
import BlogItemDetails from "./components/BlogItemDetails";
import NotFound from "./components/NotFound";

import "./App.css";

const App = () => (
  <BrowserRouter>
    <Header />
    <Routes>
      <Route exact path="/" element={<BlogsList />} />
      <Route exact path="/about" element={<About />} />
      <Route exact path="/contact" element={<Contact />} />
      <Route exact path="/blogs/:id" element={<BlogItemDetails />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  </BrowserRouter>
);

export default App;
