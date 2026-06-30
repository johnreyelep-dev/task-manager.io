import { useTheme } from "../component/ThemeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export default function Header(){

    const {theme, toggleTheme} = useTheme();
    return (
        <div className='w-full h-18 flex justify-between items-center mb-3'>
            <div className='flex items-center justify-center gap-2 '>
                <div className='w-10 h-10 rounded-full border border-secondary'></div>
                <h1 className='text-2xl  font-semibold'>Johnrey</h1>
            </div>
            <div className='w-20 h-10 flex justify-between items-center gap-3 '>
                <button className='cursor-pointer'>
                    <FontAwesomeIcon icon={faBell} style={{color: "#6B73FF",}} className='text-2xl' />
                </button>
                <div>
                    <button className='cursor-pointer'
                    onClick={() => toggleTheme()}>
                        <FontAwesomeIcon icon={theme === 'dark' ? faSun : faMoon} style={{color: "#6B73FF"}} className='text-2xl' />
                    </button>
                </div>
            </div>
        </div>
    );
}