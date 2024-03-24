
export default function Footer() {
    return (
        <footer>
            <div className="flex flex-col items-center justify-center sm:flex-row bg-sec md:gap-x-2 lg:gap-x-8">
                <a className=" footItem" href="" >
                    Resume</a>
                <a className=" footItem" target="_blank" href="github.com/w3ihong">
                    Git-Hub</a>
                <a className=" footItem" href="mailto:hey.weihong@gmail.com">Email</a>
            </div>
        </footer>
    );
};
