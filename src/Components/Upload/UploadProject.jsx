import axios from 'axios';
import React, { useState } from 'react';
import { IoIosDoneAll } from "react-icons/io";
import { toast } from 'react-toastify';

const UploadProject = () => {
    
    const [title , setTitle] = useState();
    const [liveLink , setLiveLink] = useState();
    const [sorceCode , setSorceCode] = useState();
    
    const [selectedFile, setSelectedFile] = useState();

    
    const uploadFrom = async ( props ) => {

        const frontImage = new FormData();
        frontImage.append('file', selectedFile);
        
        // props.preventDefault();
        
        const data = {
            title,
            liveLink,
            sorceCode,
            frontImage
        };

        try {
            
            await axios.post("/admin/uploadImage" , data );

            toast.success('Project Uploaded Successfully');

            setSelectedFile("");
            setTitle('');
            setLiveLink('');
            setSorceCode('');

        } catch (error) {
            toast.error("Your project upload failed")
            console.log(error);
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
                <input className='w-[130px] h-full rounded-md px-4 placeholder:text-[#a9c1e8]' name='frontImage' type="file" onChange={ (e) => setSelectedFile(e.target.files[0] ) } />
                {/* <IoIosDoneAll className={ !selectedFile ? 'text-[30px] text-transparent' : "text-green-700 text-[30px]"} /> */}
            </div>
            <div className='w-full h-full flex justify-center mt-10'>
                <button onClick={uploadFrom} className='h-[40px] w-[120px] bg-green-600 text-white rounded-md font-bold active:scale-105 duration-150'>Upload</button>
            </div>
        </form>
    </div>
  )
}

export default UploadProject