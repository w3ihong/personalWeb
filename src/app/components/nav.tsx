"use client"

import Image from "next/image";
import burger from "public/burger.png";
import logo from "public/mainLogo.png";

export default function Nav() {
  function responsive() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  } 

  return ( 
    <div className=" overflow-hidden sticky top-0 z-50 bg-gradient-to-l from-pri from-10% items-center backdrop-blur-sm md:pr-8 lg:pr-24">
      <div className="topnav " id="myTopnav">
        <a href="#hero" className=" inline-block float-left ml-3 py-[1.37rem] "><Image src={logo} alt="Logo" className="h-7 w-11"/></a>
        <a href="#contact" className="navItem"><span className="strike">CONTACT</span></a>
        <a href="#projects" className="navItem"><span className="strike">PROJECTS</span></a>
        <a href="#about" className="navItem"><span className="strike">ABOUT</span></a>
        <a href="javascript:void(0);" className=" burger hidden m-5" onClick={responsive}>
          <Image src={burger} alt="menu" className=" h-7 w-7"/>
        </a>
      </div>
    </div>
  );
};


