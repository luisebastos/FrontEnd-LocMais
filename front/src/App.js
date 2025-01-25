import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/login/login';
import Home from './components/home/home'
import Calendario from './components/calendario/calendario'

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="home" element={<Home />} />
      <Route path="calendario" element={<Calendario />} />
    </Routes>
  );
};

export default App;