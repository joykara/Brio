import './App.css';
import {BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Homepage, OurWork } from './pages';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" exact element={<Homepage />} />
        <Route path="/our-work" element={<OurWork />} />
      </Routes>
    </Router>
  );
}

export default App;
