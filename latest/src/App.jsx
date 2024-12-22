import {useState} from "react"
import React from "react"
import './App.css'

function App() {
 
  return (
    <>
      <HeaderWithRender/>
      <Header title="shubham2"/>
    </>
  )
}
function HeaderWithRender(){
  const [title,setTitle] = useState("my name is shubham")

  function rerender(){
    setTitle("my name is"+ Math.random());
  }
  return <div>
     <button onClick={rerender}>click me to change the title</button>
     <Header title={title}/>
  </div>
}


const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>

})

export default App
