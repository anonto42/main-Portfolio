import React, { Suspense, useEffect, useState } from 'react'
import MyServices from './InnerHome/MyServices'
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'
const Form = React.lazy(()=>import( '../../Components/Contact/Form'))
const AboutMeForHome = React.lazy(()=> import( '../Aboutme/AboutMeForHome'))
const Contact = React.lazy(()=> import('./InnerHome/Contact' ))
const About = React.lazy(()=> import('./InnerHome/About' ))
const Layout = React.lazy(()=> import('../Layout/Layout' ))
const ProjectForHomePage = React.lazy(()=> import('./../Projects/ProjectForTheHomePage' ))

const Home = () => {

  const [projectsLenth , setProjects] = useState([]);

  useEffect(()=>{

    axios.get('https://main-porthfolio-backend.vercel.app/api/admin/getProjecs')
    .then( e => setProjects(e.data.length) )
    .catch( e => console.log(e) )

  },[]);

  return (
    <Layout>
      <Suspense fallback={<Loader />} >
        <About projectsLenth={projectsLenth}/>
        <MyServices/>
        <ProjectForHomePage />
        <AboutMeForHome />
        <Contact />
        <Form />
      </Suspense>
    </Layout>
  )
}

export default Home