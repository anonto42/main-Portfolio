import React from 'react'
import Layout from '../Layout/Layout'
import About from './InnerHome/About'
import MyServices from './InnerHome/MyServices'
import Contact from './InnerHome/Contact'

const Home = () => {
  return (
    <Layout>
        <About/>
        <MyServices/>
        <Contact />
    </Layout>
  )
}

export default Home