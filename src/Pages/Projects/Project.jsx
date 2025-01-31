import React, { Suspense } from 'react'
import Layout from './../Layout/Layout';
import Loader from '../../Components/Loader/Loader';
import { useSelector } from 'react-redux';
const Projects = React.lazy(()=> import( './Cart/Projects' ))

const Project = () => {

  const { projects } = useSelector( data => data.dataFetch ) 

  console.log(projects)

  return (
    <Layout>
      <div className='min-h-[10svh] w-full'>
        <div className='flex justify-center items-center my-8 mb-16 md:mb-[80px] underline text-[#88B8F4] md:my-5 text-[30px] font-semibold'>
          <div className=''>Projects</div>
        </div>
        <div className='w-full h-full flex justify-center flex-wrap'>
          <Suspense fallback={<Loader/>} >
            {
              projects.length != 0 ?(
               projects.map((e,i) =>
                <Projects key={i}   title={e.title} imgUrl={e.frontImage} liveLink={e.liveLink} repoLink={e.sorceCode} />
              )):(
              <>
                <Projects />
                <Projects />
                <Projects />
              </>)
              
            }
          </Suspense>
        </div>
      </div>
    </Layout>
  )
}

export default Project