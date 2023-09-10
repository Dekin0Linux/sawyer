import React from 'react'
import { Outlet, Routes,Route,Router } from 'react-router-dom'
import Sidebar from '../components/Sidebar'

const Layout = ({ children }) => {
  return (
    <div className="flex h-screen w-screen font-lato">
      <Sidebar />
      <Outlet /> {/* This is where nested routes will be rendered */}
    </div>
  )
}

export default Layout