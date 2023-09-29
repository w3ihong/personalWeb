'use client'
import Image from "next/image"
import placeholder from "public/placeholder.png"

export default function Card() {
    return (
        <div className=" absolute my-4 w-1/2 h-2/3">
            <a>
                <Image src={placeholder} alt='project sample photo' className="h-full w-full">
                    
                </Image>
            </a>
        </div>
    )
}