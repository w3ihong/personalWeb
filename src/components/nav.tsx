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
    <div className=" overflow-hidden sticky top-0 z-50 bg-gradient-to-r from-pri from-10% via-transparent via-35% to-pri to-80%   items-center backdrop-blur-md md:px-8 lg:px-24">
      <div className=" topnav " id="myTopnav">
        <a  className=" inline-block float-left ml-3 py-[1.35rem] pl-3 md:px-8 drop-shadow-xl" href="#hero"><Image src={logo} alt="Logo" className=" w-10"/></a>
        <a  className="navItem" href="#contact"><span className="strike">CONTACT</span></a>
        <a  className="navItem" href="#projects"><span className="strike">PROJECTS</span></a>
        <a  className="navItem" href="#about"><span className="strike">ABOUT</span></a>
        <a className=" burger hidden m-5" onClick={responsive}>
          <Image src={burger} alt="menu" className=" h-7 w-7"/>
        </a>
      </div>
    </div>
  );
};
  

