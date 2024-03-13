import React from 'react'
import Login from './components/Start'
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Home />} />
      <Route path="/*" element={<Login />} />
      <Route path="/signup" element={<Signup/>} />

    </Routes>
  )
}

export default App