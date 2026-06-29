import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
let [counter , setCounter] = useState(0)
  const valueAdd =()=>{
    if(counter>=20)
    {
      setCounter(20);
    }
    else{
   counter = counter+1;
   setCounter (counter);
    }
}
 const valueRemove=()=>{
  if(counter<=0)
  {
    setCounter(0);
  }
  else{
  counter = counter -1;
  setCounter(counter)
  }
 }
  return (
    <>
     <h1>Counter Project</h1>
     <h3>counter value : {counter}</h3>
     <button onClick={valueAdd}
     >Add value : {counter}</button>
     <br />
     <button onClick={valueRemove}> onRemove value : {counter}</button>
    </>
  )
}
export default App
