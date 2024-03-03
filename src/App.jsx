import { useState } from "react";
import "./App.css";

function App() {
  var [counter, setCounter] = useState(0);

  var addvalue = () => {
    setCounter(counter + 1);
  };

  var removevalue = () => {
    if (counter <= 0) setCounter(0);
    else setCounter(counter - 1);
  };

  var restartvalue = () => {
    setCounter(0);
  }

  return (
    <>
      <div className="w-full h-screen bg-black flex items-center justify-center flex-col">
        <h1 className="text-center text-white text-4xl font-bold uppercase mt-7">Counting App</h1>
        <div className="w-full h-full flex gap-5 items-center justify-center">
        <button
          onClick={removevalue}
          className="px-5 py-2 font-bold text-3xl text-white border border-bg-white rounded-lg"
        >
          -
        </button>
        <div className="px-7 py-3 text-lg font-semibold text-white border-2 border-bg-white rounded-md">
          {counter}
        </div>
        <button
          onClick={addvalue}
          className="px-5 py-2 font-bold text-4xl text-white border border-bg-white rounded-lg"
        >
          +
        </button>

      </div>
        <button 
          onClick={restartvalue}
          className="text-white border border-bg-white px-3 py-2 rounded-lg absolute top-[70%]">Restart</button>
      </div>
    </>
  );
}

export default App;
