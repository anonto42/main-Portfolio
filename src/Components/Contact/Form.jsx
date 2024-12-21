import React, { useState } from 'react'
import { FaLocationDot } from 'react-icons/fa6';
import { MdEmail } from 'react-icons/md';
import axios from 'axios';
import { toast } from 'react-toastify';

const Form = () => {

  const [ name , setName ] = useState();
  const [ email , setEmail ] = useState();
  const [ message , setMessage ] = useState();

  const DATA = {
    name,
    email,
    message
  }

  const Submit = async ( params ) => {

    params.preventDefault();

    try { 

      const respons = await axios.post("https://main-porthfolio-backend.vercel.app/api/admin/messageSend" , DATA )
      
      console.log(respons.data)

      setName('');
      setEmail('');
      setMessage('');

      toast.success(respons.data.message);

    } catch (error) {
      console.log(error)
    }
  }


  return (
    <>
      <div className='w-full h-auto text-white md:text-center'>
        {/* contact */}
       <div className='mb-6'>
        <div className='text-center'>
          <h1 className='text-[38px] font-semibold'>CONTACT</h1>
          <h2 className='text-[20px] font-semibold text-[#88B8F4] -mt-3'>Let's Talk About Business</h2>
        </div>
       </div>
       {/* address info */}
       <div>
        <div className='mb-4'>
          <div className='flex md:justify-center items-center text-xl font-semibold'>
            <FaLocationDot className='mr-2 text-[#88B8F4]' />
            <h1>Address</h1>
          </div>
          <p className='text-sm font-thin'>Narayanganj,Siddhirgonj</p>
        </div>
        <div className='mb-4'>
          <div className='flex md:justify-center items-center text-xl font-semibold'>
            <MdEmail className='mr-2 text-[#88B8F4]' />
            <h1>Email</h1>
          </div>
          <p className='text-sm font-thin'>anontom90@gmail.com</p>
        </div>
       </div>
       {/* from */}
       <form action='POST' >
        <div className='w-full mb-4'>
          <h1 className='font-thin'>Your name</h1>
          <input placeholder='Your Name' value={name} onChange={ e => setName(e.target.value) } type="text" className='w-full md:w-[700px] outline-none h-[60px] border bg-[#141427] rounded-full px-4 mt-3 placeholder:font-serif'/>
        </div>
        <div className='w-full mb-4'>
          <h1 className='font-thin'>Your email</h1>
          <input placeholder='Your Email' value={email} onChange={ e => setEmail(e.target.value) } type="email" className='w-full md:w-[700px] outline-none h-[60px] border bg-[#141427] rounded-full px-4 mt-3 placeholder:font-serif'/>
        </div>
        <div className='w-full mb-4'>
          <h1 className='font-thin'>What do you want to do</h1>
          <textarea rows={7} cols={40} placeholder='Write here...' value={message} onChange={ e => setMessage(e.target.value) } type="text" className='w-full outline-none md:w-[700px] py-2 border bg-[#141427] rounded-xl px-4 mt-3 placeholder:font-serif'/>
        </div>
        <button onClick={Submit} className='bg-[#88B8F4] text-[#141427] font-bold px-5 py-4 rounded-xl text-md mb-4 active:scale-105 duration-150 ease-in-out'>Send Message</button>
        {/* <input type='supmit' value={"Send Message"} className='bg-[#88B8F4] text-[#141427] font-bold px-5 py-4 rounded-xl text-md mb-4 active:scale-105 duration-150 ease-in-out' /> */}
       </form>
      </div>
    </>
  )
}

export default Form