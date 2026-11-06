import Arrow from '../../public/arrow.png';
import Github from '../../public/github.png';
import Linkedin from '../../public/linkedin.png';

export default function Home() {
    return (
        <div className="w-full h-full lg:h-[100%] flex justify-center items-start">
            <div className="w-full lg:w-320 pt-30 p-3 flex flex-col justify-center items-center lg:items-start border-b border-[#000]/20 pb-20">
                <span className="flex w-fit text-[13px] justify-center gap-2 items-center h-7 border border-[#000]/20 pl-4 pr-4 pt-1 pb-1 font-[Valley] text-[#000]/60 rounded-3xl"><div className="w-2 h-2 rounded-3xl bg-green-600 green-ball-dot"></div>Open to full-stack roles</span>


                <h3 className="text-[30px] lg:text-[50px] font-[Inter] leading-12 font-bold w-full lg:w-120 lg:mt-7 text-[#0f2a47] text-center lg:text-start">I turn ideas into digital experiences.</h3>
                <p className="text-[13px] lg:text-[15px] font-[Inter] text-[#000]/60 w-full lg:w-120 lg:mt-5 text-center lg:text-start">I build modern, responsive web applications using Next.js, React, Node.js, and TypeScript — with a focus on clean code and thoughtful user experiences.</p>

                <div className="flex gap-1 justify-center items-center lg:justify-start mt-7 font-[Inter] text-[13px]">
                    <button className="border border-[#000]/20 bg-[#0f2a47] text-[#fff] pl-3 pr-3 pt-2 pb-2 rounded-md flex justify-center items-center gap-2 cursor-pointer hover:scale-[0.9] transition duration-200">View My Work <img src={Arrow} className='w-3 h-3 rotate-90'/></button>
                    <button className="border border-[#000]/20 text-[#000]/60 pl-3 pr-3 pt-2 pb-2 rounded-md cursor-pointer hover:bg-[#0f2a47] hover:text-[#fff] hover:scale-[0.9] transition duration-200">Resume</button>
                </div>

                <div className='flex justify-center lg:justify-start items-center gap-3 mt-3'>
                    <button style={{backgroundImage: `url(${Github})`}} className='w-5 h-5 bg-cover bg-center cursor-pointer'></button>
                    <button style={{backgroundImage: `url(${Linkedin})`}} className='w-5 h-5 bg-cover bg-center cursor-pointer'></button>
                </div>
            </div>
        </div>
    )
}