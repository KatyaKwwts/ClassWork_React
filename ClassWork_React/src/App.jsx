import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Components/Header/Header'
import Footer from './Components/Footer/Footer'
import Full from './Components/FullCalculate/Full/Full.jsx'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
    <Header/>

    <Full/>

    <Footer/>
    </div>
  )
}

export default App
