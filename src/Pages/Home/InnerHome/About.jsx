import React from 'react'

const About = () => {

  return (
    <div className='h-auto w-full'>
      <div className='w-full h-[500px] md:hidden bg-[gray] rounded-full'>
        <img src="" alt="" /> 
        {/* i should add an image in heare */}
      </div>
      <div className='text-white mt-3 md:flex justify-between'>
        <div className='mb-3 md:w-[350px] lg:min-w-[400px] md:max-w-[600px] md:mt-[110px]'>
          <h3 className='text-[25px] font-semibold'>Hello, My Name Is</h3>
          <h1 className='text-[30px] font-bold'>Sohidul Islam Ananto</h1>
          <h2 className='text-[27px] font-bold text-[#80b4f4]'>I AM Web Developer</h2>
          <p>From Dhaka, Bangladesh. I’m a Front End Web developer who is passionate about making error-free websites. I am good at WordPress. I love to talk with you about your unique. </p>
          <a href="/">
            <button id='' className='animation_up_down1 hover:bg-[#232323] bg-[#80b4f4] duration-300 ease-out hover:px-3 hover:text-white font-semibold text-[#1A1A33] px-1 py-2 w-[95px] rounded-xl text-[16px] shadow-md shadow-[#ffffff7b] my-[35px]'>Contact</button>
          </a>
        </div>
        <div>
          <div className='image hidden md:block'>
            <div className='w-[500px] h-[500px] rounded-full border-2'>
              <img src="" alt="" />
            </div>
          </div>
          <div id='' className='animation_up_down animation_up_down01 flex justify-center items-center w-[95%] h-[80px] border-[#80b4f4] border-[3px] rounded-[30px] md:absolute md:top-[450px] md:w-[100px] md:block md:-ml-[40px] md:px-8 md:bg-[#18182E] md:-mt-12 relative'>
            <h1 className='mr-1 font-bold md:text-[17px] mt-[5px]'>{'12'}+</h1>
            <p className='font-semibold italic md:text-[10px] md:absolute left-[21px]'>Years of Experience</p>
          </div>
          <div id='' className='animation_up_down animation_up_down2 flex justify-center items-center w-[95%] mt-3 h-[80px] border-[#80b4f4] border-[3px] rounded-[30px] md:absolute md:top-[450px] md:w-[100px] md:block md:ml-[105px] md:px-8 md:bg-[#18182E] md:mt-16 relative'>
            <h1 className='mr-1 font-bold md:text-[17px] mt-[5px]'>{'102'}+</h1>
            <p className='font-semibold italic md:text-[10px] md:absolute left-[21px]'>Completed Projects</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About