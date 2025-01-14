import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import React from 'react'
import { MdOutlineArrowOutward } from "react-icons/md";







const Home = () => {
  return (
    <div className="flex flex-col gap-5">
     <div className="aboutme">
     <h1 className='font-serif '>Sup, I'm Altaf 👋</h1>
     <p className='mt-2 '>I’m a Full Stack Web Developer from Himachal Pradesh, India trying to make the internet a bit cooler one website at a time.</p>
     </div>
     <Separator/>
     <div>
     <h1 className='font-medium'>Professional  work</h1>
     <h4 className='mt-3 leading-7'>I specialize in creating user-friendly digital experiences. Designed and developed full-stack web applications featuring <Button variant="outline" className="">RESTful APIs</Button>, user authentication, and dynamic front-end components.
     Debugged intricate issues, optimized code performance, and adhered to industry best practices for scalable and efficient solutions.</h4>
     </div>
     <Separator/>
     <div>
     <h1 className='font-medium'>Leadership & Community</h1>
     <h4 className='mt-3 leading-7'>As the Lead Organizer of the <Button variant="outline">Tech Fest</Button> at <span>SGGSJ College</span>, I honed my leadership and organizational skills by coordinating a large-scale event that brought together students, educators, and tech enthusiasts. I managed event planning, delegated responsibilities, and ensured smooth execution of activities. The fest featured competitive programming, workshops, and innovative project displays, fostering a collaborative and inspiring environment for all participants.</h4>
     </div>
     <Separator/>
     <div>
     <h1 className='font-medium'>Personal Interests</h1>
     <h4 className='mt-3 leading-7'>Outside of work, I enjoy delving into psychology, exploring how the human mind works, and gaining new perspectives. I also cherish spending quality time with friends, which helps me unwind and stay connected. These interests keep me curious, grounded, and constantly learning.</h4>
     </div>
     <Separator/>
     <div>
     <h1 className='font-medium'>Writing</h1>
     <h4 className='mt-3 leading-7'>I’ve started writing <span className="underline">blogs</span>  to help others improve their engineering skills. Stay tuned for more content!</h4>
     </div>
     <Separator/>
     <div>
     <p className="text-xs">Press ⌘+K to navigate with your keyboard.</p>
     </div>
     <div className="text-sm">
    <p className="text-sm flex items-center"><MdOutlineArrowOutward className="size-4" /> <p  className="text-[16px]">Follow me</p></p>
    <h4 className="mt-3">📧 reachmohdaltaf@gmail.com</h4>
     </div>

   
     
    </div>
  )
}

export default Home