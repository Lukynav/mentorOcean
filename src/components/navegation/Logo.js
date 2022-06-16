import logoFull from '../../../public/logo2.svg'
import logo from '../../../public/logo.svg'

export default function(){
    return(
        <>
            <img className='h-6 hidden sm:block' src={logoFull.src}/>
            <img className='h-6 block sm:hidden' src={logo.src}/>
        </>
    )
}