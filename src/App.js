import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css';
import Home from './Home';
import Main from './Main'

export default function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/app" element={<Main />} />
        </Routes>
      </div>
    </Router>
  )
}


