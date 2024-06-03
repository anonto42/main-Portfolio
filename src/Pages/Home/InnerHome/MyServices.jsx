import React from 'react';
import { FaHandPointRight, FaLaptopCode } from "react-icons/fa";

const MyServices = () => {
  return (
    <div className='min-h-[80vh] w-full text-white'>
        <div className='w-full flex justify-center mt-12 mb-[50px] text-center'>
            <div>
                <h1 className='text-[30px] md:text-[40px] font-bold'>My Services</h1>
                <h4 className='text-[25px] md:text-[30px] font-semibold italic text-[#88B8F4] -mt-3'>What I Do</h4>
            </div>
        </div>
        <div className='md:flex justify-between lg:px-6 xl:px-20'>
            <div className='bg-[#1C222A] mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <FaLaptopCode/>
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>MERN-Stack development</h1>
                    <p className='text-sm italic font-semibold md:text-[12px]'>I will develope Front-End, Bank-End and Full-Stack Web-Application for any kind of Business or any outher region.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            <div className='bg-[#1C222A] mb-[50px] w-full lg:w-[320px] md:w-[280px] md:mx-1 rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <FaLaptopCode/>
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>MERN-Stack development</h1>
                    <p className='text-sm italic font-semibold md:text-[12px]'>I will develope Front-End, Bank-End and Full-Stack Web-Application for any kind of Business or any outher region.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            <div className='bg-[#1C222A] mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <FaLaptopCode/>
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>MERN-Stack development</h1>
                    <p className='text-sm italic font-semibold md:text-[12px]'>I will develope Front-End, Bank-End and Full-Stack Web-Application for any kind of Business or any outher region.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
        </div>
    </div>
  )
}

export default MyServices