'use client'
import Card from "@/components/card"

import bean from "public/bean.jpg"
import car from "public/tomica.jpg"
import fish from "public/fish.jpg"
import burger from "public/burger.jpg"

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import {Pagination} from 'swiper/modules';



export default function Carousel () {

    
    return(

            <Swiper
                spaceBetween={30}
                slidesPerView={2}
                pagination={{
                    clickable: true,
                }}
                loop ={true}
                modules={[Pagination]}
                className="showBorder"
                >
                <SwiperSlide>
                    <Card 
                        image={bean}
                        altTxt = "a single bean"
                        desc = "an image of fish's bean, i like rubbing it"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        image={fish}
                        altTxt = "fish"
                        desc = "my favourite fish"/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                       image={car}
                        altTxt = "tomica toy car"
                        desc = "Car that fish got me "/>
                </SwiperSlide>
                <SwiperSlide>
                    <Card 
                        image={burger}
                        altTxt = "McD's scrambled egg burger"
                        desc = "A very dissapointing scrambled egg burger from McDonalds , egg was not scrambeled. Made me big sad"/>
               
                </SwiperSlide>
            </Swiper>
        



        // <div>
        //     <Script src="https://cdn.jsdelivr.net/npm/swiper@10/swiper-element-bundle.min.js"></Script>
        //     <swiper-container space-between="30" pagination="true" pagination-clickable="true">
        //         <swiper-slide>
        //             <Card 
        //                 image={bean}
        //                 altTxt = "a single bean"
        //                 desc = "an image of fish's bean, i like rubbing it"/>
        //         </swiper-slide>
        //         <swiper-slide>
        //             <Card 
        //                 image={fish}
        //                 altTxt = "fish"
        //                 desc = "my favourite fish"/>
        //         </swiper-slide>
        //         <swiper-slide>
        //             <Card 
        //                 image={car}
        //                 altTxt = "tomica toy car"
        //                 desc = "Car that fish got me "/>
        //         </swiper-slide>
        //         <swiper-slide>
        //             <Card 
        //                 image={burger}
        //                 altTxt = "McD's scrambled egg burger"
        //                 desc = "A very dissapointing scrambled egg burger from McDonalds , egg was not scrambeled. Made me big sad"/>
        //         </swiper-slide>
        //     </swiper-container>
        // </div>
        
    )
}