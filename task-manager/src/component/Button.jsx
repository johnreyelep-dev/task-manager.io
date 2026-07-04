export default function Button({type, placeholder}){

    return (
        <button type={type} className='whitespace-nowrap cursor-pointer px-2 py-1.5 border border-card rounded-lg transition-all duration-300 ease-linear hover:bg-card hover:scale-95'>{placeholder}</button>
    );

}