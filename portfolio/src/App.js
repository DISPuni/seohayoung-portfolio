// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartLoading from './Loadings/StartLoading';
import Home from './Pages/Home';
import AboutLoading from './Loadings/AboutLoading';
import About from './Pages/About';
import Blog from './Loadings/Blog';
import FashionLoading from './Loadings/FashionLoading';
import MediaLoading from './Loadings/MediaLoading';
import VisualLoading from './Loadings/VisualLoading';

export default function App() {
  return (
    <Router basename="/seohayoung-portfolio">
      <Routes>
        <Route path="/" element={<StartLoading />} />
        <Route path="/toAbout" element={<AboutLoading/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fashion" element={<FashionLoading />} />
        <Route path="/media" element={<MediaLoading />} />
        <Route path="/visual" element={<VisualLoading />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
