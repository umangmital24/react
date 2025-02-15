import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  //let counter = 5
  let [counter, setCounter] = useState(5)
  //setcounter take the value of counter and set it to the new value
  const addValue = () => { 
    if(counter <20){
    counter = counter + 1
    setCounter(counter)
   }
  }
   const removeValue = () => { 
    if(counter >0){
    counter = counter - 1
    setCounter(counter)
   }
  }
  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter Value: {counter}</h2>

    <button onClick={addValue}>Add Value</button>
    <br />
    <button onClick={removeValue}>remove value</button>
    </>
  )
}

export default App
