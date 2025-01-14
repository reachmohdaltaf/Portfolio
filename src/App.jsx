import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home.jsx'
import Projects from './pages/Projects.jsx'
import Resume from './pages/Resume.jsx'
import Contact from './pages/Contact.jsx'
import Blog from './pages/Blog.jsx'
import MainLayout from './components/layout/MainLayout.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children:[
      {
        path: '/',
        element: <Home/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/resume',
        element: <Resume/>
      },
      {
        path: '/contact',
        element: <Contact/>
      },
      {
        path: '/Blog',
        element: <Blog/>
      },
    ]
  }
])

const App = () => {
  return (
    <RouterProvider router={router}/>
  )
}

export default App