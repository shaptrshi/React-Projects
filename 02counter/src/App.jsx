import { useState } from 'react'
import './App.css'

function App() {
  
  // Define a state variable called "counter" with an initial value of 0  and setCounter is the function to update it
  let [counter, setCounter] = useState(0)

  const addValue = () => {
    if(counter<50) {
    setCounter(counter + 1)
    }
  }

  const removeValue = () => {
    if(counter > 0) {
    setCounter(counter-1)
    } 
  }

  return (
    <>
      <h1>Counter</h1>                        
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add Value</button>
      <br />
      <button onClick={removeValue}>Remove Value</button>
    </>
  )
}

export default App
