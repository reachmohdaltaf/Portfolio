  import React from 'react'
  import { Link, Outlet } from 'react-router-dom'
  import { MdOutlineEmail } from "react-icons/md";
import { PiGithubLogo } from "react-icons/pi";
import { RiTwitterXFill } from "react-icons/ri";
import { RiLinkedinBoxLine } from "react-icons/ri";
import Navbar from './Navbar';

  const MainLayout = () => {
    return (
      <div className='lg:w-[55%] lg:mx-auto  p-5 w-full'>
        <Navbar/>
        <div className='mt-10'>
        <Outlet/>
        </div>
        <footer>
        <div className="flex items-center cursor-pointer justify-center gap-8 mt-10 mb-40">
    <Link to='https://mail.google.com/mail/?view=cm&fs=1&to=reachmohdaltaf@gmail.com' target='_blank'> <MdOutlineEmail size='24'/></Link>
    <Link to='https://github.com/reachmohdaltaf' target='_blank'><PiGithubLogo size='24'/></Link>
     <Link to='https://github.com/reachmohdaltaf' target='_blank'><RiTwitterXFill  size='24'/></Link>
    <Link to='www.linkedin.com/in/reachmohdaltaf' target='_blank'> <RiLinkedinBoxLine  size='24'/></Link>
     </div>
        </footer>
      </div>
    )
  }

  export default MainLayout