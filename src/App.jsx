import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './Components/NavBar.jsx'
import Home from './Sections/Home/Home'

function App() {
  const [count, setCount] = useState(0)

  return (
 <div className='overflow-hidden'> 
  <NavBar/>
  <Home/>
 </div>
  )
}

export default App
