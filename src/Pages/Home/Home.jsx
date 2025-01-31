import React, { Suspense } from 'react'
import MyServices from './InnerHome/MyServices'
import Loader from '../../Components/Loader/Loader'
import { useSelector } from 'react-redux'
const Form = React.lazy(()=>import( '../../Components/Contact/Form'))
const AboutMeForHome = React.lazy(()=> import( '../Aboutme/AboutMeForHome'))
const Contact = React.lazy(()=> import('./InnerHome/Contact' ))
const About = React.lazy(()=> import('./InnerHome/About' ))
const Layout = React.lazy(()=> import('../Layout/Layout' ))
const ProjectForHomePage = React.lazy(()=> import('./../Projects/ProjectForTheHomePage' ))

const Home = () => {


  const { projects } = useSelector( data => data.dataFetch )

  return (
    <Layout>
      <Suspense fallback={<Loader />} >
        <About projectsLenth={projects.length}/>
        <MyServices/>
        <AboutMeForHome />
        <ProjectForHomePage />
        <Contact />
        <Form />
      </Suspense>
    </Layout>
  )
}

export default Home