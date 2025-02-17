import React from 'react'
import { Link, useLocation } from 'react-router-dom'

const Navbar = () => {
  const location = useLocation();

  const openPrint = () => {
    const pdfUrl = "https://drive.google.com/file/d/1dwN3iwdZs8L29RhD7zt3XNj-ilWA4phz/view?usp=sharing"; // Adjust path based on public folder
    const newWindow = window.open(pdfUrl, "_blank");
    if (newWindow) {
      newWindow.onload = () => newWindow.print();
    }
  };

  return (
    <div className='h-[4rem] sm:h-[4rem] md:h-[5rem] lg:h-[5rem] justify-between flex items-end'>
      <ul className='flex gap-4'>
        <Link to='/'><li>Home</li></Link>
        <Link to='/projects'><li>Projects</li></Link>
        <Link to='/resume'><li>Resume</li></Link>
        <Link to='/contact'><li>Contact</li></Link>
        <Link to='/blog'><li>Blog</li></Link>
      </ul>
      <div className='items-center justify-center '>
        {location.pathname === '/resume' && (
          <button onClick={openPrint} className="border-2 hidden md:block rounded-lg border-gray-500 hover:bg-gray-800 p-2">
            Print 🖨️
          </button>
        )}
      </div>
    </div>
  )
}

export default Navbar;
