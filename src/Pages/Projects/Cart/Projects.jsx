import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

const Projects = ({imgUrl,liveLink,repoLink,title}) => {
    
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{

    })
    return (
        <div className='bg-[#1C222A] mb-[50px] w-full md:w-[380px] rounded-2xl shadow-xl py-5 px-5 mr-6'>
            <div className='w-[full] md:h-[150px] rounded-lg h-[200px] mb-5 outline-none overflow-hidden'>
                <img className='w-full h-full rounded-lg' src={imgUrl} />
            </div>
            <div className='w-full h-[30px] text-center text-white mb-2 capitalize italic'>
                <h3 className='font-thin'>{title}</h3>
            </div>
            <div className='flex justify-around'>
                <a href={liveLink} target='blank'>
                    <div className='w-[100px] md:w-[80px] md:h-[30px] md:text-white h-[40px] bg-[#88B8F4] rounded-lg flex justify-center items-center md:text-[14px] shadow-md hover:shadow-purple-600 shadow-[#545071] active:scale-110 cursor-pointer duration-150 ease-linear font-semibold'>
                        Live link
                    </div>
                </a>
                <a href={repoLink}>
                    <div className='w-[100px] md:text-[14px] md:w-[80px] md:h-[30px] md:text-white h-[40px] bg-[#88B8F4] rounded-lg flex justify-center items-center shadow-md hover:shadow-purple-600 shadow-[#545071] active:scale-110 cursor-pointer duration-150 ease-linear font-semibold'>
                        Code link
                    </div> 
                </a>
            </div>
        </div>
    );
}

export default Projects;