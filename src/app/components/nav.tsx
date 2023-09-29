"use client"
import { useEffect } from 'react';
import Image from "next/image";
import burger from "public/burger.png";
import logo from "public/mainLogoCrop.png";

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
    <div className=" overflow-hidden sticky top-0 z-50 bg-gradient-to-r from-pri from-5% via-transparent via-35% to-pri to-90% items-center backdrop-blur-md md:px-8 lg:px-24">
      <div className=" topnav " id="myTopnav">
        <a href="#hero" className=" inline-block float-left ml-3 py-[1.35rem] pl-3"><Image src={logo} alt="Logo" className=" w-10"/></a>
        <a href="#contact" className="navItem"><span className="strike">CONTACT</span></a>
        <a href="#projects" className="navItem"><span className="strike">PROJECTS</span></a>
        <a href="#about" className="navItem"><span className="strike">ABOUT</span></a>
        <a className=" burger hidden m-5" onClick={responsive}>
          <Image src={burger} alt="menu" className=" h-7 w-7"/>
        </a>
      </div>
    </div>
  );


};
  

