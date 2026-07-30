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
            deleted: false,
            deletedAt: Date.now(),
            ...taskData,
        }
        setTasks((prev) => [...prev, newTask]);
    }

    const removeTask = (id) => {
        setTasks((prev) => prev.map(task => task.id === id ? { ...task, deleted: true, deletedAt: Date.now() } : task));
    }

    const restoreTasks = (id) => {
        setTasks((prev) => prev.map((task) => task.id === id ? { ...task, deleted: false, deletedAt: null } : task));
    }

    const deleteTaskPermanent = (id) => {
        setTasks((prev) => prev.filter((task) => task.id !== id));
    }

    const emptyTrash = () => {
        setTasks((prev) => prev.filter((task) => !task.deleted));
    }

    const toggleTask = (id) => {
        setTasks((prev) =>
            prev.map((task) => (task.id === id ? { ...task, done: !task.done } : task))
        );
    }

    return (
        <TaskContext.Provider value={ {tasks, addTask, removeTask, toggleTask, emptyTrash, deleteTaskPermanent, restoreTasks }} >
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