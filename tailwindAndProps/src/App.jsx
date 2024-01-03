import "./App.css"
import { InfoBanner } from "./components/Alert";

function App() {
  const messages ={
    warning: "You are being restricted from using this application",
    success: "You are authorized to use this application",
    pending: "Waiting for server to respond, Please wait..."
  };
  const status = ["warning", "success", "pending"]
  return <>
  <h1 className="text-white bg-green-600 p-2 rounded-md mb-3">Tailwind & Props Learning</h1>
  {/* <ProductOverviewOne/> */}
  {/* <SignUpOne/> */}
  {
    status.map((stat,index)=>{

     return index===0? <InfoBanner status={stat} message={messages[stat]}/>:null
    // return  <InfoBanner status={stat} message={messages[stat]}/>
    })
  }
  </>;
}

export default App;
