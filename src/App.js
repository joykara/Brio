import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { AboutUs, Blog, ContactUs, Homepage, OurProcess, OurWork, Services } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/our-work" element={<OurWork />} />
        <Route path="/our-process" element={<OurProcess />} />
        <Route path="/our-services" element={<Services />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path="/blog" element={<Blog />}/>
      </Routes>
    </Router>
  );
}

export default App;
