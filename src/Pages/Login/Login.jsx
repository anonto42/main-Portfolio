import axios from 'axios';
import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";
import { toast } from 'react-toastify';

const Login = () => {
  const [email,setEmail] = useState('');
  const DATA = {
    token: email
  }
  const submit = async (params) =>{
    params.preventDefault();
    try {

      toast.warning('Please wait...',{position:'top-center',autoClose:400});

      
      const respons = await axios.post("https://main-porthfolio-backend.vercel.app/api/admin/login" , DATA )

      localStorage.setItem('sohidul-islam-ananto',JSON.stringify(respons));

      console.log(respons)

      toast.success('Login Successfully! Redirecting to the admin panel...',{position:'top-center',autoClose:2000});

      setTimeout(()=>{
        window.location.href = 'login/admin'
      },2000)
    } catch (error) {
      toast.error('Something went wrong! Please try again.',{position:'top-center',autoClose:2000});
      console.log(error.message)
    }
  };
  return (
    <div className='w-full h-screen bg-[#121223] justify-center items-center flex'>
      <div className='w-[380px] h-[300px] bg-gray-500 rounded-2xl shadow-castom relative'>
        {/* Home btn */}
        <div onClick={()=>{
          const homCon = confirm('Are you want to redirect to the home page?');
          if (homCon == true) {
            setTimeout(() => {
              window.location.href = '/';
            }, 300);
          }
        }} className='absolute bottom-6 right-6 text-2xl text-[white] active:scale-105 duration-150 ease-in-out cursor-pointer'>
          <FaHome />
        </div>
        <div style={{ textShadow: '1px 3px #000000'}} className='w-full h-[30%] flex justify-center items-center text-white font-semibold text-[25px]'>
          <h1 className=''>Admin Login</h1>
        </div>
        <div className='w-full h-[70%]'>
            <form action='POST'>
          <div className='px-3'>
              <input value={email} onChange={e=>setEmail(e.target.value)} className='w-full rounded-full shadow-md shadow-black my-5 h-[50px] px-6 outline-none' type='text' placeholder='Inter the secret token'/>
          </div>
          <div className='flex justify-center items-center px-24'>
            <button onClick={submit} className='w-full h-[40px] bg-[#37d837] text-[16px] font-bold text-white mt-10 rounded-xl active:scale-105 duration-200 easy-in active:bg-[#ff2f2f] shadow-md shadow-black'>Login</button>
          </div>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Login