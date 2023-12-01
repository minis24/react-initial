import { FC } from 'react'
import './App.css'


import router from '@/app/router';
import { RouterProvider } from 'react-router-dom';


const App : FC = () => {

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
