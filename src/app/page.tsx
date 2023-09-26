import Image from "next/image"
import profilePic from "public/mirror.jpg"

export default function Home() {
  return (
    <main>

      {/* Hero */}
      <section id ="hero" className="flex h-screen flex-col items-center justify-center">
        <h1 className=" text-7xl ">Welcome</h1>
      </section>

      {/* About me */}
      <section id="about" className="flex relative h-screen flex-col md:flex-row items-center justify-center p-10">
        {/* top decorative box */}
        <div className="absolute hidden md:block w-1/3 bg-slate-600 h-1/2 md:h-2/5 top-0"></div>
        {/* Image container */}
        <div className="flex w-4/5 md:w-2/5 m-5 max-w-[20rem]">
          <Image
            src={profilePic}
            alt="Picture of me"
            className="z-10"
          />
          {/* chinese text */}
          <span className=" absolute z-20 w-1/4 right-[3.5rem] font-bold text-[16rem] text-yellow-50">伟宏</span>
        </div>
        {/* text container */}
        <div className="flex flex-col w-4/5 h-1/2 md:h-full justify-start"> 
          <div className="flex items-end md:h-2/5 ">
            {/* mobile decorative box */}
            <div className="absolute bg-slate-600 md:hidden w-1/2 h-[16rem] z-0 left-9"></div>
            <h1 className=" text-2xl py-3 md:text-3xl md:py-5 text-white z-10">About me</h1>
          </div>
          <div className="flex md:h-3/5 z-30 pt-2">
            <p className=" text-sm md:text-base">Lorem ipsum dolor sit amet, et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
          </div>
        </div>
      </section>

      {/* Projects section */}
      <section id="projects" className="flex relative flex-col h-screen items-center justify-center bg-slate-600 px-5">
        <div className="flex self-start items-center h-1/4 z-30 pl-3">
          <h1 className=" text-5xl text-white">Projects</h1>
        </div>
        <div className=" flex items-center justify-center h-3/5 w-full z-10 bg-white/40 mb-5"> 
          <p>
            Kinda empty rn 
            make it horizontal scroll
          </p>
        </div>
        {/* Derocative Bar */}
        {/* <div className=" absolute w-full h-2/5 bg-priDark"></div> */}
      </section>

      <section id="contact" className="flex min-h-screen flex-wrap items-center justify-center">
        <h1>Contact me </h1> 
      </section>

    </main>
  )
}
