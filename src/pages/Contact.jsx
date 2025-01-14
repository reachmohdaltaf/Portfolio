import React from 'react'
import { MdOutlineEmail } from 'react-icons/md'
import { Separator } from '../components/ui/separator'
import { Link } from 'react-router-dom'

const Contact = () => {
  return (
    <div className='flex flex-col gap-5'>
      <h1 className='fot-serif'>Contact 📧</h1>
      <p className=''>Feel free to reach out to me via email:</p>
      <p className='flex items-center text-sm'> <MdOutlineEmail size='24'/> <Link to='https://mail.google.com/mail/?view=cm&fs=1&to=reachmohdaltaf@gmail.com' className='underline text-white'>reachmohdaltaf@gmail.com</Link></p>
      <Separator/>
      <h2 className='text-xl font-medium font-serif'>Want to chat? Schedule a 1:1 with me!</h2>
      <span className='underline'>Schedule a meet</span>

    </div>
  )
}

export default Contact