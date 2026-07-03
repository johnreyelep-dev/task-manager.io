import {useState} from "react";
import Header from './pages/Header.jsx';
import Sidebar from './pages/Sidebar.jsx';
import Dashboard from './component/Dashboard.jsx';
import Task from './pages/Task.jsx';
import {TaskProvider} from "./hooks/useTask.jsx";
import './index.css'

function App() {
    const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <TaskProvider >
        <div className='flex w-full h-screen'>
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
            <div className='w-[65%] px-5'>
                <header>
                    <Header />
                </header>
                {activeTab === "Dashboard" && <Dashboard />}
                {activeTab === "Task" && <Task />}
            </div>
        </div>
    </TaskProvider>
  )
}

export default App
