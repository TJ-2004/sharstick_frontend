import React  from "react";
import { useNavigate } from "react-router-dom";
import Organize from "./Organize";
const Header = () => {
    const navigate = useNavigate();
    const handleClick = ()=>{
        navigate("/organize");
    }
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
    return (
        <div >
            <header className="bg-gray-800 text-white py-4">
                <div className="container mx-auto flex justify-between items-center">
                    <div>
                        <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleClick}>
                            Organize
                        </button>
                    </div>
                    <div>
                        <button className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                        onClick={handleConnectMetaMask}>
                            Connect Wallet
                        </button>
                    </div>
                </div>
            </header>

        </div>
    )
}
export default Header