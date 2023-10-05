import Image, { StaticImageData } from "next/image"
import placeholder from "public/placeholder.png"

export default function Card({image = placeholder, altTxt = "picture alt text", desc = "Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo"}:
{image: StaticImageData, altTxt:string, desc:string}) {
    return (
        
        <a className=" flex relative items-center justify-center bg-sec w-full h-full gap-2 overflow-clip">
            
            <Image src={image} alt={altTxt} className=" object-cover"/>
            <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-pri from-10% to-transparent"></div>
            <div className="absolute bottom-0 h-1/5 text-sec text-justify">
                <p>{desc}</p>
            </div>
            
        </a>   
        
    )
}