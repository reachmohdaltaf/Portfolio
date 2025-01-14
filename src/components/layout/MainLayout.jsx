  import React from 'react'
  import { Outlet } from 'react-router-dom'
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
     <MdOutlineEmail size='24'/>
     <PiGithubLogo size='24'/>
     <RiTwitterXFill  size='24'/>
     <RiLinkedinBoxLine  size='24'/>
     </div>
        </footer>
      </div>
    )
  }

  export default MainLayout