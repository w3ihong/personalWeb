import Image, { StaticImageData } from "next/image"
import placeholder from "public/placeholder.png"

export default function Card({image, altTxt , desc}:{image: StaticImageData, altTxt:string, desc:string}) {
    return (
        
        <a className=" flex flex-col items-center justify-center bg-sec w-2/3 md:w-1/2  gap-2">
            <div className="flex w-full h-full ">
                <Image src={image} alt={altTxt} />
            </div>
            <div className="text-pri text-justify">
                <p>{desc}</p>
            </div>
        </a>   
        
    )
}