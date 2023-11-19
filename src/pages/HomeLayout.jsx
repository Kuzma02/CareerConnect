import React from 'react'
import { Outlet } from 'react-router-dom'
import { Header, Footer } from '../components'

const HomeLayout = () => {
  return (
    <>
    <Header />
    <Outlet />
    <Footer />
    </>
  )
}

export default HomeLayout