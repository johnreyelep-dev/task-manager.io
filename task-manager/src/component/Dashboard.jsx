import useTasks from '../hooks/useTask.jsx';
import {useState} from "react";

export default function Dashboard() {
    const { tasks, addTask} = useTasks();
    const [title, setTitle] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()) return;
        addTask({ title })
        setTitle("");
    }

    return (
        <div className='w-full flex flex-col gap-5 transition-all duration-300 ease-linear'>
            <div className='bg-card w-full h-20 flex justify-between p-5 rounded-2xl shadow-[0_0_3px_rgba(139,92,246,1)]'>
                <span className='text-4xl font-semibold'>Today's Task</span>
                <button className='text-2xl cursor-pointer border border-card px-4 rounded-lg transition-all duration-300 ease-linear
                hover:bg-card'>Schedule</button>
            </div>
        </div>
    );
}