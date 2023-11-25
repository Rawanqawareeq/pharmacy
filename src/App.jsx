import React from 'react'
import {createBrowserRouter,RouterProvider,} from "react-router-dom";
import {router} from './compomnent/layout/router.jsx';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

export default function App() {
  return (
    <RouterProvider router={router} />
  )
}
