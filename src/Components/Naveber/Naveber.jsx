import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useState } from 'react'
import { FaHandPointRight } from 'react-icons/fa'
import { FaBars} from 'react-icons/fa6'

const Naveber = () => {

    const [nav,setNav]= useState(false);
    
    const navFunction=()=>{
        nav == false ? setNav(true) : setNav(false); 
    }


  return (
    <div className='relative w-full h-[] bg-[#ffff0000]'>
        <div className='h-[80px] w-full relative flex text-white justify-center items-center md:hidden px-5'> 
            <a href="/" className=''>
                <h1 className='flex relative uppercase font-bold italic text-[18px]'>sohidul Islam Ananto<div className='w-[3px] absolute bottom-1 -right-2 rounded-full h-[3px] bg-[rgb(128,180,244)]'></div></h1>
            </a>
        </div>
        <div className=''>
            <div className={nav == true ? 'bg-[#80b4f4] nav-container shadow-md shadow-[#ffffff7b] w-[350px] sm:w-[530px] md:hidden h-[200px] rounded-md fixed left-3 z-50 duration-200 ease-out top-2' : 'bg-[#80b4f4] nav-container shadow-md shadow-[#ffffff7b] w-[350px] sm:w-[530px] md:hidden h-[200px] rounded-md absolute left-3 z-50 duration-200 ease-out -top-[220px]'}>
                <a href="/">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Home</h3>
                </a>
                <a href="/aboute/me">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>About Me</h3>
                </a>
                <a href="/aboute/my-project">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Project</h3>
                </a>
                <a href="/contact-me">
                    <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Poke Me</h3>
                </a>
            </div>
            <div onClick={()=>navFunction()} className='md:hidden right-5 top-5 fixed w-[45px] h-[35px] cursor-pointer bg-[#80b4f4] shadow-md shadow-[#ffffff7b] z-50 rounded-xl flex justify-center items-center text-white text-[22px] font-thin active:scale-[1.35] duration-[1s]'>
                <FaBars/>
            </div>
        </div>
        <div className='hidden md:block w-full mx-auto'>
            <div className='w-full h-[80px] flex text-white justify-between items-center'>
                <div id='logo' className=''>
                    <a href="/">
                        <h1 className='flex relative uppercase font-bold italic text-[22px]'>sohidul Islam Ananto<div className='w-[3px] absolute bottom-1 -right-2 rounded-full h-[3px] bg-[#80b4f4]'></div></h1>
                    </a>
                </div>
                <div className='flex'>
                    <a href="/">
                        <div className='bg-[] mr-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-[#80b4f4] hover:shadow-md hover:shadow-[#ffffff7b]'>Home</div>
                    </a>
                    <a href="/aboute/me">
                        <div className='bg-[] mx-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-[#80b4f4] hover:shadow-md hover:shadow-[#ffffff7b]'>About Me</div>
                    </a>
                    <a href="/aboute/my-project">
                        <div className='bg-[] mx-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-[#80b4f4] hover:shadow-md hover:shadow-[#ffffff7b]'>Projects</div>
                    </a>
                    <a href="/contact-me">
                        <div className='bg-[] ml-4 w-[125px] h-[40px] flex justify-center items-center rounded-full text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer bg-[#80b4f4] shadow-md shadow-[#ffffff7b]'>Poke Me <FaHandPointRight className='ml-2' /></div>
                    </a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Naveber