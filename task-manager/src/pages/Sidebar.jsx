import logo from '../assets/logo.png'

export default function Sidebar({activeTab, setActiveTab}) {
    const items = ["Dashboard", "Task", "Completed", "Pending"];

    return (
        <div className='w-70 flex flex-col items-center pt-5 shadow-[1px_0_3px_rgba(139,92,246,.50)]'>
            <div className=''>
                <img src={logo} alt='logo' />
            </div>
            <div className='text-center mb-10'>
                <div>
                    <span className='text-3xl font-bold'>Task Manager</span>
                    <div className='flex justify-center gap-1'>
                        <span className='text-sm font-semibold'>ORGANIZE.</span>
                        <span className='text-sm font-semibold'>DONE.</span>
                        <span className='text-sm font-semibold'>REPEAT.</span>
                    </div>
                </div>
            </div>
            <ul className='flex flex-col gap-0.5'>
                {
                    items.map((item, index) => (
                        <li key={index}
                            onClick={() => setActiveTab(item)}
                            className={`relative group flex items-center justify-center text-xl git  py-2 px-5 rounded-md cursor-pointer transition-all duration-200 linear overflow-hidden
                             ${activeTab === item ? 'text-white translate-x-2' : ''}`}>
                            <div className={`absolute w-full h-10 -z-10 ${activeTab === item ? "bg-secondary" : "group-hover:shadow-[0_2px_0px_rgba(139,92,246,.80)] group-hover:bg-card"}`}></div>
                            <span className='relative z-10' >{item}</span>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}