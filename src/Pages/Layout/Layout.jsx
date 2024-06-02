import React from 'react'
import Naveber from '../../Components/Naveber/Naveber'
import Footer from '../../Components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full h-auto from-[#111122] bg-gradient-to-b to-[#1a1a33]'>
      <div className='max-w-[1200px] mx-auto px-5 border-r border-l '>
        <Naveber />
        <div>{children}</div>
        <Footer />
      </div>
    </div>
  )
}

export default Layout