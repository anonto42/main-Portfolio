import React, { useState } from 'react'
import Layout from './../Layout/Layout';
import Projects from './Cart/Projects';
import { data } from '../../../data';

const Project = () => {
  return (
    <Layout>
      <div className='min-h-[100svh] w-full'>
        <div className='flex justify-center items-center my-8 mb-16 md:mb-[80px] underline text-[#88B8F4] md:my-5 text-[30px] font-semibold'>
          <div className=''>Projects</div>
        </div>
        <div className='w-full h-auto flex justify-center flex-wrap'>
          {
            data.map((e,index)=>{
              return <Projects key={index} imgUrl={e.photoUrl} liveLink={e.liveLink} repoLink={e.repoLink} />
          })
          }
          
        </div>
      </div>
    </Layout>
  )
}

export default Project