import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Root from './Component/Root.jsx'
import Home from './Component/Home.jsx'
import Statistics from './Component/Statistics.jsx'
import Applied from './Component/Applied.jsx'
import Blog from './Component/Blog.jsx'
import ErrorPage from './Component/ErrorPage.jsx'
import JobDescription from './Component/JobDescription.jsx'

const router =  createBrowserRouter([
  {
    path:"/",
    element:<Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    
    children:[

      {
        path:"/",
        element:<Home></Home>
      },
      {
        path:"/Statistics",
        element:<Statistics></Statistics>
      },
      {
        path:"/AppliedJobs",
        element:<Applied></Applied>
      },
      {
        path:"/Blog",
        element:<Blog></Blog>
      },
      {
        path:"/job/:id",
        element:<JobDescription></JobDescription>,
        loader: () =>  fetch("../jobs.json"),
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>,  
)
