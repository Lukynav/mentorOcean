import searchIcon from '../../../public/icons/search.svg'
export default function(){
    return(
        <ul className="hidden md:flex items-center rounded-full border-2 border-gray-200 shadow-md px-2 py-1">
            <li className="px-2 border-r-2 border-gray-100 font-bold">What</li>
            <li className="px-2 border-r-2 border-gray-100 ">Where</li>
            <li className="px-2 border-r-2 border-gray-100 ">When</li>
            <li className="px-2 ">Who</li>
            <li className=" flex items-center justify-center rounded-full bg-teal-500 w-6 h-6">
                <img src={searchIcon.src}/>
            </li>
        </ul>
    )
}