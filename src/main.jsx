import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import router from './routes/Routes.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div className='md:max-w-md lg:max-w-[1350px] mx-auto px-2 lg:px-0 font-[Roboto]'>
   <RouterProvider router={router}></RouterProvider>
   </div>
  </React.StrictMode>,
)
