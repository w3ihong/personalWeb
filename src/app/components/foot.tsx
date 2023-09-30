import Image from "next/image";

export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center justify-center md:flex-row bg-sec gap-4 h-28">
                <a className="block w-16 h-3 text-pri">Linked-in</a>
                <a className="block w-16 h-3 text-pri">Resume</a>
                <a className="block w-16 h-3 text-pri">Git-Hub</a>
            </div>
        </footer>
    );
};
