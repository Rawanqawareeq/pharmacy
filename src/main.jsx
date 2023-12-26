import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { ToastContainer } from 'react-toastify';
import {QueryClient,QueryClientProvider,useQuery} from 'react-query'
import 'react-toastify/dist/ReactToastify.css';

const queryClient = new QueryClient()

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <QueryClientProvider client={queryClient} >
        
         <ToastContainer/>
          <App />   
    </QueryClientProvider>
    </>
   
   
)
