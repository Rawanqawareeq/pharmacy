import Layout from './Layout.jsx';
import Home from '../web/home/Home.jsx';
import Homedashboard from '../dashboard/home/Home.jsx';
import Categories from '../web/categories/Categories.jsx';
import Categoriesdashboard from '../dashboard/categories/Categories.jsx';
import Dashboardlayout from './Dashboardlayout.jsx';
import { createBrowserRouter } from 'react-router-dom';
import Register from '../web/register/Register.jsx';
export const router = createBrowserRouter(
    [
      {
      path: '/',
      element: <Layout/>,
     
      children:[
        {
          path:'register',
          element:<Register/>
        },
        {
        path:'home',
        element: <Home/>,
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
  ]},
  
    
  ]);