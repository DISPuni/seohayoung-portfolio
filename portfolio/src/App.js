import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import StartLoading from './Loadings/StartLoading';
import Home from './Pages/Home';
import About from './Pages/About';
import Blog from './Pages/Blog';
import Fashion from './Pages/Fashion';
import Visual from './Pages/Visual'
import Media from './Pages/Media';
import BlogPost from './Pages/BlogPost/BlogPostHeader';
import FashionPost from './Pages/ServePost/FashionPostHeader'
import MediaPost from './Pages/ServePost/MediaPostHeader'
import VisualPost from './Pages/ServePost/VisualPostHeader';
import MobileNav from './Components/MobileNav';

import AboutLoading from './Loadings/AboutLoading';

export default function App() {
  return (
    <Router basename="/seohayoung-portfolio">
      <Routes>
        <Route path="/" element={<StartLoading />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About/>} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fashion" element={<Fashion />} />
        <Route path="/media" element={<Media />} />
        <Route path="/visual" element={<Visual />} />
        <Route path="/blog/:id" element={<BlogPost />} />
        <Route path="/fashion/:id" element={<FashionPost />} />
        <Route path="/media/:id" element={<MediaPost />} />
        <Route path="/visual/:id" element={<VisualPost />} />
        <Route path="/mobile" element={<MobileNav />} />
        <Route path="/testLoading" element={<AboutLoading />} />
      </Routes>
    </Router>
  );
}
