import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <>
    <Navbar />
     

      <Outlet />
     <h1 className='mt-5 text-center bg-danger-subtle py-5'>Footer</h1>
      
    </>
  )
}

export default Layout
