import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center justify-center sm:flex-row bg-sec md:gap-x-2 lg:gap-x-8">
                <a className="footItem" target="_blank" href="https://www.linkedin.com/in/wei-hong-926208238/">
                    <span className="strike">Linked-in</span></a>
                <a className=" footItem" href="">
                    <span className="strike">Resume</span></a>
                <a className=" footItem" target="_blank" href="https://github.com/Wei-H0ng">
                    <span className="strike">Git-Hub</span></a>
                <a className=" footItem" >
                    <span className="strike">Email</span></a>
            </div>
        </footer>
    );
};
