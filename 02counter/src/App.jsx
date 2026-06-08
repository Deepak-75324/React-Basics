import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {
  let [Count, setCount] = useState(0)
  const AddCount = () => {
    setCount(Count + 1) // increase by 1
    setCount(Count => Count + 1) // increase by 1 using callback function, this is the correct way to update state when you want to use the previous state value
    setCount(Count => Count + 1)
    setCount(Count => Count + 1)
    setCount(Count => Count + 1)
    console.log(Count);
  }

  const SubtractCount = () => {
    setCount(Count - 1)
    console.log(Count);
  }

  return (
    <>
      <div>
        <h1>Counter App</h1>
        <h3>Counter: {Count}</h3>
        <button onClick = {AddCount} className="btn">Increment</button>
        <button onClick = {SubtractCount} className="btn">Decrement</button>
      </div>
    </>
  )
}

export default App
