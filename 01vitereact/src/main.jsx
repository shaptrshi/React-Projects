import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


function myApp() {     // the function can be directly declared inside the main.jsx document instead of just in different document
  return(
    <div><h1>Helllo</h1></div>
  )
}

const anotherElement = (
  <a href="https://google.com" target="_blank">Visit Google</a>  //representation to react element in customreact.js
)

const anotherUser = "chai aur react"   //variable

const reactElement = React.createElement (
  'a',
  {href: 'https://google.com', target: '_blank'},               //correct and actual format for the reactElement in customreact.js
  'Click me to visit google',
  anotherUser                                                   //variable injection
)



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
