import { FaBars, FaBarsStaggered } from 'react-icons/fa6'

const Naveber = () => {
  return (
    <div className='relative w-full h-[225px] bg-[#ffff0000]'>
        <div id='boxDrop' className='bg-[#a4b12d] w-[350px] sm:w-[530px] md:hidden h-[200px] rounded-md absolute left-3 -top-[00px] duration-200 ease-out'>
            <a href="">
                <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Home</h3>
            </a>
            <a href="">
                <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>About Me</h3>
            </a>
            <a href="">
                <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Courses</h3>
            </a>
            <a href="">
                <h3 className='hover:bg-[#232323] duration-300 ease-out hover:px-3 hover:text-white font-semibold cursor-pointer px-1 my-2 py-2 w-[95%] mx-auto rounded-xl text-[16px]'>Say Hello</h3>
            </a>
        </div>
        <div className='right-5 top-5 absolute w-[45px] h-[35px] cursor-pointer bg-[#a4b12d] rounded-xl flex justify-center items-center text-white text-[22px] font-thin'>
            <FaBars/>
        </div>
    </div>
  )
}

export default Naveber