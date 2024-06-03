import React from 'react';
import { FaHandPointRight, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { PiStudentDuotone } from 'react-icons/pi';

const Contact =()=>{
    return(
        <div className='min-h-[80vh] md:min-h-[300px] w-full text-white'>
        <div className='w-full flex justify-center mt-12 mb-[50px] text-center'>
            <div>
                <h1 className='text-[30px] md:text-[40px] font-bold'>Contact​</h1>
                <h4 className='text-[15px] md:text-[20px] font-semibold italic text-[#88B8F4] md:-mt-2'>Are You Looking For Your Business Online Presence? I am here. 🙂</h4>
            </div>
        </div>
        <div className='md:flex justify-between lg:px-6 xl:px-20'>
            <div className='bg-[#1C222A] mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto'>
                <div className='text-[80px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <FaUserTie />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>Sohidul Islam Ananto</h1>
                    <p className='text-[20px] italic font-semibold md:text-[12px]'>Web Developer (MERN)​</p>
                </div>
            </div>
            <div className='bg-[#1C222A] mb-[50px] w-full lg:w-[320px] md:w-[280px] md:mx-1 rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto '>
                <div className='text-[80px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <PiStudentDuotone />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>student</h1>
                    <p className='text-sm italic font-semibold md:text-[12px]'>CSE (ENROLLED).</p>
                </div>
            </div>
            <div className='bg-[#1C222A] mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto'>
                <div className='text-[80px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <MdMarkEmailRead />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>email</h1>
                    <p className='text-sm italic font-semibold md:text-[12px]'>anontom90@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Contact;