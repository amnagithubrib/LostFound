
// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home';
import Hotel from './Hotel'; // Adjust the import path as needed
import './App.css';
import Lostform from './Lostform';
import Submitform from './Submitform';
import Report from './Report';
import Login from './Login';
import Signin from './Signin';
// import Report from './Report';
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/hotel-service" element={<Hotel/>} />
        <Route path="/lost" element={<Lostform/>} />
        <Route path="/submitform" element={<Submitform/>} />
        <Route path="/report" element={<Report/>} />
        <Route path="/login" element={<Login/>} />
        <Route path="/signin" element={<Signin/>} />
      </Routes>
    </Router>
  );
}

export default App;
