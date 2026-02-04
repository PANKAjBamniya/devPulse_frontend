import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Login from './pages/login/Login'
import Home from './pages/home/Home'
import Profile from './pages/profile/Profile'
import useGetUser from './hooks/useGetUser'
const App = () => {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App