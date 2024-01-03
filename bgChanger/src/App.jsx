import { useState } from "react";
import "./App.css";
import BgChanger from "./BgChanger";

function App() {
  // const colors = [
  //   "blue",
  //   "green",
  //   "red",
  //   "indigo",
  //   "white",
  //   "black",
  // ];
  // const [bgColor, setBgColor] = useState(colors[0]);
  //   const changeColor = (col)=>{
  //     console.log(col+"-500")
  //     // colors.filter(color=>color == color)
  //     setBgColor(col);
  //   }
  return (
    // <div className={`w-full h-screen  bg-${bgColor==="white"?"white":bgColor==="black"?"black":bgColor + "-500"}`}>
    //   <h1 className=" h-auto text-center rounded-md bg-white text-2xl font-bold text-blue-800 w-[80%] m-auto relative bottom-[-90%]">
    //     Jai Siya Ram{" "}
    //   </h1>
    //   <ul  className=" h-auto text-center rounded-md bg-white text-md font-semibold text-white w-[60%] m-auto flex justify-around p-1 shadow outline  ">{
    //     colors.map(col=> {
    //       return <li key={col.toString()} onClick={()=>changeColor(col)} className={`
    //       cursor-pointer hover:bg-indigo-500  bg-${col}-700 text-${col==="black"?"white":null}  rounded-md px-2 py-1 shadow
    //       `}>{col}</li>
    //     })
    //     }</ul>
    // </div>
    <BgChanger/>
  );
}

export default App;
