import React from 'react'
import SpLoader from './SpLoader'

const Loader = () => {
  return (
    <div
        className='bg-transparent h-full pt-[15vh] md:pt-[20vh] w-full flex justify-center items-center text-center'
    >
        <SpLoader/>
    </div>
  )
}

export default Loader