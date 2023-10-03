import Image, { StaticImageData } from "next/image"
import placeholder from "public/placeholder.png"

export default function Card({image, altTxt , desc}:{image: StaticImageData, altTxt:string, desc:string}) {
    return (
        <a className=" flex flex-col md:flex-row items-center justify-center bg-pri gap-2">
            <div className="flex w-full sm:w-2/3 h-full justify-end">
                <Image src={image} alt={altTxt} className=" w-full !max-w-sm"/>
            </div>
            <div className="w-3/4 md:w-1/3 h-1/3 ">
                <p>{desc}</p>
            </div>
        </a>   
    )
}