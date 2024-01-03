import React from 'react';
import './App.css'
import Chat from './chat'

function Practise(){
 return <h1>Hii I am there</h1>
}

const domChildren = {
  type: "a",
  props: {
    href: "https://www.google.com",
    target: "_blank",
  },
  childrens: "Visit the google",
};


const reactElement = React.createElement(
  domChildren.type,
  domChildren.props,
  domChildren.childrens,
)
function App() {

  return (
    <>
    <h1>This is React practise with Vite | Hii Deepak</h1>
    <Chat/>
    </>
    // Practise()
    // reactElement
    
    // domElement
  )
}

export default App
 