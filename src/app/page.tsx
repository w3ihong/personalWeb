/* eslint-disable react/no-unescaped-entities */
'use client'
import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import profilePic from "public/mirror.jpg"
import Card from "./components/card"
import logo from "public/mainLogoCrop.png"

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
    } else {
      ref.current.querySelectorAll(".AOS").forEach((el :any) => {
        el.classList.remove("slide-in");
      });
    }
  }, [isIntersecting]);

  return (
    <main>
      <div /*className=" snap-y snap-mandatory h-screen overflow-scroll"*/>

        {/* Hero */}
        <section id ="hero" className=" snap-start flex h-screen items-center justify-center">
          <div className="flex flex-col">
            <div className=" flex flex-row justify-center">
              <div className=" flex justify-end px-3 py-1 md:py-2">
                <h2 className="flex items-end text-base md:text-2xl h-full text-white">I'm</h2>
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
                <h2 className="flex text-base md:text-2xl text-white">I'm </h2>
              </div>
              <h2 className="text-base md:text-2xl text-white">just tryna get through life</h2>

            </div>
          </div>
        </section>

        {/* About me */} 
        <section id="about" ref={ref} className=" snap-start flex relative h-screen flex-col md:flex-row items-center justify-center ">
          {/* top decorative box */}
          <div className=" AOS absolute hidden md:block w-1/3 bg-slate-600 h-1/2 md:h-2/5 top-0"></div>
          {/* Image container */}
          <div className=" flex w-4/5 md:w-2/5 m-5 px-2  justify-center md:justify-end">
            <Image
              src={profilePic}
              alt="Picture of me"
              className="z-10 AOS from-L w-full max-w-[18rem]"
            />
          </div>
          {/* text container */}
          <div className="flex flex-col w-5/6 md:w-3/5  md:h-full justify-center "> 
            <div className="flex items-end md:h-2/5 ">
              {/* mobile decorative box */}
              <div className="absolute bg-slate-600 md:hidden w-1/2 h-[16rem] z-0 left-0"></div>
              <h1 className="AOS from-T text-2xl py-3 md:text-3xl md:py-5 text-white z-10">About me</h1>
            </div>
            <span className="chiText">伟宏</span>   
            <div className="AOS from-B flex w-full md:w-4/5 md:h-3/5 z-30 pt-2">
              <p className="text-justify text-base">Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>
        </section>

        {/* Projects section */}
        <section id="projects" className=" snap-start flex relative flex-col h-screen items-center justify-center px-5">
          <div className="absolute bg-sec h-3/5 w-full top-0"></div>
          <div className=" flex self-start items-end h-1/5 z-30 pl-3 pb-5">
            <h1 className="text-3xl  md:text-5xl text-white drop-shadow-xl">Projects</h1>
          </div>
          <div className=" flex relative flex-row overflow-x-auto items-center gap-4 justify-center h-3/5 w-full z-10 bg-white/40"> 
            <Card/>
            <Card/>
            <Card/>
          </div>
        </section>

        <section id="contact" className=" snap-start flex min-h-screen flex-wrap items-center justify-center">
          <h1>Contact Fish flop flop </h1> 
        </section>
      </div>
    </main>
  )
}
