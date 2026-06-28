export default function Sidebar({activeTab, setActiveTab}) {
    const items = ["Dashboard", "Task", "Completed", "Pending"];

    return (
        <div className='w-70 flex flex-col items-center gap-20 pt-5 shadow-[1px_0_5px_rgba(139,92,246,.50)]'>
            <h1 className='text-3xl text-primary font-semibold'>Task Manager</h1>
            <ul className='flex flex-col gap-0.5'>
                {
                    items.map((item, index) => (
                        <li key={index}
                            onClick={() => setActiveTab(item)}
                            className={`group relative flex text-xl text-primary py-2 px-5 rounded-md cursor-pointer transition-all duration-200 linear overflow-hidden
                             hover:text-white ${activeTab === item ? 'text-white translate-x-2' : ''}`}>
                            <div className={`absolute left-0 top-0 h-full bg-secondary -z-10 transition-all duration-300 ease-linear ${activeTab === item ? "w-full" :"group-hover:w-full"} `}></div>
                            <span className='relative z-10' >{item}</span>
                        </li>
                    ))
                }
            </ul>

        </div>
    );
}