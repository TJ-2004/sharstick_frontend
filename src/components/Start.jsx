import { useState } from "react";
import React from "react";
// import pictures1 from "../svgtopng/hero1.png";
// import pictures2 from "../svgtopng/hero2.png";
// import pictures3 from "../svgtopng/hero3.png";
// import pictures4 from "../svgtopng/hero4.png";
// import pictures5 from "../svgtopng/hero5.png";
// import pictures6 from "../svgtopng/hero6.png";
// import pictures7 from "../svgtopng/hero7.png";
// import pictures8 from "../svgtopng/hero8.png";
// import pictures9 from "../svgtopng/hero9.png";
// import pictures10 from "../svgtopng/hero10.png";
import pictures from "../svgtopng/background.png";

import Login1 from "./Login1";
function LoginForm() {
  return (
    <div>
    <div className="min-h-screen relative">
      <img src={pictures} className="absolute top-0 left-0 w-full h-full object-cover" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white text-center">
        <h1 className="text-9xl font-bold">ShardTicks</h1>
        <h2 className="text-black font-bold text-2xl ">Unlock the future of events with NFT Tickets.</h2>
      </div>
    </div>
    <Login1 />
  </div>
  );
}

export default LoginForm;
