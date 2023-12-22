import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button className="bg-blue-500 shadow-lg shadow-blue-500/50 text-white" onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <br /><br />
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="text-3xl font-bold text-cyan-600 drop-shadow-lg">
        Click on the Vite and React logos to learn more
      </p>
      <br /><br />
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">Subscribe</button>
    </>
  )
}

export default App
