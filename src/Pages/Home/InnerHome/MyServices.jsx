import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import React from 'react';
import { DiIllustrator, DiLinux } from 'react-icons/di';
import { FaHandPointRight, FaLaptopCode } from "react-icons/fa";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const MyServices = () => {
    gsap.registerPlugin(ScrollTrigger);
    useGSAP(()=>{
        gsap.from(".text-topr",{
            y:20,
            opacity:0,
            duration:1.5,
            delay:0.2,
            scrollTrigger:{
                trigger:".text-topr",
                scroller:'body',
                start:'top 90%'
            }
        })
        gsap.from(".amination-services",{
            x:20,
            opacity:0,
            duration:1.5,
            delay:0.2,
            scrollTrigger:{
                trigger:".amination-services",
                scroller:'body',
                start:'top 60%'
            }
        })
        gsap.from(".amination-services2",{
            x:-20,
            opacity:0,
            delay:0.2,
            duration:1.5,
            scrollTrigger:{
                trigger:".amination-services2",
                scroller:'body',
                start:'top 60%'
            }
        })
        gsap.from(".amination-services3",{
            x:20,
            opacity:0,
            delay:0.2,
            duration:1.5,
            scrollTrigger:{
                trigger:".amination-services3",
                scroller:'body',
                start:'top 60%'
            }
        })
        gsap.from(".md_animation",{
            y:20,
            opacity:0,
            duration:1.5,
            delay:0.2,
            scrollTrigger:{
                trigger:".md_animation",
                scroller:'body',
                start:'top 90%'
            }
        })
        gsap.from(".md_animation2",{
            y:-20,
            opacity:0,
            duration:1.5,
            delay:0.2,
            scrollTrigger:{
                trigger:".md_animation2",
                scroller:'body',
                start:'top 90%'
            }
        })
        gsap.from(".md_animation3",{
            y:20,
            opacity:0,
            duration:1.5,
            delay:0.2,
            scrollTrigger:{
                trigger:".md_animation3",
                scroller:'body',
                start:'top 90%'
            }
        })
    })
  return (
    <div className='min-h-[80vh] md:min-h-[300px] w-full text-white'>
        <div className='w-full flex justify-center mt-20 mb-[50px] text-center text-topr'>
            <div>
                <h1 className='text-[30px] md:text-[40px] font-bold'>My Services</h1>
                <h4 className='text-[25px] md:text-[30px] font-semibold italic text-[#88B8F4] -mt-3'>What I Do</h4>
            </div>
        </div>
        <div className='md:flex justify-between lg:px-6 xl:px-20'>
            <div className='bg-[#1C222A] mb-[50px] md:hidden amination-services w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto relative'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <FaLaptopCode/>
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>MERN-Stack development</h1>
                    <p className='text-sm italic md:text-[12px]'>I will develope Front-End, Bank-End and Full-Stack Web-Application for any kind of Business or any outher region.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            <div className='bg-[#1C222A] md:hidden amination-services2 mb-[50px] w-full lg:w-[320px] md:w-[280px] md:mx-1 rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto relative'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <DiIllustrator />
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>vector design</h1>
                    <p className='text-sm italic md:text-[12px]'>Proficient in vector design, creating with Adobe Illustrator.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105 bottom-9 absolute'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            <div className='bg-[#1C222A] md:hidden amination-services3 mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 relative px-9 h-[340px] md:h-auto'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <DiLinux />
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>linux shell</h1>
                    <p className='text-sm italic md:text-[12px]'>
                        I have a deep understanding of Linux.
                    </p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] bottom-9 absolute md:h-[40px] border-[#88B8F4] hover:scale-105'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            {/* xl devices */}
            <div className='bg-[#1C222A] md_animation hidden md:block mb-[50px]
            w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto relative'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <FaLaptopCode/>
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>MERN-Stack development</h1>
                    <p className='text-sm italic md:text-[12px]'>I will develope Front-End, Bank-End and Full-Stack Web-Application for any kind of Business or any outher region.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            <div className='md_animation2 bg-[#1C222A] md:block mb-[50px] w-full lg:w-[320px] md:w-[280px] md:mx-1 rounded-2xl shadow-xl py-9 px-9 h-[340px] md:h-auto relative hidden'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <DiIllustrator />
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>vector design</h1>
                    <p className='text-sm italic md:text-[12px]'>Proficient in vector design, creating with Adobe Illustrator.</p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] md:h-[40px] border-[#88B8F4] hover:scale-105 bottom-9 absolute'>
                        <h5 className='text-[18px] md:text-[15px] font-bold'>Poke Me</h5>
                        <FaHandPointRight className='text-[#88B8F4] text-[25px] md:text-[20px] ml-3' />
                    </div>
                </a>
            </div>
            <div className='bg-[#1C222A] md_animation3 md:block mb-[50px] w-full lg:w-[320px] md:w-[280px] rounded-2xl shadow-xl py-9 relative px-9 h-[340px] md:h-auto hidden'>
                <div className='text-[80px] md:text-[60px] text-[#88B8F4]'>
                    <DiLinux />
                </div>
                <div>
                    <h1 className='uppercase my-2 text-[20px] md:text-[18px] font-bold'>linux shell</h1>
                    <p className='text-sm italic md:text-[12px]'>
                        I have a deep understanding of Linux.
                    </p>
                </div>
                <a href="/">
                    <div className='flex items-center border-2 w-[160px] justify-center h-[50px] rounded-xl mt-12 md:mt-5 md:w-[140px] bottom-9 absolute md:h-[40px] border-[#88B8F4] hover:scale-105'>
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