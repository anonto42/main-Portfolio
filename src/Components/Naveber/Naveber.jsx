import { FaBars} from 'react-icons/fa6'

const Naveber = () => {
  return (
    <div className='relative w-full h-[] bg-[#ffff0000]'>
        <div>
            <div id='boxDrop' className='bg-[#80b4f4] shadow-md shadow-[#ffffff7b] w-[350px] sm:w-[530px] md:hidden h-[200px] rounded-md absolute left-3 -top-[00px] duration-200 ease-out'>
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
            <div className='md:hidden right-5 top-5 absolute w-[45px] h-[35px] cursor-pointer bg-[#80b4f4] shadow-md shadow-[#ffffff7b] rounded-xl flex justify-center items-center text-white text-[22px] font-thin'>
                <FaBars/>
            </div>
        </div>
        <div className='hidden md:block'>
            <div className='w-full h-[80px] flex text-white justify-between items-center px-5'>
                <div id='logo' className=''>
                    <a href="/">
                        <h1 className='flex relative uppercase font-bold italic text-[18px]'>sohidul Islam Ananto<div className='w-[3px] absolute bottom-1 -right-2 rounded-full h-[3px] bg-[#80b4f4]'></div></h1>
                    </a>
                </div>
                <div className='flex'>
                    <div className='bg-[] mr-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-[#80b4f4] hover:shadow-md hover:shadow-[#ffffff7b]'>Home</div>
                    <div className='bg-[] mx-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-[#80b4f4] hover:shadow-md hover:shadow-[#ffffff7b]'>About Me</div>
                    <div className='bg-[] mx-4 w-[105px] h-[40px] flex justify-center items-center rounded-full hover:text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer hover:bg-[#80b4f4] hover:shadow-md hover:shadow-[#ffffff7b]'>Projects</div>
                    <div className='bg-[] ml-4 w-[105px] h-[40px] flex justify-center items-center rounded-full text-[#2e2e2e] text-[17px] font-semibold duration-150 ease-linear cursor-pointer bg-[#80b4f4] shadow-md shadow-[#ffffff7b]'>Say Hello</div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Naveber