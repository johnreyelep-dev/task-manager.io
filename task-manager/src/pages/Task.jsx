import { useTask } from "../hooks/useTask.jsx";
import { useState } from "react";
import Button from "../component/Button.jsx";
import { faTrashCan } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function relativeTime(date) {
    const diffMs = Date.now() - new Date(date).getTime();
    const mins = Math.round(diffMs / 60000);
    if (mins < 1) return 'just now';
    if (mins < 60) return `${mins}m ago`;
    const hrs = Math.round(mins / 60);
    if (hrs < 24) return `${hrs}h ago`;
    const days = Math.round(hrs / 24);
    return `${days}d ago`;
}

export default function Task(){
    const { tasks, addTask, toggleTask, removeTask } = useTask();
    const [title, setTitle] = useState("");
    const [err, setErr] = useState("");

    const pendingTask = tasks.filter((task) => !task.done);

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()){
            setErr("Please enter title");
            return;
        }
        addTask({title})
        setTitle("");
    }

    return (
        <div className='flex flex-col gap-10'>
            <section>
                <form onSubmit={handleSubmit} className='w-full h-20 rounded-2xl shadow-[0_0_3px_rgba(139,92,246,1)] p-3'>
                    <div className='w-full h-10 flex items-center justify-center gap-3  '>
                        <input type='text'
                               placeholder='Enter title'
                               onChange={(e) => setTitle(e.target.value)} value={title}
                               className="bg-card w-full h-10 border border-card rounded-md outline-none px-3 focus:border-secondary"/>
                        <Button type='submit' placeholder='Add Task'/>
                    </div>

                    {err && <p className='text-red-700'>{err}</p>}
                </form>
            </section>
            <section>
                <div className='flex justify-between items-center gap-3'>
                    <h3 className='text-2xl text-primary '>Pending</h3>
                    <div className='bg-card w-full h-0.5 '></div>
                    <div className='text-nowrap'>{pendingTask.length >= 1 ? `${pendingTask.length} ${pendingTask.length === 1 ? 'task' : 'tasks'}`: "0 task" }</div>
                </div>
                <ul className={`grid xl:grid-cols-5 gap-5 px-3 py-5 overflow-x-auto`}>
                    {pendingTask.map((task) => (
                        <li key={task.id} className='h-35 flex flex-col justify-between rounded-md shadow-[0_0_3px_rgba(139,92,246,1)] p-3'>
                            <div className='flex flex-col'>
                                <span className='text-xl'>{task.title}</span>
                                <span className='text-md'>{relativeTime(task.createdAt)}</span>
                            </div>
                            <div className='w-full flex justify-between gap-2'>
                                <button onClick={() => toggleTask(task.id)} className='w-full border border-card p-1 rounded-md cursor-pointer transition-colors duration-300 ease-in hover:bg-card'>Done</button>
                                <button onClick={() => removeTask(task.id)} className='group border border-card p-1 rounded-md cursor-pointer transition-colors duration-300 ease-in hover:bg-red-500'>
                                    <FontAwesomeIcon icon={faTrashCan} className='text-purple-500 transition-colors duration-300 ease-in group-hover:text-white '/>
                                </button>
                            </div>
                        </li>
                    ))}
                    {pendingTask.length === 0 && <span className='text-nowrap'>There is no task to-do right now.</span>}
                </ul>
            </section>
        </div>
    );
}