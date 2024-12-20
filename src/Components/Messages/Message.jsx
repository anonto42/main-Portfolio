import axios from 'axios';
import React from 'react'
import { ImBin } from "react-icons/im";
import { toast } from 'react-toastify';

const Message = ( { email , name , work } ) => {

    const Submit = async ( params ) => {

        params.preventDefault();
    
        try { 
    
          const respons = await axios.post("https://main-porthfolio-backend.vercel.app/api/admin/deleteMessage" ,  { email : email } )
    
          toast.success(respons.data.message);
    
        } catch (error) {
          console.log(error)
        }
      }

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
            <form action="POST">
                <button onClick={Submit} className='text-white hover:text-red-700 text-xl cursor-pointer active:scale-105 duration-100'>
                    <ImBin />
                </button>
            </form>
        </div>
    </div>
  )
}

export default Message