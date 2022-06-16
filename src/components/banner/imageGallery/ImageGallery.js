import picture1 from '../../../../public/pictures/picture-1.jpg'
import picture2 from '../../../../public/pictures/picture-2.jpg'
import picture3 from '../../../../public/pictures/picture-3.jpg'
import picture4 from '../../../../public/pictures/picture-4.jpg'

export default function(){
    return (
        <div className="mt-6 md:mt-0 w-full sm:w-96 h-72 lg:w-128 lg:h-96 grid grid-cols-2 grid-rows-3 gap-1">
            <img className="col-span-2 object-cover w-full h-full rounded" src={picture1.src}/>
            <img className="row-span-2 object-cover w-full h-full rounded" src={picture2.src}/>
            <img className="object-cover w-full h-full rounded" src={picture3.src}/>
            <img className="object-cover w-full h-full rounded" src={picture4.src}/>            
        </div>
    )
}