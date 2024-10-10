import { useState } from 'react'
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Routes from './Routes'
function App() {
  const router=createBrowserRouter(Routes)
  return (
    <>
    <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App
