import React from 'react'
import { ImBin } from 'react-icons/im'

const ProjectAdmin = ({title,_id,index}) => {
  return (
    <div className='w-full text-white border-[#4285F4] border rounded mt-3 h-[40px] flex justify-around relative items-center'>
        <h1 className='absolute left-3'>{index}.</h1> {/* Index */}
        {/* title */}
        <div className='flex justify-around items-center h-full max-w-[300px]'>
            <h1 className='italic uppercase font-[300] text-sm'><small className='text-sm font-normal'>Name : </small>{title}</h1>
        </div>
        {/* id will visibal when you in pc or 2xl devices */}
        <div className='hidden xl:block text-sm'>
            <h1 className='italic uppercase font-[300] text-sm'><span className='text-sm font-normal'> _id : </span> {_id}</h1>
        </div>
        {/* delete button for delete projects */}
        <div className='active:scale-90 duration-150'> <ImBin /> </div>
    </div>
  )
}

export default ProjectAdmin