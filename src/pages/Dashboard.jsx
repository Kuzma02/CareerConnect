import React, { useEffect } from 'react'
import { DashboardMenu } from '../components'
import { Outlet, useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux';

const Dashboard = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useSelector((store) => store.user);

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user]);

  return (
    <div>
      <DashboardMenu />
      <Outlet />
    </div>
  )
}

export default Dashboard