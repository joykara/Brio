import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Homepage, OurProcess, OurWork } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-process" element={<OurProcess />} />
      </Routes>
    </Router>
  );
}

export default App;
