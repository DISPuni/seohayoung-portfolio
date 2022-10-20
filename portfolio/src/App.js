// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Start from './Loadings/Start';
import Home from './Pages/Home';
import Logo from './Loadings/Logo';
import Blog from './Loadings/Blog';
import FashionLoading from './Loadings/FashionLoading';
import MediaLoading from './Loadings/MediaLoading';
import VisualLoading from './Loadings/VisualLoading';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />} />
        <Route path="/logo" element={<Logo />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/fashion" element={<FashionLoading />} />
        <Route path="/media" element={<MediaLoading />} />
        <Route path="/visual" element={<VisualLoading />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}
