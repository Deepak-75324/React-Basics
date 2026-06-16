import { useState } from 'react'
// import ReactDOM from "react-dom/client";
// import { BrowserRouter } from "react-router";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import Home from './components/Home/Home'
import { Outlet, Link } from "react-router-dom"



function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header />
    <Outlet /> {/* dynamically change */}
    <Footer />
    </>
  )
}

export default App
