import Link from "next/link";

export default function(){
    return(
        <Link href="#">
            <div className="w-64 flex justify-center bg-gradient-to-r from-green to-sky-blue rounded">
                <a className="text-white font-bold py-2">ENROLL NOW FOR A COURSE</a>
            </div>
        </Link>
    )
}