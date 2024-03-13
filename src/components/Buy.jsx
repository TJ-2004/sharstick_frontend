import React from "react";
import pic from "../svgtopng/hero1.png";
const Buy = () => {
    const handleBuy = ()=>{
        console.log("Hello");
    }
  return (
    <div >
      <div className="flex flex-row justify-around my-10">
        <div className="bg-red-500 rounded-lg mx-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>

        <div className="bg-red-500 rounded-lg mx-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>

        <div className="bg-red-500 rounded-lg mx-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>

        <div className="bg-red-500 rounded-lg mr-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>

      <div className="flex flex-row justify-around my-10">
        <div className="bg-red-500 rounded-lg mx-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>

        <div className="bg-red-500 rounded-lg mx-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>

        <div className="bg-red-500 rounded-lg mx-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>

        <div className="bg-red-500 rounded-lg mr-4">
          <div className="bg-blue-500 rounded-lg mb-4">
            <img src={pic} alt="jr" className="rounded-lg" />
          </div>
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:shadow-outline"
          onClick={handleBuy}>
            Buy
          </button>
        </div>
      </div>
    </div>
  );
};

export default Buy;
