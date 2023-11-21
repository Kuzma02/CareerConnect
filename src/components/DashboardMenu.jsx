import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMenu = () => {
  return (
    <div className='dashboard-menu h-20 text-white text-3xl flex items-center justify-center gap-x-10 mt-10'>
        <Link to="/" className='hover:underline'>Stats</Link>
        <Link to="/" className='hover:underline'>All jobs</Link>
        <Link to="/" className='hover:underline'>Add a job</Link>
    </div>
  )
}

export default DashboardMenu