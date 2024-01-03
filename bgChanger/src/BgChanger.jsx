import React, { useState } from 'react'

function BgChanger() {
    const [color,setColor] = useState("#ECEFF1")
  return (
    <div className='w-full h-screen' style={{background:color}}>
        <div className="flex flex-wrap w-[70%] bg-white rounded-md m-auto relative bottom-[-80%] p-2 border justify-between shadow shadow-gray-400 transition ease-in-out delay-150 duration-700">
            <div className="flex flex-wrap w-full justify-evenly ">
                <button className='px-3 py-1 text-lg rounded-md text-white font-semibold shadow shadow-black' style={{background:"red"}} onClick={()=>setColor("red")}>Red</button>
                <button className='px-3 py-1 text-lg rounded-md text-black font-semibold shadow shadow-black' style={{background:"yellow"}} onClick={()=>setColor("yellow")}> Yellow</button>
                <button className='px-3 py-1 text-lg rounded-md text-white font-semibold shadow shadow-black' style={{background:"blue"}} onClick={()=>setColor("dodgerblue")}>Blue</button>
                <button className='px-3 py-1 text-lg rounded-md text-white font-semibold shadow shadow-black' style={{background:"indigo"}} onClick={()=>setColor("indigo")}>Indigo</button>
                <button className='px-3 py-1 text-lg rounded-md text-white font-semibold shadow shadow-black' style={{background:"green"}} onClick={()=>setColor("green")}>Green</button>
                <button className='px-3 py-1 text-lg rounded-md text-black font-semibold border shadow shadow-black' style={{background:"#fff"}} onClick={()=>setColor("#fff")}>White</button>
                <button className='px-3 py-1 text-lg rounded-md text-white font-semibold shadow shadow-black' style={{background:"#000"}} onClick={()=>setColor("black")}>Black</button>
            </div>
        </div>
    </div>
  )
}

export default BgChanger