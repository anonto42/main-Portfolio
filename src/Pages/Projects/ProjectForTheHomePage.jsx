import React, { Suspense, useEffect, useState } from 'react'
import Layout from './../Layout/Layout';
import Projects from './Cart/Projects';
import axios from 'axios';
import { data } from 'autoprefixer';
import Loader from '../../Components/Loader/Loader';

const ProjectForTheHomePage = () => {

  const [ProjectsData, setData] = useState([]);

  useEffect(()=>{
    axios.get("https://main-porthfolio-backend.vercel.app/api/admin/getProjecs")
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
    <div>
      <div className='min-h-[100svh] w-full'>
        <div className='flex justify-center items-center my-8 mb-16 md:mb-[80px] underline text-[#88B8F4] md:my-5 text-[30px] font-semibold'>
          <div className=''>Projects</div>
        </div>
        <div className='w-full h-auto flex justify-center flex-wrap'>
          <Suspense fallback={<Loader/>} >
            {
              ProjectsData.map( (e,i) => <Suspense fallback={<Loader/>}>
                <Projects key={i} title={e.title} imgUrl={e.frontImage} liveLink={e.liveLink} repoLink={e.sorceCode} />
              </Suspense> 
              )
            }
          </Suspense>
        </div>
      </div>
    </div>
  )
}

export default ProjectForTheHomePage