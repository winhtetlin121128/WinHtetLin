
import Typewriter from 'typewriter-effect';
import MiProfile from '../../public/Mi.png';

const Record = [
    {
        "title" : "PROJECTS",
        "count" : "3+"
    },

    {
        "title" : "CERTIFICATES",
        "count" : "1"
    },

    {
        "title" : "YEARS CODING",
        "count" : "1+"
    }
];

const Languages = ["Python", "JavaScript", "TypeScript"]
const FontendCore = ["React", "TypeScript", "TailwindCss", "Python", "HTML5", "CSS3", "JavaScript", "Node", "Express", "Postgresql", "Mongo", "Motion", "Prisma"];
const Tools = ["VS Code", "Figma", "Git", "GitHub", "Postman", "Codex", "Cursor", "OpenCode"]


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
                    <section className="w-[100%] lg:w-[40%] h-full">
                        <div className='w-full flex justify-center mt-20'>
                            <div style={{backgroundImage: `url(${MiProfile})`}} className={`border-2 border-[#000]/20 h-50 w-50 rounded-3xl bg-cover bg-center`}></div>
                        </div>
                    </section>

                    <section className="w-[100%] lg:w-[60%] h-full pt-20">
                        <h3 className='font-bold font-[Inter] text-[25px] w-full flex justify-center lg:justify-start'>Win Htet Lin</h3>
                        <ul className='flex gap-5 mt-3 justify-center lg:justify-start'>
                            {
                                Record.map((element, index) => {
                                    return (
                                        <li key={index} className='font-[Valley] text-[#000]/70'>
                                            <h3 className='text-[13px]'>{element.title}</h3>
                                            <span className='text-[13px] ml-2 '>{element.count}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>

                        <div className='text-[16px] font-[Inter] text-[#000]/70 mt-10 flex flex-col gap-5 text-center lg:text-start'>
                            <p>I focus on how can be easy to use and how much useful for realworld problem. I enjoy turning ideas into real products and crafting experience that feel smooth and intutive.</p>
                            <p>In other side, I also learning new thing little by little, day to day, step by step from online, self-taught and sloving problem in daily life.</p>
                            <p>I mainly build landing-site, E-commerce and Management System with MERN and PERN Stack.</p>
                            <p>My goal is to become a passionate Full-stack developer.</p>
                        </div>
                    </section>
                </div>

                <div className='w-full flex flex-col items-start pl-3 pr-3 mt-20'>
                    <div className='mt-10 flex flex-col lg:flex-row items-start'>
                        <h3 className='text-[15px] font-[Valley] pt-1 pb-1 w-50'>Languages</h3>
                        <ul className='mt-3 flex flex-wrap gap-2'>
                            {
                                Languages.map((element, index) => {
                                    return (
                                        <li key={index} className='bg-[#fff] pl-4 pr-4 pt-1 pb-1 text-[13px] font-[Inter] border border-[#000]/20 rounded-3xl cursor-default'>                                                <span>{element}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='mt-10 flex flex-col lg:flex-row items-start gap-5'>
                        <h3 className='text-[15px] font-[Valley] w-50 pt-1 pb-1'>Tech Stack I Use</h3>
                        <ul className='mt-3 flex flex-wrap gap-2'>
                            {
                                FontendCore.map((element, index) => {
                                    return (
                                        <li key={index} className='bg-[#fff] pl-4 pr-4 pt-1 pb-1 text-[13px] font-[Inter] border border-[#000]/20 rounded-3xl cursor-default'>                                                <span>{element}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>

                    <div className='mt-10 flex flex-col lg:flex-row'>
                        <h3 className='text-[15px] font-[Valley] w-50 pt-1 pb-1 '>Tools and AI</h3>
                        <ul className='mt-3 flex flex-wrap gap-2'>
                            {
                                Tools.map((element, index) => {
                                    return (
                                        <li key={index} className='bg-[#fff] pl-4 pr-4 pt-1 pb-1 text-[13px] font-[Inter] border border-[#000]/20 rounded-3xl cursor-default'>                                                <span>{element}</span>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}