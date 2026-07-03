import {createContext, useContext, useState, useEffect} from "react";

const UseThemeContext =createContext();

export function ThemeProvider({ children }) {
    const [theme, setTheme] = useState(() => {
        const saved = localStorage.getItem("theme");
        if (saved) return saved;
        return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    });

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prev) => (prev === "light" ? "dark" : "light") );
    }

    return (
        <UseThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </UseThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(UseThemeContext);
    if (!context) {
        throw new Error("useTheme must be used within a ThemeProvider");
    }
    return context;
}