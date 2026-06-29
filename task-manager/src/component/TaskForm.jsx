import useTasks from '../hooks/useTask.jsx';
import {useState} from "react";

export default function TaskForm() {
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
            <div className='bg-card w-full h-50 p-5 rounded-2xl shadow-[0_0_3px_rgba(139,92,246,1)]'>
                <span className='text-4xl font-semibold'>Today's Task</span>
                <form onSubmit={handleSubmit}>
                    <input
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type='text'
                    placeholder='Enter title'/>
                    <input type='submit' placeholder='Add Task'/>
                </form>
            </div>
        </div>
    );
}