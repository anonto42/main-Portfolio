import React, { Suspense } from 'react'
import Loader from '../../Components/Loader/Loader';
import { useSelector } from 'react-redux';
const Projects = React.lazy(()=>import('./Cart/Projects'));

const ProjectForTheHomePage = () => {

  const { projects } = useSelector( data => data.dataFetch ) 

  return (
    <div>
      <div className='min-h-[70vh] w-full'>
        <div className='flex justify-center items-center my-8 mb-16 md:mb-[80px] underline text-[#88B8F4] md:my-5 text-[30px] font-semibold'>
          <div className=''>Projects</div>
        </div>
        <div className='w-full h-auto flex justify-center flex-wrap'>
          <Suspense fallback={<Loader/>}>
            {
              projects.map( (e,i) => 
                <Projects key={i} title={e.title} imgUrl={e.frontImage} liveLink={e.liveLink} repoLink={e.sorceCode} />
              )
            }
          </Suspense> 
        </div>
      </div>
    </div>
  )
}

export default ProjectForTheHomePage