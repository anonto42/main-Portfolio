import React, { useEffect, useState } from 'react'
import Layout from './../Layout/Layout';
import Projects from './Cart/Projects';
import axios from 'axios';
import { data } from 'autoprefixer';

const Project = () => {

  const [ProjectsData, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://backend-three-khaki-96.vercel.app/api/admin/getProjecs")
    .then(response => {
      const result = response.data;
      if (Array.isArray(result)) {
        setData(result);
      } else {
        console.error('Expected an array but got:', result);
      }
    })
    .catch( data => console.log(data));
  },[]);

  return (
    <Layout>
      <div className='min-h-[100svh] w-full'>
        <div className='flex justify-center items-center my-8 mb-16 md:mb-[80px] underline text-[#88B8F4] md:my-5 text-[30px] font-semibold'>
          <div className=''>Projects</div>
        </div>
        <div className='w-full h-auto flex justify-center flex-wrap'>
          {
            ProjectsData.map( (e,i) => <Projects key={i} title={e.title} imgUrl={e.frontImage} liveLink={e.liveLink} repoLink={e.sorceCode} />)
            // data.map((e,index) => <Projects key={index} imgUrl={e.photoUrl} liveLink={e.liveLink} repoLink={e.repoLink} />)
          }
        </div>
      </div>
    </Layout>
  )
}

export default Project