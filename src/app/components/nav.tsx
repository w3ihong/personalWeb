import Image from "next/image";

export default function Nav() {
  return (
    <header className='py-8 z-10 w-full sticky top-0'>
      <nav className='flex justify-end items-center max-container'>
        <div className='flex gap-16 text-lg font-montserrat max-md:hidden md:mr-8 lg:mr-24'>
          <a href='#aboutMe'>About me</a>
          
          <a href='#projects'>Projects</a>
      
          <a href='#contact'>Contact</a>
        </div>
        <div className='hidden max-md:block mr-8'>

            <Image
            src='/hamburger.svg'
            alt='hamburger.icon'
            width={25}
            height={25}
            />
        </div>
      </nav>
    </header>
  );
};
