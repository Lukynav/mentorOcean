import Link from "next/link";

export default function(){
    return(
        <Link href="#">
            <div className="flex justify-center md:justify-start">
                <a className="text-gray-200 text-sm underline">View meeting location</a>
            </div>
        </Link>
    )
}