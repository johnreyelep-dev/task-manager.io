import { useState, useEffect} from "react";

export function useLocalStorage(key, initialValue) {
    const [value, setValue] = useState(() => {
        try{
            const savedValue = localStorage.getItem("key");
            if (savedValue) return JSON.parse(savedValue);
            return initialValue;
        }catch (err){
            console.log(err);
            return initialValue;
        }
    });

    useEffect(() => {
       try{
            localStorage.setItem("key", JSON.stringify(value));

       }catch(err){
            console.log(err);
       }
    }, [key, value]);

    return [value, setValue];
}