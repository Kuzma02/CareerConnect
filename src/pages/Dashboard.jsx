import React from 'react'
import { DashboardMenu } from '../components'
import { Outlet } from 'react-router-dom'

const Dashboard = () => {
  return (
    <div>
      <DashboardMenu />
      <Outlet />
    </div>
  )
}

export default Dashboard