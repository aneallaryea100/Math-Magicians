import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import NavBar from './component/NavBar';
import Home from './component/Home';
import Qoutes from './component/Qoutes';

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Calculator" element={<Calculator />} />
        <Route path="/Qoutes" element={<Qoutes />} />
      </Routes>
    </>
  );
}

export default App;
