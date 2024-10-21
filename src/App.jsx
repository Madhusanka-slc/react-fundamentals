import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
// import DefComp from './components/Greet'
import {Greet} from './components/Greet'
import Welcome from './components/Welcome'

function App() {
  const [count, setCount] = useState(0)

  return (
   <dev>
       <Greet/>
       <Welcome/>
   </dev>
 
  )
}

export default App
