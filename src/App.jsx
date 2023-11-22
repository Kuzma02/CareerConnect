import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Login, Register, HomeLayout, Dashboard, Stats, AllJobs, AddJob, Profile } from "./pages";
import { ToastContainer } from 'react-toastify';

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Landing />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: 'profile',
        element: <Profile />
      },
      {
        path: "/dashboard",
        element: <Dashboard />,
        children: [
          {
            index: true,
            element: <Stats />
          },
          {
            path: 'all-jobs',
            element: <AllJobs />
          },
          {
            path: 'add-job',
            element: <AddJob />
          },
          
        ]
      },
    ],
  },
  
]);

function App() {
  return (
    <div>
       <RouterProvider router={router} />
       <ToastContainer position='top-center' />
    </div>
  )
}

export default App
