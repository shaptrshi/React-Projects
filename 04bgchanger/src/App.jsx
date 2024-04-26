import { useState } from "react"


function App() {
  const [color, setColor] = useState("olive")

  return (
    <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-3xl px-3 py-2">
          <button onClick = {()=> setColor("red")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "red"}}>Red</button>
          <button onClick = {()=> setColor("green")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "green"}}>Green</button>
          <button onClick = {()=> setColor("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick = {()=> setColor("teal")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "teal"}}>Teal</button>
          <button onClick = {()=> setColor("brown")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "brown"}}>Brown</button>
          <button onClick = {()=> setColor("pink")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "Pink"}}>Pink</button>
          <button onClick = {()=> setColor("black")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "Black"}}>Black</button>
          <button onClick = {()=> setColor("brown")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "Brown"}}>Brown</button>
          <button onClick = {()=> setColor("white")} className="outline-none px-4 py-1 rounded-full shadow-lg text-black" style={{backgroundColor: "White"}}>White</button>
          <button onClick = {()=> setColor("grey")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "Grey"}}>Grey</button>
          <button onClick = {()=> setColor("violet")} className="outline-none px-4 py-1 rounded-full shadow-lg text-white" style={{backgroundColor: "violet"}}>Violet</button>
        </div>
      </div>
    </div>
  )
}

export default App
