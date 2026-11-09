
export default function AboutPage({AboutRef}) {
    return (
        <div ref={AboutRef} className="w-full h-[100%] flex justify-center items-center pt-20">
            <div className="w-full lg:w-320 h-200 pb-20">
                <header className="w-full h-20 pl-3 pr-3">
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-[11px] lg:text-[13px] font-bold font-[Silk]'>02</span>
                        <h3 className='text-[13px] lg:text-[20px] font-[Silk]'>About Me</h3>
                    </div>
                </header>
            </div>
        </div>
    )
}