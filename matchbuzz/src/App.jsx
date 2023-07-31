// src/App.js
import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './screens/Home';
import Landing from './screens/Landing';

const App = () => {
  return (
    <Routes>

        <Route exact path="/" element={<Landing />} />
        <Route path="/home" element={<Home />} />

    </Routes>
  );
};

export default App;
