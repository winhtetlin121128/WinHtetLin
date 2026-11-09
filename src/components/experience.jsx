import { useState } from "react"
import TimelineData from '../assets/data/timeline.json';
import Arrow from '../../public/blackarrow.png';
import LocationIcon from '../../public/location.png';

export default function Experience({ExperienceRef}) {

    const [active, setActive] = useState("Learning");
    const filteredData = TimelineData.filter((item) => {
        if(active === "Experience") {
            return item.type === "work";
        }

        return item.type === "school";
    })

    const handleToggle = () => {
        setActive((prev) => prev === "Learning" ? "Experience" : "Learning")
    }
    

    return (
        <div ref={ExperienceRef} className="w-full flex justify-center pt-20">
            <div className="w-full lg:w-320 pb-20 border-b border-[#000]/20">
                <header className="w-full pl-3 pr-3 flex justify-between">
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-[11px] lg:text-[13px] font-bold font-[Silk]'>02</span>
                        <h3 className='text-[13px] lg:text-[20px] font-[Silk]'>Experience Timeline</h3>
                    </div>

                    {
                        active === "Learning" ? <button onClick={() => handleToggle()} className="bg-[#000] pl-3 pr-3 pt-1 pb-1 text-[#fff] font-[Valley] text-[12px] lg:text-[13px] cursor-pointer hover:shadow-lg transition duration-200 active:scale-[0.9]">Switch : Experience</button> : <button onClick={() => handleToggle()} className="bg-[#000] pl-3 pr-3 pt-1 pb-1 text-[#fff] font-[Valley] text-[12px] lg:text-[13px] cursor-pointer hover:shadow-lg transition duration-200 active:scale-[0.9]">Switch : Learning</button>
                    }
                </header>

                <div className="flex flex-col gap-3 h-[100%] mt-10 p-3 list-none">
                    {
                        filteredData.map((element, index) => {
                            return (
                                <li key={index} className="border bg-[#fff] border-[#000]/20 w-full h-40 p-3 rounded-xl">
                                    <div>
                                        <div>
                                            <div className="flex justify-between">
                                                <span className="font-[Inter] text-[11px] pl-3 pr-3 pt-1 pb-1 rounded-xl bg-green-100 text-green-600">{element.status}</span>
                                                <span className="font-[Recursive] text-[13px]">{element.start} - {element.end}</span>
                                            </div>
                                            <h3 className="font-[Recursive] font-bold text-[17px] mt-10">{element.title}</h3>
                                            <div className="flex justify-start gap-5 items-center">
                                                <span className="font-[Inter] text-[13px] underline underline-offset-7 text-[#000]/60 flex gap-1 items-center">{element.company} <img src={Arrow} className="w-2 h-2 rotate-50"/></span>
                                                <span className="w-1 h-1 bg-gray-600 rounded-3xl green-ball-dot"></span>
                                                <span className="font-[Inter] text-[13px] text-[#000]/60 flex gap-1 items-center"><img src={LocationIcon} className="w-3 h-3"/>{element.job}</span>
                                            </div>
                                        </div>
                                    </div>
                                </li>
                            )
                        })
                    }
                </div>

            </div>
        </div>
    )
}