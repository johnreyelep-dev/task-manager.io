import { useTask } from "../hooks/useTask.jsx";
import { useLocalStorage} from "../hooks/useLocalStorage.jsx";
import { useState } from "react";

export default function Task(){
    const [title, setTitle] = useState("");
    const {addTask} = useTask();
    const { task } = useLocalStorage();
    const [err, setErr] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(!title.trim()){
            setErr("Please enter title");
            return;
        }
        addTask({title});
        setTitle("");
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type='text' placeholder='Add Task' onChange={(e) => setTitle(e.target.value)} value={title}/>
                <button type='submit'>Add Task</button>
                {err && <p>{err}</p>}
                //how to show task?
            </form>
        </div>
    );
}