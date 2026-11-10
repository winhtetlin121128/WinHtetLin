
import Typewriter from 'typewriter-effect';
import MiProfile from '../../public/Mi.png';

export default function AboutPage({AboutRef}) {
    return (
        <div ref={AboutRef} className="w-full h-[100%] flex justify-center items-center pt-20">
            <div className="w-full lg:w-320 pb-20 border-b border-[#000]/20">
                <header className="w-full h-20 pl-3 pr-3">
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-[11px] lg:text-[13px] font-bold font-[Silk]'>03</span>
                        <h3 className='text-[13px] lg:text-[20px] font-[Silk]'>About Me</h3>
                    </div>
                    <h3 className='font-[Recursive] font-bold flex text-[25px]'>
                            <Typewriter 
                            options={{ 
                                strings: ["Frontend Focus : Full-stack Engineer", "IT Support Specialist", "UI/UX Designer", "Just A Student"], 
                                autoStart: true,
                                loop: true,
                                cursor: '|',
                                delay: 20,
                                deleteSpeed: 3
                            }}
                            />
                        </h3>
                </header>

                <div className="w-full flex flex-wrap items-start justify-center pl-3 pr-3">
                    <section className="w-[100%] lg:w-[50%] h-full">
                        <div className='w-full flex justify-center mt-20'>
                            <div style={{backgroundImage: `url(${MiProfile})`}} className={`border-2 border-[#000]/20 h-50 w-50 rounded-3xl bg-cover bg-center`}></div>
                        </div>
                    </section>

                    <section className="w-[100%] lg:w-[50%] h-full pt-20">
                            <h3 className='font-bold font-[Recursive] text-[20px]'>Win Htet Lin</h3>
                    </section>
                </div>
            </div>
        </div>
    )
}