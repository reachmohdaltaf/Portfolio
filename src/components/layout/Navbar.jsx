import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
<div className='h-[3rem] sm:h-[3rem] md:h-[5rem] lg:h-[5rem] justify-between flex items-end'>
<ul className='flex gap-4'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
        <Link to='/resume'><li>Resume</li></Link>
        
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
      
      </ul>
     <div className='lg:flex hidden  items-center justify-center'>
     {location.pathname === '/resume' && (
          <button onClick={openprint} className="border-2 rounded-lg border-gray-500 hover:bg-gray-800 p-2">print 🖨️</button>
        )}
     </div>
    </div>
  )
}

export default Navbar