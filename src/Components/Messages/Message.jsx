import React from 'react'
import { ImBin } from "react-icons/im";

const Message = ( { email , name , work } ) => {
  return (
    <div className='w-full rounded-md min-h-[60px] bg-[#4285F4] mt-5'>
        {/* Information */}
        <div className='flex italic text-sm justify-around px-3 py-3 w-full text-white'>
            <div className='border-r w-[50%] border-white'>
                <h3>{name}</h3>
            </div>
            <div className=''>
                <h3>{email}</h3>
            </div>
        </div>
        {/* work message */}
        <div className='border-t border-white py-3 text-white text-xs font-[280] px-3'>
            <p>{work}.</p>
        </div>
        {/* Delete message */}
        <div className='w-full h-[50px] border-t border-white mt-3 flex justify-center items-center'>
            <div onClick={()=>console.log("Message was deleted")} className='text-white text-xl cursor-pointer active:scale-105 duration-100'>
                <ImBin />
            </div>
        </div>
    </div>
  )
}

export default Message