import React from 'react'
import SpLoader from './SpLoader'

const Loader = () => {
  return (
    <div
        className='bg-transparent min-h-[100svh] w-full flex justify-center items-center text-center'
    >
        <SpLoader/>
    </div>
  )
}

export default Loader