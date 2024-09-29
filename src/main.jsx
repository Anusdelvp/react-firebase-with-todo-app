import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from './screens/Layout.jsx'
import Login from './screens/Login.jsx'
import Register from './screens/Register.jsx'
import Home from './screens/Home.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Layout/>,
    children:[
      
      
       {
        path:'/',
        element: <Login/>
       },
       {
        path:'Register',
        element: <Register />,
       },
       {
        path:'Home',
        element: <Home/>
       },
       
       
    ]
  },
  

])




createRoot(document.getElementById('root')).render(
 <RouterProvider router={router}>
    
  </RouterProvider>
)
