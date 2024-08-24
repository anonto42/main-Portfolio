import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { ImBin } from 'react-icons/im'

const ProjectAdmin = ({title,_id,index}) => {
  
  const  [ data , setDIT] = useState();

    let Submit = async (e) => {

      e.preventDefault();

      try {

        await axios.post('/admin/deleteProject', {data} )

      } catch (error) {
        console.log(error);
      }
    }

  return (
    <div className='w-full text-white border-[#4285F4] border rounded mt-3 h-[40px] flex justify-around relative items-center'>
        <h1 className='absolute left-3'>{index}.</h1> {/* Index */}
        {/* title */}
        <div className='flex justify-around items-center h-full max-w-[300px]'>
            <h1 className='italic uppercase font-[300] text-sm'><small className='text-sm font-normal'>Title : </small>{title}</h1>
        </div>
        {/* id will visibal when you in pc or 2xl devices */}
        <div className='hidden xl:block text-sm'>
            <h1 className='italic uppercase font-[300] text-sm'><span className='text-sm font-normal'> _id : </span> {_id}</h1>
        </div>
        {/* delete button for delete projects */}
        <form  method="post">
            <button onClick={ e => { setDIT(title) ; Submit() }}  className='active:scale-90 duration-150 hover:text-red-700 cursor-pointer'> <ImBin /> </button>
        </form>
    </div>
  )
}

export default ProjectAdmin