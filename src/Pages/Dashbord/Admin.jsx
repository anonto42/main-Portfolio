import React from 'react';
import { IoLogOut } from "react-icons/io5";

const Admin = () => {
  const logOut = () =>{
    localStorage.removeItem('sohidul-islam-ananto')
    setTimeout(() => {
      window.location.href = '/login'
    }, 300);
  }
  return (
    <div className='h-svh w-full bg-[#121223]'>
      {/* Logout btn */}
      <div onClick={()=>logOut()} className='bg-[#88B8F4] w-[30px] h-[30px] rounded-lg flex justify-center items-center text-2xl text-white cursor-pointer fixed top-6 right-6 duration-150 ease-linear active:scale-105'>
        <IoLogOut />
      </div>
    </div>
  )
}

export default Admin