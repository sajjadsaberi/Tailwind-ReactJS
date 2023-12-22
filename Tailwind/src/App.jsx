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
        <p className="font-primary rtl"> 
        سلام ! برای ویرایش فایل ها به آدرس زیر مراجعه کنید :
        <br /><br />
        <code>src/App.jsx</code> 
        </p>
      </div>
      <p className="text-3xl font-bold text-cyan-600 drop-shadow-lg font-mono">
        Click on the Vite and React logos to learn more
      </p>
      <br /><br />
      <button className="bg-cyan-500 shadow-lg shadow-cyan-500/50 text-white">Subscribe</button>
      <br /><br />
      <table class="border-collapse border border-slate-400 w-96 h-40 justify-center items-center mx-auto mt-5">
  <thead>
    <tr>
      <th class="border border-slate-300 bg-gray-200 cursor-pointer">State</th>
      <th class="border border-slate-300 bg-gray-200 cursor-pointer">City</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td class="border border-slate-300 ...">Indiana</td>
      <td class="border border-slate-300 ...">Indianapolis</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Ohio</td>
      <td class="border border-slate-300 ...">Columbus</td>
    </tr>
    <tr>
      <td class="border border-slate-300 ...">Michigan</td>
      <td class="border border-slate-300 ...">Detroit</td>
    </tr>
  </tbody>
</table>
    </>
  )
}

export default App
