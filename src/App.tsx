import React from 'react';
import './App.css';
import Home from './components/Home';
import {Navigate, Route, BrowserRouter as Router, Routes} from 'react-router-dom';
import AddToWardrobe from './components/AddWardrobe';
import { postNewItem } from './APIservices';
import WhatDo from './components/WhatDo';

function App() {
  return (
    <div className="App">
      <Router>
      <div>header lol</div>
      <WhatDo/>
      <Routes>
        
      </Routes>
      </Router>
    </div>
  );
}

export default App;
