import React, { useState } from 'react'
import logo from './logo.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <header className="App-header">
        <h1>Hello vite-sandbox</h1>
		<h2>v3</h2>
        <div className="sandbox-box">
          <button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </button>
        </div>
      </header>
    </div>
  )
}

export default App
