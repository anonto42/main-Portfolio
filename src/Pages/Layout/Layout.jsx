import React from 'react'
import Naveber from '../../Components/Naveber/Naveber'
import Footer from '../../Components/Footer/Footer'

const Layout = ({children}) => {
  return (
    <div className='w-full h-svh from-[#111122] bg-gradient-to-b to-[#1a1a33] relative'>
        <Naveber />
        <div>{children}</div>
        <Footer />
    </div>
  )
}

export default Layout