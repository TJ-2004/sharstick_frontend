import React from 'react'
import Login from './components/Start'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Organize from './components/Organize';
const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/*" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />
      <Route path="/organize" element={<Organize />} />


    </Routes>
  )
}

export default App
