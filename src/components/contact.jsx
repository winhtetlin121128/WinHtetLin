const Platform = ["Linkedin", "GitHub", "Whats App"];
import { React, useState } from 'react';
import emailjs from '@emailjs/browser';
import Arrow from '../../public/blackarrow.png';
import resume from '../../public/WinHtetLin.pdf';

export default function Contact({ContactRef}) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleToClipBoard = (e) => {
        const InputValue = e.target.innerText;
        navigator.clipboard.writeText(InputValue)

        e.target.innerText = "copied";


    }

    const LinkedinProfile = import.meta.env.VITE_LINKEDIN_URL;
    const WhatsAppProfile = import.meta.env.VITE_WHATSAPleaP_URL;
    const GitHubProfile = import.meta.env.VITE_GITHUB_URL;

    const handleProfile = (element) => {
        element === "Linkedin" ? window.open(LinkedinProfile) : ""
        element === "GitHub" ? window.open(GitHubProfile) : ""
        element === "Whats App" ? window.open(WhatsAppProfile) : ""
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const serviceId = 'service_vggnk98';
        const templateId = 'template_nc4qc6o';
        const publicKey = '2fBo-Xr0rugpoFSlV';

        const templateParams = {
            from_name: name,
            from_email: email,
            to_name : "Julian",
            message: message,
        }

        emailjs.send(serviceId, templateId, templateParams, publicKey)
            .then((response) => {
                console.log('Email sent successfully!', response);
                setName('');
                setEmail('');
                setMessage('');
            })
            .catch((error) => {
                console.error("Error sending email", error)
            })
    }

    return (
        <div ref={ContactRef} className="w-full h-[100%] flex justify-center items-center pt-10">
            <div className="w-full lg:w-320 pb-20 p-3">
                <header>
                    <div className='flex justify-start items-center gap-2'>
                        <span className='text-[11px] lg:text-[13px] font-bold font-[Silk]'>04</span>
                        <h3 className='text-[13px] lg:text-[20px] font-[Silk]'>Contact</h3>
                    </div>
                </header>
                
                <div className="flex flex-col lg:flex-row justify-center gap-10 lg:gap-0">
                    <section className="w-[100%] lg:w-[50%] h-[100%] flex flex-col items-center lg:items-start pt-10">
                        <h3 className="text-[30px] font-[Recursive] font-bold">Let's Work Together</h3>
                        <span className="text-[15px] font-[Inter] text-[#000]/60 text-center lg:text-start">The quickest way to reach me is email. I usually reply within a couple of days.</span>

                        <div className="flex flex-wrap w-[100%] lg:w-[60%] gap-2 text-[#000]/60 items-center justify-center lg:justify-start mt-10">
                            {
                                Platform.map((element, index) => {
                                    return (
                                        <span onClick={() =>  handleProfile(element)} key={index} className="border border-[#000]/20 pl-4 pr-4 pt-3 pb-3 font-[Inter] text-[13px] bg-[#fff] flex justify-center gap-1 items-center hover:text-[#000] cursor-pointer transition duration-200">{element} <img src={Arrow} className='w-2 h-2 rotate-30'/></span>
                                    )
                                })
                            }
                            <div className='flex gap-2'>
                                <span onClick={handleToClipBoard} className="border border-[#000]/20 pl-4 pr-4 pt-3 pb-3 font-[Inter] text-[13px] bg-[#fff]">+959757726914</span>
                                <span onClick={handleToClipBoard} className="border border-[#000]/20 pl-4 pr-4 pt-3 pb-3 font-[Inter] text-[13px] bg-[#fff]">winhtetlin162026@gmail.com</span>
                            </div>
                        </div>

                        <a href={resume} download='resume' className="border border-[#000]/20 pl-4 pr-4 pt-3 pb-3 font-[Inter] text-[13px] bg-[#0f2a47] text-[#fff] lg:mt-32 cursor-pointer hover:scale-[0.9] transition duration-200">Downlad Resume</a>
                    </section>
                    
                    <section className="w-[100%] lg:w-[50%] h-[100%] flex justify-center lg:justify-end items-center">
                        <form onSubmit={handleSubmit} className='w-120 h-120 border flex flex-col border-[#000]/20 bg-[#fff] shadow-lg font-[Inter] pl-5 pr-5 pt-7 pb-7 rounded-xl'>
                            <label className='text-[13px]'>Name</label>
                            <input 
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            type="text" placeholder='e.g. Win Htet Lin' className='text-[13px] border border-[#000]/20 h-13 pl-3 pr-3 mt-2 rounded-md'/>
                            
                            <label className='text-[13px] mt-5'>Email</label>
                            <input 
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            type="text" placeholder='winhtetlin@example.com' className='text-[13px] border border-[#000]/20 h-13 pl-3 pr-3 mt-2 rounded-md'/>
                            
                            <label className='text-[13px] mt-5'>Message</label>
                            <textarea 
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            type="text" placeholder='Describe about you want . . .' className='text-[13px] border border-[#000]/20 h-30 pl-3 pt-3 pr-3 mt-2 rounded-md resize-none'/>

                            <button className='text-[13px] bg-[#0f2a47] text-[#fff] h-10 rounded-md mt-5 active:scale-[0.9] transition duration-200 cursor-pointer'>Sumbit</button>
                        </form>
                    </section>
                </div>
            </div>
        </div>
    )
}