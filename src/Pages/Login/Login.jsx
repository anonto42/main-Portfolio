import React from 'react'

const Login = () => {
  return (
    <div className='w-full h-screen bg-[#121223] justify-center items-center flex'>
      <div className='w-[380px] h-[600px] bg-gray-500 rounded-2xl shadow-castom'>
        <div className='w-full h-[30%] flex justify-center items-center text-white font-semibold text-[20px]'>
          <h1 className=''>Admin Login</h1>
        </div>
        <div className='w-full h-[70%]'>
          <div>
            <input className='w-full my-5 h-[50px] px-3 outline-none' type='email' placeholder='Inter Admin Email'></input>
            <input className='w-full my-5 h-[50px] px-3 outline-none' type='password' placeholder='password'></input>
          </div>
          <div className='flex justify-center items-center px-24'>
            <button className='w-full h-[40px] bg-[#37d837] text-[16px] font-bold text-white mt-28 rounded-xl active:scale-105 duration-200 easy-in active:bg-[#498000]'>Login</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login