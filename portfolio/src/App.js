// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartLoading from './Loadings/StartLoading';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Fashion from './Pages/Fashion';
import Visual from './Pages/Visual'
import Media from './Pages/Media';

export default function App() {
  return (
    <Router basename="/seohayoung-portfolio">
      <Routes>
        <Route path="/" element={<StartLoading />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/media" element={<Media />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
