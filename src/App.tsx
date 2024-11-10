import { useState } from "react"
import "./App.css"
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1>Testing in dessarollo</h1>
      <h2>{count}</h2>
      <button onClick={() => setCount(count + 1)}>+</button>
      <h1>Contador</h1>
    </>
  )
}

export default App
