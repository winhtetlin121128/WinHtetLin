
export default function Activities({ActivitiesRef}) {
    return (
        <div ref={ActivitiesRef} className="w-full h-full flex justify-center items-center pt-20">
            <div className="w-full lg:w-320 pb-20 border-b border-[#000]/20">
                <header className="w-full h-20 pl-3 pr-3">
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-[11px] lg:text-[13px] font-bold font-[Silk]'>04</span>
                        <h3 className='text-[13px] lg:text-[20px] font-[Silk]'>Activities</h3>
                    </div>
                </header>

                <div className="pl-3 pr-3 flex h-50">
                    <section>
                        <h3 className="font-[Recursive] font-bold text-[25px]">Nasa Space App Challenge</h3>
                    </section>

                    <section>

                    </section>
                </div>

                <div className="pl-3 pr-3 flex">
                    <section className="w-[50%]">

                    </section>

                    <section className="w-[50%] flex justify-end">
                         <h3 className="font-[Recursive] font-bold text-[25px]">Ed Tech AI Hackathon</h3>
                    </section>
                </div>
            </div>
        </div>
    )
}