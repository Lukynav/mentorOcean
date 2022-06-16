import Accounts from "./Accounts";
import Logo from "./Logo";
import Search from "./Search";

export default function(){
    return(
        <nav className="sticky top-0 px-4 lg:px-0 w-100vw bg-white py-3 flex justify-center items-center shadow-md">
            <div className="w-300 flex justify-between items-center">
                <Logo />
                <Search />
                <Accounts />
            </div>
        </nav>
    )
}