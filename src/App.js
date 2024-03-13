import React, { createContext } from "react";
import Login from "./components/Start";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./components/Home";
import Signup from "./components/Signup";
import Organize from "./components/Organize";
import Login1 from "./components/Login1";
export const Context = createContext();

const App = () => {
  return (
    <Context.Provider 
    >
      <Routes>
        <Route path="/*" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/organize" element={<Organize />} />
        {/* <Route path="/home" element={<Home username={userNAME} />} /> */}
      </Routes>
    </Context.Provider>
  );
};

export default App;
