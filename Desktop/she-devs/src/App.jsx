import { useState } from 'react'
import Navbar from './Components/Navbar'
import Homepage from './Pages/Homepage'



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Homepage/>
    </>
  )
}

export default App
