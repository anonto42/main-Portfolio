import React from 'react';
import { FaHandPointRight, FaLaptopCode, FaUserTie } from 'react-icons/fa';
import { MdMarkEmailRead } from 'react-icons/md';
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { PiStudentDuotone } from 'react-icons/pi';
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Contact =()=>{
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.from('.box-of-animation',{
            x:-20,
            opacity:0,
            duration:1.5,
            scrollTrigger:{
                trigger:'.box-of-animation',
                start:"top 70%",
                scroller:"body"
            }
        });
        gsap.from('.box-of-animation2',{
            x:20,
            opacity:0,
            duration:1.5,
            scrollTrigger:{
                trigger:'.box-of-animation2',
                start:"top 80%",
                scroller:"body"
            }
        });
        gsap.from('.box-of-animation3',{
            x:-20,
            opacity:0,
            duration:1.5,
            scrollTrigger:{
                trigger:'.box-of-animation3',
                start:"top 90%",
                scroller:"body"
            }
        });
        gsap.from(".contact-box",{
            y:20,
            opacity:0,
            duration:1.5,
            delay:0.2,
            scrollTrigger:{
                trigger:".contact-box",
                scroller:'body',
                start:'top 90%'
            }
        })
        gsap.from('.md_box',{
            y:-20,
            opacity:0,
            duration:1.5,
            scrollTrigger:{
                trigger:'.md_box',
                start:"top 90%",
                scroller:"body"
            }
        });
        gsap.from('.md_box2',{
            y:20,
            opacity:0,
            duration:1.5,
            scrollTrigger:{
                trigger:'.md_box2',
                start:"top 90%",
                scroller:"body"
            }
        });
        gsap.from('.md_box3',{
            y:-20,
            opacity:0,
            duration:1.5,
            scrollTrigger:{
                trigger:'.md_box3',
                start:"top 90%",
                scroller:"body"
            }
        });
    })
    return(
        <div className='min-h-[80vh] md:min-h-[300px] w-full text-white'>
        <div className='w-full flex justify-center mt-12 mb-[50px] text-center'>
            <div className="contact-box">
                <h1 className='text-[30px] md:text-[40px] font-bold'>Contact​</h1>
                <h4 className='text-[15px] md:text-[20px] font-semibold italic text-[#88B8F4] md:-mt-2'>Are You Looking For Your Business Online Presence? I am here. 🙂</h4>
            </div>
        </div>
        <div className='md:flex justify-between lg:px-6 xl:px-20'>
            <div className='bg-[#1C222A] md:hidden mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto box-of-animation'>
                <div className='text-[60px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <FaUserTie />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[18px] md:text-[18px] font-bold'>Sohidul Islam Ananto</h1>
                    <p className='text-[14px] italic font-semibold md:text-[12px]'>Web Developer (MERN)​</p>
                </div>
            </div>
            <div className='bg-[#1C222A] md:hidden box-of-animation2 mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto md:mx-1'>
                <div className='text-[60px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <PiStudentDuotone />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[18px] md:text-[18px] font-bold'>student</h1>
                    <p className='text-[14px] italic font-semibold md:text-[12px]'>CSE (ENROLLED)</p>
                </div>
            </div>
            <div className='bg-[#1C222A] md:hidden box-of-animation3 mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto'>
                <div className='text-[60px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <MdMarkEmailRead />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[18px] md:text-[18px] font-bold'>email</h1>
                    <p className='text-[14px] italic font-semibold md:text-[12px]'>anontom90@gmail.com</p>
                </div>
            </div>
            {/* md deivces */}
            <div className='bg-[#1C222A] hidden md:block mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto md_box'>
                <div className='text-[60px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <FaUserTie />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[18px] md:text-[18px] font-bold'>Sohidul Islam Ananto</h1>
                    <p className='text-[14px] italic font-semibold md:text-[12px]'>Web Developer (MERN)​</p>
                </div>
            </div>
            <div className='bg-[#1C222A] hidden md:block mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto md:mx-1 md_box2'>
                <div className='text-[60px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <PiStudentDuotone />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[18px] md:text-[18px] font-bold'>student</h1>
                    <p className='text-[14px] italic font-semibold md:text-[12px]'>CSE (ENROLLED)</p>
                </div>
            </div>
            <div className='bg-[#1C222A] hidden md:block mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 md:h-auto md_box3'>
                <div className='text-[60px] flex justify-center md:text-[45px] text-[#88B8F4]'>
                    <MdMarkEmailRead />
                </div>
                <div className='text-center'>
                    <h1 className='uppercase my-2 text-[18px] md:text-[18px] font-bold'>email</h1>
                    <p className='text-[14px] italic font-semibold md:text-[12px]'>anontom90@gmail.com</p>
                </div>
            </div>
        </div>
    </div>
    )
}
export default Contact;