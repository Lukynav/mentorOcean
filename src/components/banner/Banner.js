import Botton from "../botton/botton";
import UnderlineButton from "../botton/underlineButton";
import BannerText from "./bannerText";
import ImageGallery from "./imageGallery/ImageGallery";

export default function(){
    return(
        <div className="w-full bg-dark-blue flex justify-center py-10">
            <div className="flex-col md:flex-row px-6 w-full lg:w-300 lg:px-0 flex justify-between items-center">
                <div className="mb-4 md:mb-0">
                    <BannerText />
                    <div className="w-64 md:justify-start md:w-full m-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center mt-4">
                        <Botton />
                        <UnderlineButton />
                    </div>
                </div>
                <ImageGallery />
            </div>
        </div>
    )
}