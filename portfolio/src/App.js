// import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Start from './Loadings/Start';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Start />}>
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="about" element={<About />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="*" element={<NoMatch />} /> */}
        </Route>
      </Routes>
    </Router>
  );
}
