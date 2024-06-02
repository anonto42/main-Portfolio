import React from 'react'
import Layout from '../Layout/Layout'
import About from './InnerHome/About'
import MyServices from './InnerHome/MyServices'

const Home = () => {
  return (
    <Layout>
        <About/>
        <MyServices/>
    </Layout>
  )
}

export default Home