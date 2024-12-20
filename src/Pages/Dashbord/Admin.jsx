import React, { useEffect, useState } from 'react';
import { IoLogOut } from "react-icons/io5";
import Message from '../../Components/Messages/Message';
import ProjectAdmin from '../../Components/ProjectCartForAdminPage/ProjectAdmin';
import axios from 'axios';
import UploadProject from '../../Components/Upload/UploadProject';

const Admin = () => {

  const logOut = () =>{
    const confarmation =  confirm("Are you sure to log out your account");
    if(!confarmation) return;
    localStorage.removeItem('sohidul-islam-ananto')
    setTimeout(() => {
      window.location.href = '/login'
    }, 300);
  }

  const [ projects , setProject ] = useState([]);
  const [ messages , setMessage ] = useState([]);

  useEffect(()=>{

    axios.get("https://main-porthfolio-backend.vercel.app/api/admin/getMessages")
    .then( data => setMessage(data.data) )
    .catch( err => console.log(err) );

    // get data of messages

    axios.get("https://main-porthfolio-backend.vercel.app/api/admin/getProjecs")
    .then( data => setProject(data.data) )
    .catch( err => console.log(err) );

  },[]);


  return (
    <div className='w-full bg-[#121223] pb-14'>
      {/* Logout btn */}
      <div onClick={()=> logOut()} title='Logout' className='bg-[#88B8F4] w-[30px] h-[30px] rounded-lg flex justify-center items-center text-2xl text-white cursor-pointer fixed top-2 right-2 duration-150 ease-linear active:scale-105'>
        <IoLogOut />
      </div>
      {/* Header */}
      <div className='w-full text-white text-center pt-3 uppercase italic border-white border-b shadow-md shadow-black'>
        <h1 className='mb-2'>Admin Dashbord</h1>
      </div>
      {/* Get all the data from BackEnd */}
      <div className='px-4 w-full h-full'>
        {/* show messages and delete the message */}
        <div className='border-[#4285F4] border overflow-y-scroll my-3 w-full h-[320px] rounded-md'>
          {/* top name */}
          <div className='w-full border-[#4285F4] border-b-2 pb-3'>
            <h1 className='text-white text-sm xl:text-xl text-center mt-3'>Messages</h1>
          </div>
          {/* Messages */}
          <div className='w-full h-full flex justify-center '>
            <div className='w-[95%]'>
               {
                messages.map( ( e , i ) => <Message key={i} email={e.email} name={e.name} work={e.message} /> ) 
               }
            </div>
          </div>
        </div>
        {/* Upload Photos */}
        <div>
          <UploadProject />
        </div>
        {/* show project and add project and delete the project */}
        <div className='border-[#4285F4] border overflow-y-scroll my-3 w-full h-[320px] rounded-md mt-16'>
          {/* top name */}
          <div className='w-full border-[#4285F4] border-b-2 pb-3'>
            <h1 className='text-white text-sm xl:text-xl text-center mt-3'>Projects</h1>
          </div>
          {/* Messages */}
          <div className='w-full h-full flex justify-center '>
            <div className='w-[95%]'>
               {
                projects.map( ( e, i ) => <ProjectAdmin key={i} title={e.title} _id={e._id} index={ ( i + 1 ) } /> ) 
               }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Admin