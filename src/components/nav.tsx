"use client"
import { useEffect } from 'react';
import Image from "next/image";
import burger from "/public/burger.png";
import logo from "/public/mainLogoCrop.png";

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
    <div className=" fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-pri from-20% via-transparent via-60% to-pri to-95%   items-center backdrop-blur-md md:px-8 lg:px-24">
      <div className=" topnav " id="myTopnav">
        <a  className=" inline-block float-left ml-3 py-[1.35rem] pl-3 md:px-8 drop-shadow-xl" href="#hero"><Image src={logo} alt="Logo" className=" w-10"/></a>
        <a  className="block px-8 py-6 drop-shadow-xl float-left" href="#about"><span className="strike">ABOUT</span></a>
        <a  className="block px-8 py-6 drop-shadow-xl float-left" href="#projects"><span className="strike">PROJECTS</span></a>
        <a  className="block px-8 py-6 drop-shadow-xl float-right" href="mailto:weihongchew2@gmail.com"><span className="strike">CONTACT ME</span></a>
        <a className=" burger hidden m-5" onClick={responsive}>
          <Image src={burger} alt="menu" className=" h-7 w-7"/>
        </a>
      </div>
    </div>
  );
};
  

