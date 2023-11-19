import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { Landing, Login, Register, HomeLayout } from "./pages";

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
    </div>
  )
}

export default App
