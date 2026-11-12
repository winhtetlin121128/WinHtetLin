const MenuTag = ["Home", "Work", "Experience", "About"];
import { useState } from 'react';
import ArrowIcon from '../../public/arrow.png';
import Coffee from '../coffee/coffee.jsx';

import { motion } from 'motion/react';

//animate 
const container = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
}

const items = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
}

export default function Navbar({ScrollToSection, HomeRef, WorkRef, ExperienceRef, AboutRef, ContactRef}) {

    const [active, setActive] = useState("Home");

    const handleMenuTag = (element) => {
        setActive(element)

        element === "Work" ? ScrollToSection(WorkRef) : ""
        element === "Home" ? ScrollToSection(HomeRef) : ""
        element === "Experience" ? ScrollToSection(ExperienceRef) : ""
        element === "About" ? ScrollToSection(AboutRef) : ""
    }

    return (
        <div className="w-full sticky top-0 z-50 flex justify-center h-18 items-center lg:pt-3">
            <motion.nav 
            initial={{ opacity: 0, y: -100 }}
            animate={{ opacity: 1, y: 0, }}
            transition={{ delay: 3}}
            className="flex pl-4 pr-4 justify-between lg:justify-center w-full lg:w-320 h-full items-center shadow-lg border-[#000]/20 border lg:rounded-xl backdrop-blur-md">
                {/* Logo Container */}
                <span className="font-[Inder] flex justify-start font-bold text-[15px] w-[10%]">{"<" + "whl" + "/>"}</span>

                {/* Menutags Container */}
                <motion.ul 
                variants={container}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.15 }}
                className="hidden w-[90%] lg:flex font-[Valley] gap-1 text-[13px] lg:text-[15px] h-full items-center justify-end">
                    {
                        MenuTag.map((element, index) => {
                            return (
                                <motion.li variants={items} onClick={() => handleMenuTag(element)} key={index} className={`list-none pl-4 pr-4 pt-1 pb-1 rounded-[30px] text-[13px] text-[#000]/60 flex justify-center items-center transition duration-200 cursor-pointer hover:text-[#fff] hover:bg-[#0f2a47]/60 ${active === element ? "bg-[#0f2a47]/60 text-[#fff]" : ""}`}>{element}</motion.li>
                            )
                        })
                    }
                </motion.ul>

                {/* Action */}
                <div className="flex justify-end items-center h-full gap-2 w-[40%] lg:w-[10%]">
                    {/* <button className="border border-[#000]/20 h-10 w-10 rounded-xl"></button> */}
                    <button onClick={() => ScrollToSection(ContactRef)} className="pl-4 pr-4 pt-1 pb-1 rounded-3xl text-[13px] bg-[#000] text-[#fff] font-[Valley] flex justify-center items-center gap-2 hover:scale-[0.9] cursor-pointer transition duration-200">Hire Me <img src={ArrowIcon} className='w-2.5 h-2.5 rotate-30'/></button>
                </div>
            </motion.nav>

            <Coffee />
        </div>
    )
}
