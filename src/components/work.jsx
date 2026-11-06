import ProjectData from '../assets/data/project.json';

export default function Work() {
    return (
        <div className='w-full h-[100%] flex justify-center items-center'>
            <div className='w-full lg:w-320 h-full pt-20 pb-20 p-3'>

                <header className='flex justify-start items-end font-[Inter] gap-2'>
                    <span className='text-[13px] font-bold'>01</span>
                    <h3 className='text-[20px]'>Selected Projects</h3>
                </header>

                <div className='flex flex-col w-full mt-20'>
                    {
                        ProjectData.map((element, index) => {
                            return (
                                <li key={index} className='list-none pt-5 pb-5 flex flex-col items-start'>

                                    <div className='w-full flex justify-center items-center'>
                                        <div style={{ backgroundImage: `url(${element.img})`}} className='w-150 h-100 bg-cover bg-center'></div>
                                    </div>

                                    <h3>{element.title}</h3>
                                    <p>{element.description}</p>
                                </li>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}