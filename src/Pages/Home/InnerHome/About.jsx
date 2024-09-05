import { useGSAP } from '@gsap/react'
import React, { useEffect, useState } from 'react'
import gsap from 'gsap'
import { BsEmojiSunglassesFill } from 'react-icons/bs'
import axios from 'axios'

const About = () => {

  useGSAP(()=>{
    gsap.from('.gsap_animation',{
      y:20,
      duration:1.5,
      delay:0.8,
      opacity:0
    });
  })

  const [projectsLenth , setProjects] = useState([]);

  useEffect(()=>{

    axios.get('https://backend-three-khaki-96.vercel.app/api/admin/getProjecs')
    .then( e => setProjects(e.data.length) )
    .catch( e => console.log(e) )

  },[]);

  console.log(projectsLenth)

  return (
    <div className='h-auto w-full'>
      <div className='w-full h-[380px] md:hidden border-[3px] border-[#80b4f4] rounded-full flex justify-center items-center py-4 overflow-hidden'>
        <img src="/Profile.png" className='sm:w-[80%] contrast-[1.25]' alt="" /> 
      </div>
      <div className='text-white mt-3 md:flex justify-between'>
        <div className='mb-3 md:w-[350px] lg:min-w-[400px] md:max-w-[600px] md:mt-[110px]'>
          <h3 className='text-[25px] gsap_animation font-semibold'>Hello, My Name Is</h3>
          <h1 className='text-[30px] gsap_animation font-bold'>Sohidul Islam Ananto</h1>
          <h2 className='text-[27px] gsap_animation gsap_animation font-bold text-[#80b4f4]'>I AM Web Developer</h2>
          <p className='gsap_animation'>I'm a MERN stack developer passionate about creating error-free, user-friendly websites that offer an excellent user experience. Coding is my craft, and I strive for perfection in every line. </p>
          <a href="/contact-me">
            <button id='' className='animation_up_down1 hover:bg-[#232323] bg-[#80b4f4] duration-300 ease-out hover:px-3 hover:text-white font-semibold text-[#1A1A33] px-1 py-2 w-[95px] rounded-xl text-[16px] shadow-md shadow-[#ffffff7b] my-[35px]'>Contact</button>
          </a>
        </div>
        <div>
          <div className='image hidden md:block'>
            <div className='w-[500px] h-[500px] rounded-full border-[3px] border-[#80b4f4] flex justify-center overflow-hidden relative'>
              <img src="/Profile.png" className=' contrast-[1.25] -saturate-[1.2]' alt="" />
              <BsEmojiSunglassesFill className=' hidden absolute top-[290px] left-[140px] border-2 shadow-md border-[#80b4f4] text-[#80b4f4] text-[40px] bg-white rounded-full' />
            </div>
          </div>
          <div id='' className='animation_up_down animation_up_down01 flex justify-center items-center w-[95%] h-[80px] border-[#80b4f4] border-[3px] rounded-[30px] md:absolute md:top-[450px] md:w-[100px] md:block md:-ml-[40px] md:px-8 md:bg-[#18182E] md:-mt-12 relative'>
            <h1 className='flex justify-center font-bold md:text-[17px] mt-[10px]'>{'1.6'}+</h1>
            <p className='font-semibold italic md:text-[10px] md:absolute left-[21px]'>Years of Experience</p>
          </div>
          <div id='' className='animation_up_down animation_up_down2 flex justify-center items-center w-[95%] mt-3 h-[80px] border-[#80b4f4] border-[3px] rounded-[30px] md:absolute md:top-[450px] md:w-[100px] md:block md:ml-[105px] md:px-8 md:bg-[#18182E] md:mt-16 relative'>
            <h1 className='flex justify-center font-bold md:text-[17px] mt-[10px]'>{projectsLenth}+</h1>
            <p className='font-semibold italic md:text-[10px] md:absolute left-[21px] bottom-3'>Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About