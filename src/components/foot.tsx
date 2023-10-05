import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center justify-center sm:flex-row bg-sec md:gap-x-2 lg:gap-x-8">
                <a className="footItem" target="_blank" href="https://www.linkedin.com/in/wei-hong-926208238/">
                    Linked-in</a>
                <a className=" footItem" href="" >
                    Resume</a>
                <a className=" footItem" target="_blank" href="https://github.com/Wei-H0ng">
                    Git-Hub</a>
                <a className=" footItem" href="mailto:weihongchew2@gmail.com">Email</a>
            </div>
        </footer>
    );
};
