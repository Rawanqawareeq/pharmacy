import React, { useEffect, useState } from 'react'
import {createBrowserRouter,Navigate,RouterProvider, useNavigate,} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import Register from './compomnent/web/register/Register.jsx';
import Home from './compomnent/web/home/Home.jsx';
import Login from './compomnent/web/login/Login.jsx';
import Categories from './compomnent/web/categories/Categories.jsx';
import Dashboardlayout from './compomnent/layout/Dashboardlayout.jsx';
import Homedashboard from './compomnent/dashboard/home/Home.jsx'
import Categoriesdashboard from './compomnent/dashboard/categories/Categories.jsx'
import Layout from './compomnent/layout/Layout.jsx'; 
import { jwtDecode } from 'jwt-decode';
export default function App() {
  const [user,setUser]= useState(null)
  
  const saveCurrentUser =()=>{
    const token = localStorage.getItem('userToken')
    const decoded = jwtDecode(token)
    setUser( decoded )
  }
  const router = createBrowserRouter(
    [
      {
      path: '/',
      element: <Layout user={user}/>,
     
      children:[
        {
          path:'register',
          element:<Register/>
        },
        {
        index:true,
        element: <Home/>,
      },
      {
        path:'login',
        element: <Login saveCurrentUser={saveCurrentUser} setUser={setUser} />,
      },
      {
        path:'categories',
      element: <Categories/>,
    },
    { path:'*',
    element:<h2>404 page not found ... web </h2>,}
  ]},
    {
      path: '/dashboard',
      element: <Dashboardlayout/>,
      children:[
        {
        path:'home',
        element: <Homedashboard/>,
      },
      {
        path:'categories',
      element: <Categoriesdashboard/>,
    },
    { path:'*',
    element:<h2>404 page not found ... dashboard </h2>,}
  ]},]);
 
  useEffect(()=>{
    if(localStorage.getItem('userToken')){
      saveCurrentUser();
    } 
  },[])
  return (
    <RouterProvider router={router} />
  )
}
