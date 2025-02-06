import React, { useState } from 'react';
import './index.css'; 

function App() {
  const [colour, setColour] = useState('black');

  return (
    <>
      <div className="w-full h-screen duration-1000" style={{ backgroundColor: colour }}>
        
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">

          <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-black px-3 py-4 rounded-lg"> 
             
            <button onClick={()=>setColour("red")} className="outline-none px-4 py-1 rounded text-white hover:px-5 py-2"   style={{ backgroundColor: "red" }} 
            >Red</button> 
            
            <button onClick={()=>setColour("purple")} className="outline-none px-4 py-1 rounded text-white hover:px-5 py-2"   style={{ backgroundColor: "purple" }}>Purple</button> 
            
            <button onClick={()=>setColour("black")} className="outline-none px-4 py-1 rounded text-white hover:px-5 py-2"   style={{ backgroundColor: "black" }}>Black</button> 
            
            <button onClick={()=>setColour("green")}className="outline-none px-4 py-1 rounded text-white hover:px-5 py-2"   style={{ backgroundColor: "green" }}>Green</button> 
            
          </div>
        </div> 
      </div> 
    </>
  );
}

export default App;
