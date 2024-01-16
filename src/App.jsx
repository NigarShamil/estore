import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Container from './components/Container/Container'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar />
      <Container />
    </>
  )
}

export default App
