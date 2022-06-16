import mail  from '../../../public/icons/mail.svg'
import videoConference  from '../../../public/icons/videoConference.svg'
import coins  from '../../../public/icons/coins.svg'
import menu  from '../../../public/icons/hamburgerMenu.svg'
import userCircle  from '../../../public/icons/user.svg'

export default function(){
    return(
        <>
            <ul className="searchContainer hidden sm:flex items-center px-2 py-1">
                <li className="mx-1">
                    <img src={mail.src}/>
                </li>
                <li className="mx-1 flex">
                    <p className="font-bold text-gray-800 mr-0.5">Teach</p>
                    <img src={videoConference.src}/>
                </li>
                <li className="mx-1">
                    <ul className="flex items-center rounded-full border-2 border-gray-200 shadow-md px-2 py-1">
                        <li className="mx-1 flex w-6 h-6">
                            <img src={menu.src}/>
                        </li>
                        <li className="mx-1 flex w-6 h-6">
                            <img src={userCircle.src}/>
                        </li>
                    </ul>
                </li>
                <li className="mx-1 flex">
                    <img src={coins.src}/>
                    <p className=" font-semiBold text-green">242</p>
                </li>
            </ul>
            <div className="mx-1 sm:hidden flex w-6 h-6">
                <img src={menu.src}/>
            </div>
        </>
    )
}