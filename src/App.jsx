import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Login, Register, HomeLayout } from "./pages";
import { ToastContainer, toast } from 'react-toastify';

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
