import React from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Aboutme from './Pages/Aboutme/Aboutme'

function App() {

  return (
    <BrowserRouter>
      <Routes >
        <Route path='/' element={<Home/>} />
        <Route path='/aboute/me' element={<Aboutme/>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
