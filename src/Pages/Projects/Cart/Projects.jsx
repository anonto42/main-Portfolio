import React, { useState } from 'react';
import { FaGithub } from "react-icons/fa";
import { FaLink } from "react-icons/fa6";

const Projects = ({imgUrl,liveLink,repoLink,title="Loading..."}) => {
    const [load,setLoad] = useState(false);
    return (
        <div className='border-[#1C222A] border-[3px] mb-[50px] w-full md:w-[380px] rounded-2xl shadow-xl pb-5 px-5 mr-6'>
            <div className='w-[full] md:h-[150px] scale-[1.12] rounded-lg h-[200px] mb-3 outline-none overflow-hidden relative'>
                <div
                    className={`absolute w-full h-full bg-white duration-150 ease-linear ${!load?"opacity-100":"opacity-0"}`}
                />
                <img 
                    className='w-full h-full rounded-lg' 
                    src={imgUrl} 
                    loading='lazy'
                    onLoad={()=>setLoad(true)}
                    />
            </div>
            <div className='w-full h-[30px] text-center text-white my-3 pt-2 capitalize italic'>
                <h3 className=' font-normal'>{title}</h3>
            </div>
            <div className='flex justify-around'>
                <a href={liveLink} target='_blank' title='Live link'>
                    <div className='w-[100px] md:w-[80px] md:h-[30px] h-[40px] bg-[#88B8F4] rounded-lg flex justify-center items-center md:text-[14px] shadow-md hover:shadow-[#5b79bf] shadow-[#312f453f] active:scale-110 cursor-pointer duration-150 ease-linear font-semibold'>
                        <FaLink className='text-[22px] text-[#1C222Av]' />
                    </div>
                </a>
                <a href={repoLink} target='_blank' title='Source code'>
                    <div className='w-[100px] md:text-[14px] md:w-[80px] md:h-[30px] h-[40px] bg-[#88B8F4] rounded-lg flex justify-center items-center shadow-md hover:shadow-[#5b79bf] shadow-[#312f453f] active:scale-110 cursor-pointer duration-150 ease-linear font-semibold'>
                        <FaGithub className='text-xl text-[#1C222Av]' />
                    </div> 
                </a>
            </div>
        </div>
    );
}

export default Projects;