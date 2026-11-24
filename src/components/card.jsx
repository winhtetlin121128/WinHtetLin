import MiPhoto from '../../public/Mi-Transparent.png';
import TechWolves from '../../public/techwolves.png';

import { motion } from 'motion/react'

export default function IdCard() {
    return (
        <motion.div 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
            delay: 3.9
        }}
        className="floating-card w-full h-full -mt-10 lg:flex justify-center items-center select-none hidden relative">
            <div className='bg-[#000000]/80 w-12 h-47 absolute z-20 -top-42.5 rounded-sm'></div>
            <div className="w-75 h-100 flex flex-col items-center shadow-lg bg-gray-200 rounded-2xl overflow-hidden">
                <div className='w/-[100%] relative'>
                    <div className='absolute w-20 h-1.5 bg-[#ffffff] top-2 left-27.5 rounded-3xl'></div>
                    <img src={MiPhoto} className='w-80 relative z-0'/>
                </div>
                <div className='bg-[#ffffff] flex justify-center items-center -mt-5 z-10 h-35 w-full rounded-tr-3xl'>
                    <section className='w-[50%] h-full flex flex-col items-start p-3 pt-5 pl-5 justify-between'>
                        <h1 className='font-[Inter] font-[400] text-[17px]'>Win Htet Lin</h1>
                        <span className='font-[Inter] text-[11px] text-[#000000]/60'>Frontend Developer</span>
                    </section>

                    <section className='w-[50%] h-full flex justify-end items-end p-3'>
                        <span className='font-[Inter] text-[11px] text-[#000000]/60'>ID : 05698</span>
                    </section>
                </div>
            </div>
        </motion.div>
    )
}