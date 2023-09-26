import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Component/Root/Root';
import Home from './Component/Home/Home';
import Donation from './Component/Donation/Donation';
import Statistics from './Component/Statistics/Statistics';
import ErrorPage from './Component/ErrorPage/ErrorPage';
import Categories from './Component/Categories.jsx/Categories';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:'/',
        element: <Home></Home>,
        loader: () => fetch('/public/data.json')
      },

      {
        path:'/donation',
        element: <Donation></Donation>,
      },

      {
        path:'/statistics',
        element: <Statistics></Statistics>,
      },

      {
        path:'/category/:id',
        element: <Categories></Categories>,
        loader:() => fetch('/public/data.json')
      }

    ]
  },

  

]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
