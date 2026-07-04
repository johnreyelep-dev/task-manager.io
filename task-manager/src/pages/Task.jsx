import { useTask } from "../hooks/useTask.jsx";
import { useState } from "react";
import Button from "../component/Button.jsx";

export default function Task(){
    const { tasks, addTask } = useTask();
    const [title, setTitle] = useState("");
    const [err, setErr] = useState("");

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
                <form onSubmit={handleSubmit} className='bg-card w-full h-20 rounded-2xl shadow-[0_0_3px_rgba(139,92,246,1)] p-3'>
                    <div className='w-full h-10 flex items-center justify-center gap-3  '>
                        <input type='text'
                               placeholder='Enter title'
                               onChange={(e) => setTitle(e.target.value)} value={title}
                               className="w-full h-10 border border-card rounded-md outline-none px-3 focus:border-secondary"/>
                        <Button type='submit' placeholder='Add Task'/>
                    </div>

                    {err && <p className='text-red-700'>{err}</p>}
                </form>
            </section>
            <section>
                <h3 className='subtitle text-2xl text-primary '>Pending</h3>
                <ul className={`grid xl:grid-cols-5 gap-5 px-3 py-5 overflow-x-auto`}>
                    {tasks.map((task, index) => (
                        <li key={index} className='h-40 p-3 rounded-2xl shadow-[0_0_3px_rgba(139,92,246,1)]'>
                            <span className=''>{task.title}</span>
                        </li>
                        ))}
                </ul>
            </section>
        </div>
    );
}