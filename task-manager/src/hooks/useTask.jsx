import { useLocalStorage } from "./useLocalStorage.jsx";
import { createContext, useContext } from "react";

const TaskContext = createContext();

export function TaskProvider({ children }){
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

    const removeTask = (id) => {
        setTasks((prev) => prev.filter((t) => t.id !== id));
    }

    const toggleTask = (id) => {
        setTasks((prev) => {
            prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task));
        });
    }

    return (
        <TaskContext.Provider value={ {tasks, addTask, removeTask, toggleTask }} >
            {children}
        </TaskContext.Provider>
    );
}

export function useTask(){
    const context = useContext(TaskContext);
    if(!context) {
        throw new Error("useTask must be used within task");
    }
    return context;
}