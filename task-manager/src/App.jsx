import {useState} from "react";
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import Dashboard from './component/Dashboard.jsx';
import './index.css'

function App() {
    const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <div className='flex w-full h-screen'>
        <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      <div className='w-[65%] px-5'>
          <header>
              <Header />
          </header>
          {activeTab === "Dashboard" && <Dashboard />}
      </div>
    </div>
  )
}

export default App
