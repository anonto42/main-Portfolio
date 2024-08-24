import axios from 'axios';
import React, { useState } from 'react';
import { IoIosDoneAll } from "react-icons/io";
import { toast } from 'react-toastify';

const UploadProject = () => {
    
    const [title , setTitle] = useState();
    const [liveLink , setLiveLink] = useState();
    const [sorceCode , setSorceCode] = useState();
    const [selectedFile, setSelectedFile] = useState();

    
    
    
    
    
    const Submit = async ( params ) => {
        
        params.preventDefault();
        
        try {

            const frontImage = new FormData();
            frontImage.append('frontImage', selectedFile);
            
            console.log(selectedFile)
            console.log(frontImage)

            const DATA = {
                    title : title,
                    liveLink : liveLink,
                    sorceCode : sorceCode,
                    frontImage : frontImage
                }

                // Define the configuration for the request
                const config = {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                };
            
            const respons = await axios.post("/admin/messageSend" , DATA , config)
            
            console.log(respons.data)

            setName('');
            setEmail('');
            setMessage('');

            toast.success(respons.data.message);

        } catch (error) {
            console.log(error)
        }
    }


  return (
    <div className='w-full h-[440px] rounded-md mt-16 border overflow-hidden border-[#4285F4]'>
        <h1 className='text-white text-center py-3 capitalize underline text-[20px] xl:text-2xl mb-10'>Upload your Project</h1>
        <form action="POST">
            <div className='flex justify-center w-full h-[40px] mb-4'>
                <input className='w-[95%] h-full rounded-md px-4 placeholder:text-[#a9c1e8] text-white outline-none bg-[#232738]' value={title} onChange={ e => setTitle(e.target.value) } type="text" name="title" placeholder='Your Project Title' />
            </div>
            <div className='flex justify-center w-full h-[40px] mb-4' >
                <input className='w-[95%] h-full rounded-md px-4 placeholder:text-[#a9c1e8] outline-none text-white bg-[#232738]' value={liveLink} onChange={ e => setLiveLink(e.target.value) } type="text" name="liveLink" placeholder='Live link' />
            </div>
            <div className='flex justify-center w-full h-[40px] mb-4'>
                <input className='w-[95%] h-full rounded-md px-4 placeholder:text-[#a9c1e8] outline-none text-white bg-[#232738]' value={sorceCode} onChange={ e => setSorceCode(e.target.value) } type="text" name="sorceCode" placeholder='Sorce Code' />
            </div>
            <div className='flex justify-center w-full h-[40px] mt-12'>
                <label htmlFor="file">
                    <div className='w-[120px] h-full bg-red-800 rounded-2xl text-white flex justify-center items-center text-sm cursor-pointer'>Select Image</div>
                </label>
                <input id='file' className='bg-slate-300 hidden rounded-md px-4 placeholder:text-[#a9c1e8]' type="file" name='frontImage' onChange={ e => setSelectedFile( e.target.files[0] ) } />
                <IoIosDoneAll className={ !selectedFile ? 'text-[30px] text-transparent mt-1' : "text-green-700 text-[30px] mt-1"} />
            </div>
            <div className='w-full h-full flex justify-center mt-10'>
                <button onClick={Submit} className='h-[40px] w-[120px] bg-green-600 text-white rounded-md font-bold active:scale-105 duration-150'>Upload</button>
            </div>
        </form>
    </div>
  )
}

export default UploadProject