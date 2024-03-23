import Image, { StaticImageData } from "next/image"
import placeholder from "/public/placeholder.png"
import placeholderV from "/public/placeholder-V.png"

export default function Card({link,image = placeholder, imageV = placeholderV, altTxt = "picture alt text", desc }:
{link:string ,image: StaticImageData, imageV:StaticImageData, altTxt:string, desc:string}) {
    return (
        
        <a href={link} target="blank" className="z-20 relative w-full h-full overflow-clip hover:scale-[1.02] transition-all ease-in ">
            
            <Image src={image} alt={altTxt} className=" object-cover hidden sm:block"/>
            <Image src={imageV} alt={altTxt} className=" object-cover block sm:hidden"/>
            {/* Gradient mask */}
            <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-pri from-10% to-transparent "></div>
            {/* text div */}
            <div className="absolute  items-end bottom-0 h-2/5 w-full text-sec p-2 sm:pb-5 flex ">
                <span className="text-justify ">{desc}
                    <svg xmlns="http://www.w3.org/2000/svg" className="inline-flex stroke-sec w-5 h-5" viewBox="0 0 24 24">
                        <g fill="none"><path d="M15 3.5h5.5m0 0V9m0-5.5l-8 8"/>
                            <path stroke-linecap="round" d="M11.5 5.5h-4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2v-4"/>
                        </g>
                    </svg>
                </span>
            </div>
            
        </a>   
        
    )
}