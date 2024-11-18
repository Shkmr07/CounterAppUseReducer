import {useState } from 'react'
import { Context } from './components/Context'
import Navbar from './components/Navbar'
import CounterLogic from './components/CounterLogic'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <Context>
      <Navbar />
      <CounterLogic />
    </Context>
  )
}

export default App
