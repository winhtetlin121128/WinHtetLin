import ProjectData from '../assets/data/project.json';
import Arrow from '../../public/blackarrow.png';
import { useState } from 'react';

const Tags = ["All", "Web", "Mobile"]

export default function Work({WorkRef}) {

    const [tagActive, setTagActive] = useState("All");
    
    const handleTag = (element) => {
        setTagActive(element)
    }

    return (
        <div ref={WorkRef} className='w-full h-[100%] flex justify-center items-center'>
            <div className='w-full lg:w-320 h-full pt-20 pb-20 p-3 border-b border-[#000]/20'>

                <header className='flex justify-between items-end font-[Inter] '>
                    <div className='flex justify-start items-center gap-2 font-[Silk]'>
                        <span className='text-[11px] lg:text-[13px] font-bold'>01</span>
                        <h3 className='text-[13px] lg:text-[20px]'>Selected Projects</h3>
                    </div>

                    <div className='flex justify-center items-center gap-1'>
                        {
                            Tags.map((element, index) => {
                                return (
                                    <li onClick={() => handleTag(element)} key={index} className={`list-none pl-3 pr-3 pt-1 pb-1 border border-[#000]/20 text-[12px] cursor-pointer hover:bg-[#000]/60 hover:text-[#fff] transition duration-200 ${tagActive === element ? "bg-[#000] text-[#fff]" : 'bg-[#fff]'}`}>{element}</li>
                                )
                            })
                        }
                    </div>
                </header>

                <div className='flex flex-wrap w-full mt-20 h-[100%] gap-5 justify-center'>
                    {
                        ProjectData.slice(0, 3).map((element, index) => {
                            return (
                                <li key={index} className='list-none border border-[#000]/20 w-100 h-110 -xl bg-[#fff] hover:scale-[1.05] transition duration-200'>
                                    <header className='h-13 border-b border-[#000]/20 flex justify-between items-center pl-3 pr-3'>
                                        <div className='flex justify-center items-center h-full gap-3'>
                                            <div className='w-2 h-2 rounded-3xl bg-red-400'></div>
                                            <div className='w-2 h-2 rounded-3xl bg-yellow-400'></div>
                                            <div className='w-2 h-2 rounded-3xl bg-green-400'></div>
                                        </div>

                                        <span onClick={() => alert("Unavailable")} className='font-[Inter] text-[13px] flex items-center justify-center gap-1 hover:text-purple-600 transition duration-200 cursor-pointer'>Live Demo <img src={Arrow} className='w-2 rotate-30'/></span>

                                        <span className='font-[Inter] text-[13px]'>Web-App</span>
                                    </header>

                                    <div style={{ backgroundImage: `url(${element.img})`}} className='w-full h-[50%] bg-cover bg-center border-b border-[#000]/20'></div>

                                    <div className='w-[50%] p-3 w-full'>
                                        <h3 className='text-[16px] font-[Inter]'>{element.title}</h3>
                                        <p className='line-clamp-2 font-[Valley] text-[13px] text-[#000]/60 mt-3'>{element.description}</p>
                                        
                                        <ul className='flex justify-start items-center gap-2 mt-5'>
                                            {
                                                element.category.map((element, index) => {
                                                    return (
                                                        <li key={index} className='border bg-[#f5f5f7]/60 border-[#000]/20 pl-3 pr-3 pt-1 pb-1 text-[11px]'>{element}</li>
                                                    )
                                                })
                                            }
                                        </ul>
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>

                <div className='w-full flex mt-10 items-center justify-center'>
                    <button className='floating-button font-[Valley] text-[12px] flex items-center justify-center gap-3 pl-3 pr-3 pt-1 pb-1 border border-[#000]/20 cursor-pointer transition duration-200'>All Project <img src={Arrow} className='w-2 rotate-90'/></button>
                </div>
            </div>
        </div>
    )
}