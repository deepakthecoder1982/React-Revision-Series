import { useState } from 'react'
import './App.css'
import {CurrencyInformation} from './hooks/useCurrenctyHookInfo'
function App() {
  // const [data,setData] = ('usd');
   const [data] = CurrencyInformation("usd")
   console.log(data)
  return (
    <div className='bg-gradient-to-r from-cyan-500 to-blue-500 h-screen '>
      {/* <h1 className='text-[5rem] text-purple-950 border w-fit shadow shadow-white bg-white p-2  font-bold m-auto text-center rounded '>Hello Mom</h1> */}
      
    </div>
  )
}

export default App
