import { useTheme } from "../component/ThemeContext.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faMoon, faSun} from "@fortawesome/free-solid-svg-icons";

export default function Header(){

    const {theme, toggleTheme} = useTheme();
    return (
        <div className='w-full h-18 flex justify-between items-center px-5'>
            <h1 className='text-2xl text-primary font-semibold'>Johnrey</h1>
            <form>
                <input type='search' placeholder='Search' className='w-100 h-10 text-primary rounded-2xl px-2 outline-none border border-secondary' />
            </form>
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