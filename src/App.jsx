import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Aboutme from './Pages/Aboutme/Aboutme'
import Project from './Pages/Projects/Project'
import Login from './Pages/Login/Login'
import PokeMe from './Pages/Poke/PokeMe';
import Admin from './Pages/Dashbord/Admin';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import NoPage from './Pages/notFoundPage/NoPage'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/aboute/me' element={<Aboutme/>} />
        <Route path='/aboute/my-project' element={<Project/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/contact-me' element={<PokeMe/>} />
        <Route path='/*' element={<NoPage/>} />
        <Route path='/login/admin' element={<RoutesForAdmin>
          <Admin/>
        </RoutesForAdmin>} />
      </Routes>
      {/* Toastyfy added */}
      <ToastContainer />
    </BrowserRouter>
  )
}

export default App


// Protected Routes function

export const RoutesForAdmin =({children})=>{
  const admin = JSON.parse(localStorage.getItem("sohidul-islam-ananto"));
  if(admin){
    return children;
  }else{
    return window.location.href = '/login';
  }
};
