import React, {useState} from "react";
const Organize = () => {
    const [nfts, setNfts] = useState("");
    const [showName, setShowName] = useState("");
    const [showPrice, setShowPrice] = useState("");
    const [image, setImage] = useState(null);
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
          setImage(e.target.result);
        };
        reader.readAsDataURL(file);
      }
    };
  
    return (
      <div className="max-w-md mx-auto mt-10 p-6 bg-white border rounded-md shadow-md">
        <h2 className="text-lg font-semibold mb-4">Create New Show</h2>
        <form>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="nfts">
              No of NFTs
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="nfts"
              type="number"
              placeholder="Enter number of NFTs"
              value={nfts}
              onChange={(e) => setNfts(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="showName">
              Name of Show
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="showName"
              type="text"
              placeholder="Enter name of the show"
              value={showName}
              onChange={(e) => setShowName(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="showPrice">
              Price of Show
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="showPrice"
              type="number"
              placeholder="Enter price of the show"
              value={showPrice}
              onChange={(e) => setShowPrice(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="image">
              Photo
            </label>
            <input
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="image"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
            />
          </div>
        </form>
        {image && (
          <div className="mt-4">
            <h3 className="text-lg font-semibold mb-2">Preview:</h3>
            <img src={image} alt="Uploaded" className="max-w-full h-auto" />
          </div>
        )}
      </div>
    );
  };
  
  
  export default Organize;
  