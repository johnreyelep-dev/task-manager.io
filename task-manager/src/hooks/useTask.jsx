import { useLocalStorage } from "./useLocalStorage.jsx";

export default function useTask(){
    const [tasks, setTasks] = useLocalStorage("task", []);

    const addTask = (taskData) =>{
        const newTask = {
            id: crypto.randomUUID(),
            title: taskData.title,
            done: false,
            createdAt: Date.now(),
            ...taskData,
        }
        setTasks((prev) => [...prev, newTask]);
    }



    return {tasks, addTask};
}