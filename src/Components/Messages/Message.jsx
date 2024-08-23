import React from 'react'
import { ImBin } from "react-icons/im";

const Message = ( { email , name , work } ) => {
  return (
    <div className='w-full rounded-md min-h-[60px] bg-[#254c8962] mt-5'>
        {/* Information */}
        <div className='flex italic text-sm justify-around px-3 py-3 w-full text-white'>
            <div className=' w-[400px] text-center'>
                <h3>name : {name}</h3>
            </div>
            <div className='w-[400px] text-center'>
                <h3>email : {email}</h3>
            </div>
        </div>
        {/* work message */}
        <div className='border-t border-white py-3 text-white text-xs font-[280] px-3'>
            <p>{work}.</p>
        </div>
        {/* Delete message */}
        <div className='w-full h-[50px] border-t border-white mt-3 flex justify-center items-center'>
            <div onClick={()=>console.log("Message was deleted")} className='text-white hover:text-red-700 text-xl cursor-pointer active:scale-105 duration-100'>
                <ImBin />
            </div>
        </div>
    </div>
  )
}

export default Message