/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useRef, useEffect } from "react"

import Image from "next/image"
import profilePic from "/public/mirror.jpg"
import logo from "/public/mainLogoCrop.png"

import Card from "@/components/card"
import webSS from "/public/webSS.png"
import webSSV from "/public/webSS-V.png"


export default function Home() {

  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef(null);

  const callBackFunc = (entries : any) => {
    const [entry] = entries
    setIsIntersecting(entry.isIntersecting)
  }

  useEffect(() => {
    const observer = new IntersectionObserver(callBackFunc,{ rootMargin: "-200px" });
    console.log(isIntersecting);
    observer.observe(ref.current);

    return () => observer.disconnect();
  }, [isIntersecting]);

  useEffect(() => {
    if (isIntersecting) {
      ref.current.querySelectorAll(".AOS").forEach((el :any) => {
        el.classList.add("slide-in");
      });
    } 
  }, [isIntersecting]);

  return (
    <main>
      <div>

        {/* Hero */}
        <section id ="hero" className="flex h-screen items-center justify-center">
          <div className="flex flex-col">
            <div className=" flex flex-row justify-center">
              <div className=" flex justify-end px-3 py-1 md:py-2">
                <h2 className="flex items-end text-base md:text-2xl h-full text-accent2">I'm</h2>
              </div>
              <div className="">
                <div className=" flex item-start justify-start">
                  <Image className="w-[13rem] md:w-[19.25rem]" alt="large logo"src={logo}/>
                </div>
                <h1 className="text-5xl md:text-7xl ">Welcome</h1>
                <h1 className="text-5xl md:text-7xl">Wei Hong</h1>
              </div>
            </div>
            <div className="flex flex-row items-center">
              <div className=" flex justify-end p-3">
                <h2 className="flex text-base md:text-2xl text-accent2">I'm </h2>
              </div>
              <h2 className="text-base md:text-2xl text-accent2">just tryna get through life</h2>

            </div>
          </div>
        </section>

        {/* About me */} 
        <section id="about" ref={ref} className="flex relative h-screen flex-col sm:flex-row items-center justify-center ">
          {/* top decorative box */}
          <div className=" AOS from-B absolute hidden sm:block w-1/3 bg-slate-600 h-1/2 sm:h-2/5 top-0"></div>
          {/* Image container */}
          <div className=" flex w-4/5 sm:w-2/5 m-5 px-2  justify-center sm:justify-end">
            <Image
              src={profilePic}
              alt="Picture of me"
              className="z-10 AOS from-B delay-300 w-full max-w-[18rem]"
            />
          </div>
          {/* text container */}
          <div className="flex flex-col w-5/6 sm:w-3/5  sm:h-full justify-center "> 
            <div className="flex items-end sm:h-2/5 ">
              {/* mobile decorative box */}
              <div className="absolute bg-slate-600 sm:hidden w-1/2 h-[16rem] z-0 left-0 "></div>
              <h1 className="AOS from-B delay-150 text-2xl py-3 sm:text-3xl sm:py-5 text-accent2 z-10">About me</h1>
            </div>
            <span className="chiText">伟宏</span>   
            <div className="AOS from-B delay-500 flex flex-col w-full sm:w-5/6 md:w-4/5 sm:h-3/5 z-30 pt-2 ">
              <p className="text-justify text-base">
              Hi, I'm Wei Hong, a computer science undergraduate with a passion for bringing ideas to life through technology. 
              I'm also intrigued by the FI/RE movement and have a keen interest in stocks and financial literacy.
              </p>
              <p className="text-justify text-base">
              In my free time, you can find me enjoying chess, badminton, or a game of pool. 
              My INTJ-A personality drives my analytical approach to problem-solving.
              Here I showcase my work, share my journey, and hopefully connect with fellow tech and finance enthusiasts. 
              Explore my work and reach out—I'd love to connect!
              </p>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="flex w-full h-svh">
          <div></div>
        </section>

        {/* Projects section */}
        <section id="projects" className="flex relative w-full items-center justify-center py-32">
          <div className="absolute bg-accent h-[18rem] sm:h-[24rem] w-full top-0"></div>
          <div className="flex relative flex-col sm:flex-row  justify-start w-full h-3/4 gap-y-4 ">

            <div className=" flex self-start w-full sm:w-1/6 z-30 sticky top-20 sm:top-32 mb-2">
              <h1 className="text-3xl sm:text-4xl  text-accent2 sm:-rotate-90 sm:mt-20 pl-6 sm:pl-0 ">Projects / Work</h1>
            </div>
            <div className="flex flex-col w-full sm:w-4/5 gap-[15rem] px-6 sm:px-0 ">
              <Card 
                imageV={webSSV} image={webSS} 
                altTxt={"Personal Portfolio Website"} 
                desc={"My personal portfolio website created with react, typescript and tailwind. Device responsive and adapts to user's browser theme."} link={"https://github.com/Wei-H0ng/personalWeb"} /> 
              <Card imageV={undefined} image={undefined} altTxt={""} desc={""} link={""}/>
              
              
            </div>
          </div>
        </section>
              
        
      </div>
    </main>
  )
}
