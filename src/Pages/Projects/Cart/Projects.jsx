import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import React from 'react';

const Projects = ({imgUrl,liveLink,repoLink,title}) => {
    
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{

    })
    return (
        <div className='border-[#1C222A] border-[3px] mb-[50px] w-full md:w-[380px] rounded-2xl shadow-xl pb-5 px-5 mr-6'>
            <div className='w-[full] md:h-[150px] scale-[1.12] rounded-lg h-[200px] mb-3 outline-none overflow-hidden'>
                <img className='w-full h-full rounded-lg' src={imgUrl} />
            </div>
            <div className='w-full h-[30px] text-center text-white my-3 pt-2 capitalize italic'>
                <h3 className=' font-normal'>{title}</h3>
            </div>
            <div className='flex justify-around'>
                <a href={liveLink} target='_blank'>
                    <div className='w-[100px] md:w-[80px] md:h-[30px] md:text-[#515151] h-[40px] bg-[#88B8F4] rounded-lg flex justify-center items-center md:text-[14px] shadow-md hover:shadow-[#5b79bf] shadow-[#312f453f] active:scale-110 cursor-pointer duration-150 ease-linear font-semibold'>
                        Live link
                    </div>
                </a>
                <a href={repoLink} target='_blank'>
                    <div className='w-[100px] md:text-[14px] md:w-[80px] md:h-[30px] md:text-[#515151] h-[40px] bg-[#88B8F4] rounded-lg flex justify-center items-center shadow-md hover:shadow-[#5b79bf] shadow-[#312f453f] active:scale-110 cursor-pointer duration-150 ease-linear font-semibold'>
                        Code link
                    </div> 
                </a>
            </div>
        </div>
    );
}

export default Projects;