import React from 'react'
import { Link } from 'react-router-dom'

const DashboardMenu = () => {
  return (
    <div className='h-20 text-3xl border-y flex items-center justify-center gap-x-10 mt-10 max-sm:mt-32 max-sm:text-2xl'>
        <Link to="/dashboard" className='hover:underline'>Stats</Link>
        <Link to="all-jobs" className='hover:underline'>All jobs</Link>
        <Link to="add-job" className='hover:underline'>Add a job</Link>
    </div>
  )
}

export default DashboardMenu