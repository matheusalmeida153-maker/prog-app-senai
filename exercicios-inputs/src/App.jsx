import { useState } from 'react'
import Pneu from './components/Pneu'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <h1>Exercícios</h1>
    <hr/>
    <Pneu/>
    <hr/>
    </>
  )
}

export default App
