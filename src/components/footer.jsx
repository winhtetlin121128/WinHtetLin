
export default function Footer({HomeRef, ScrollToSection}) {

    const handleCopyright = () => {
        const gettime = new Date();
        const getYear = gettime.getFullYear();

        return getYear
    }

    return (
        <footer className="w-full h-20 flex justify-center items-center">
            <div className="w-full lg:w-320 border-t border-[#000]/20 h-full flex justify-center items-center font-[Inter] text-[12px] lg:text-[13px] text-[#000]/60">
                <span className="w-[40%] flex justify-start pl-3 hidden lg:flex">&copy; {handleCopyright()} Win Htet Lin. All right reserved.</span>
                <span className="w-[50%] lg:w-[20%] flex justify-start pl-3 lg:justify-center">Build with React.js</span>
                <span onClick={() => ScrollToSection(HomeRef)} className="w-[50%] lg:w-[40%] flex justify-end pr-3 hover:text-[#000] transition duration-200 cursor-pointer">Scroll To Top</span>
            </div>
        </footer>
    )
}