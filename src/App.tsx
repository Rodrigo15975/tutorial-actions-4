import { useState } from "react";
import "./App.css"
function App() {
  const [count, setCount] = useState();
  return (
    <>
      <h1>Testing in dessarollo</h1>
      <h2>{count}</h2>
    </>
  )
}

export default App
