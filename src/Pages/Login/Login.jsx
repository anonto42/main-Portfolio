import React, { useState } from 'react';
import { FaHome } from "react-icons/fa";

const Login = () => {
  const [email,setEmail] = useState('');
  const [pass,setPass] = useState('');
  const loginFun = () =>{
    if (email == "anontom90@gmail.com" && pass == "admin_login") {
      localStorage.setItem("sohidul-islam-ananto",JSON.stringify(true));
      window.location.href = '/login/admin';
    }else{
      // alert("Wrong Email or Password");
      console.log('some thing wrong');
    };
  };
  return (
    <div className='w-full h-screen bg-[#121223] justify-center items-center flex'>
      <div className='w-[380px] h-[600px] bg-gray-500 rounded-2xl shadow-castom relative'>
        {/* Home btn */}
        <div onClick={()=>{
          const homCon = confirm('Are you want to redirect to the home page?');
          if (homCon == true) {
            setTimeout(() => {
              window.location.href = '/';
            }, 300);
          }
        }} className='absolute bottom-6 right-6 text-2xl text-[white] shadow-lg shadow-[#00000089] active:scale-105 duration-150 ease-in-out cursor-pointer'>
          <FaHome />
        </div>
        <div style={{ textShadow: '1px 3px #000000'}} className='w-full h-[30%] flex justify-center items-center text-white font-semibold text-[25px]'>
          <h1 className=''>Admin Login</h1>
        </div>
        <div className='w-full h-[70%]'>
          <div className='px-3'>
            <input value={email} onChange={e=>setEmail(e.target.value)} className='w-full rounded-full shadow-md shadow-black my-5 h-[50px] px-3 outline-none' type='email' placeholder='Inter Admin Email'></input>
            <input value={pass} onChange={e=>setPass(e.target.value)} className='w-full shadow-md shadow-black rounded-full my-5 h-[50px] px-3 outline-none' type='password' placeholder='password'></input>
          </div>
          <div className='flex justify-center items-center px-24'>
            <button onClick={()=>loginFun()} className='w-full h-[40px] bg-[#37d837] text-[16px] font-bold text-white mt-28 rounded-xl active:scale-105 duration-200 easy-in active:bg-[#ff2f2f] shadow-md shadow-black'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login