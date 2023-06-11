import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './components/Device/Device'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Device></Device>
    </div>
  )
}

export default App
