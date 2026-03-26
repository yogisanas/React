import React from "react";
import { useState } from "react";

function UseState() {
    const [counter, setCounter] = useState(10);

    const addValue = () => {
        if (counter < 20)  setCounter(counter + 1)
    }

    const message = () => {
        if (counter >= 20) return "You can't add more than 20"
        
        else if (counter <= 0) return "You can't remove less than 0"
    }

  return (
    <div
      className="w-full h-screen flex justify-center items-center bg-cover bg-center"
      style={{
        backgroundImage:
          "url('https://images.pexels.com/photos/36552431/pexels-photo-36552431.jpeg')",
      }}
    >
      {/* Glass Card */}
      <div className="bg-white/20 backdrop-blur-lg shadow-xl rounded-2xl p-10 w-[320px] text-center border border-white/30">
        
        <h1 className="text-2xl font-bold text-gray-800 mb-4">
          useState Demo
        </h1>

        <h2 className="text-lg text-gray-700 mb-6">
          Counter Value: <span className="font-semibold">{counter}</span>
        </h2>

        {/* Buttons */}
        <div className="flex justify-center gap-4">
          <button onClick={addValue}
           className="bg-green-500 hover:bg-green-600 text-white px-5 py-2 rounded-lg transition duration-200 shadow-md">
            Add
          </button>

          <button onClick={() => {if(counter > 0) setCounter(counter - 1)}}
           className="bg-red-500 hover:bg-red-600 text-white px-5 py-2 rounded-lg transition duration-200 shadow-md">
            Remove
          </button>
        </div>
        <h2 className="text-red-600 mt-4">{message()}</h2>
      </div>
    </div>
  );
}

export default UseState;