import {act, useState} from "react";
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import './index.css'

function App() {
    const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className='flex w-full h-screen'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='container'>
          <header>
              <Header />
          </header>
          {activeTab === "Dashboard" && <p>Hello</p>}
      </div>
    </div>
  )
}

export default App
