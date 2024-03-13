import React, { useState } from "react";
import Signup from "./Signup";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login1 = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleClickApi = async () => {
    axios.defaults.headers.post["Access-Control-Allow-Origin"] = "*";
    axios
      .post("http://192.168.252.253:8080/auth/login", {
        header : 'Access-Control-Allow-Methods: GET, PUT, POST, DELETE, OPTIONS'
      },
      {
        username: username,
        password: password,
      })
      .then(
        (response) => {
          console.log(response);
        },
        (error) => {
          console.log(error);
        }
      );
  };
  const handleConnectMetaMask = async () => {
    try {
      if (typeof window.ethereum !== "undefined") {
        const accounts = await window.ethereum.request({
          method: "eth_requestAccounts",
        });
        alert("MetaMask connected successfully!");
        console.log(accounts);
      } else {
        alert("MetaMask extension not detected. Please install MetaMask.");
      }
    } catch (error) {
      console.error(error);
      alert("Failed to connect with MetaMask. Please try again.");
    }
  };
  const handleClick = () => {
    navigate("/signup");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    console.log("Username:", username);
    console.log("Password:", password);
  };
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8  bg-red-500 ">
      <div className="max-w-md w-full space-y-8">
        <div>
          <h2 className="mt-6 text-center text-5xl font-extrabold text-gray-900">
            Login
          </h2>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="username" className="sr-only">
                Username
              </label>
              <input
                id="username"
                name="username"
                type="text"
                autoComplete="username"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="text-sm">
              <button
                type="button"
                onClick={handleConnectMetaMask}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Connect with MetaMask
              </button>
            </div>
            <div className="text-sm">
              <button
                type="button"
                onClick={handleClick}
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Don't have an account? Sign Up
              </button>
            </div>
          </div>

          <div>
            <button
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={handleClickApi}
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <svg
                  className="h-5 w-5 text-indigo-500 group-hover:text-indigo-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 12a2 2 0 100-4 2 2 0 000 4z"
                    clipRule="evenodd"
                  />
                  <path
                    fillRule="evenodd"
                    d="M4 8V7a4 4 0 118 0v1h2a1 1 0 011 1v8a1 1 0 01-1 1H4a1 1 0 01-1-1V9a1 1 0 011-1h2zm2-5a2 2 0 00-2 2v1h12V5a2 2 0 00-2-2H6z"
                    clipRule="evenodd"
                  />
                </svg>
              </span>
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login1;
