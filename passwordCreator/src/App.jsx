import { useState, useEffect, useRef } from "react";
import "./App.css";
// const randomstring = require("randomstring");

function App() {
  const [password, setPassword] = useState("AxPkl");
  const [length, setLength] = useState(5);
  const first = useRef();
  useEffect(() => {
    let charachter = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
    let index = 0;
    for (let i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 10 + i);

      while (index > 26) {
        index = index - 26;
      }
      result += charachter[index];
    }
    setPassword(result);
  }, [length, first.current]);

  const handleCopy = async () => {
    first.current?.select();
    // console.log(first.current.value);
    // document.getElementById('copy').innerText = "Copping.."
    const copyElment = document.getElementById("copy");
    try {
      await navigator.clipboard.writeText(password);
      setTimeout(() => {
        copyElment.innerText = "Copy";
        copyElment.style.color = "white";
        copyElment.style.fontWeight = "500";
        first.current.blur();
      }, 1000);

      copyElment.innerText = "Copied!!";
      copyElment.style.color = "darkgreen";
      copyElment.style.fontWeight = "bold";
    } catch (err) {
      console.error(err);
    }
  };

  const handleChange = (e) => {
    const value = e.target.id;

    const isChecked = e.target.checked;
    if (!isChecked) {
      return false;
    }

    let charachterWithNumeric =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890";
    let charachterWithSpecialCharacter =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890!#%&;[]+-@{}/@";

    let activeString = charachterWithNumeric.split('').reverse().join('');
    
    if (value === "Charachters") {
      activeString = charachterWithSpecialCharacter.split('').reverse().join('');
    }
    console.log(activeString);
    let result = "";
    let index = 0;
    for (let i = 0; i < length; i++) {
      index = Math.floor(Math.random() * 10 + i);

      while (index > activeString.length) {
        index = index - activeString.length;
      }
      result += activeString[index];
      setPassword(result);
    }
  };

  return (
    <>
      <div className="text-white font-semibold text-xl bg-black w-full h-screen" >
        
        <h1 className="text-3xl p-2 text-center bg-gray-600 rounded shadow shadow-white ">Password generator</h1>
        <div
          id="container"
          className="flex flex-col  w-1/2 m-auto rounded-lg p-2 py-4 text-center relative top-10 bg-gray-900 border-none shadow-md shadow-black"
        >
          <div
            id="show"
            className="w-[95%] m-auto bg-white flex justify-between border-none rounded-lg outline-none my-3 "
          >
            <input
              id="display-pass"
              readOnly
              className="border-none border-black  text-orange-500 px-2 py-1 rounded w-full focus:text-blue-500 outline-none"
              type="text"
              value={password}
              ref={first}
            ></input>
            <button
              id="copy"
              className="border-none text-xl w-[fit] bg-blue-700 p-2 rounded-r-md"
              onClick={handleCopy}
            >
              Copy
            </button>
          </div>
          <div
            id="options"
            className="flex justify-left w-[99%] space-x-3 m-auto p-3 text-orange-500 my-3 flex-wrap"
          >
            <input
              type="range"
              value={length}
              onChange={(e) => setLength(e.target.value)}
              className=""
            />
            <p>Length ({length}) </p>
            <input type="checkbox" id="Numbers" onChange={handleChange} />{" "}
            <span>Numbers</span>
            <input
              type="checkbox"
              id="Charachters"
              onChange={handleChange}
            />{" "}
            <label>Charachters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
