import { useState } from 'react';
import Header from './component/Header.jsx';
import './index.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <header>
        <Header />
      </header>
    </div>
  )
}

export default App
