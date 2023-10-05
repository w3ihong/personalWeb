import Image, { StaticImageData } from "next/image"
import placeholder from "public/placeholder.png"

export default function Card({link,image = placeholder, altTxt = "picture alt text", desc }:
{link:string ,image: StaticImageData, altTxt:string, desc:string}) {
    return (
        
        <a href={link} target="blank" className="z-20 relative w-full h-full overflow-clip hover:scale-[1.02] transition-all ease-in">
            
            <Image src={image} alt={altTxt} className=" object-cover "/>
                
            <div className="w-full h-full absolute bottom-0 bg-gradient-to-t from-pri from-10% to-transparent"></div>
            <div className="absolute flex items-end  bottom-0 h-2/5 w-full text-sec p-2 pb-5">
                <span className="text-justify">{desc}</span>
            </div>
            
        </a>   
        
    )
}