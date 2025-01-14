import React from 'react'
import { Button } from '../components/ui/button'
import { Separator } from '../components/ui/separator';



const workExperiences = [
  {
    companyName: "Explorin",
    role: "MERN Stack Development Intern",
    location: "Roorkee, India",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQUnxUf4ilPQt9Ngg-vflPrNmkaOMiJ5GMBJA&s",
    skills: ["Next.js", "React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "Redux"],
    tasks: [
      "Completed a 60-day internship focused on the MERN stack, gaining expertise in React, Node.js, Express.js, and MongoDB alongside core web technologies like HTML, CSS, and JavaScript.",
      "Designed and developed full-stack web applications featuring RESTful APIs, user authentication, and dynamic front-end components, delivering scalable and efficient solutions for real-world use cases",
      "Collaborated with mentors and peers to debug intricate issues, optimize code performance, and adhere to industry best practices in full-stack application development.",
      "Exhibited strong skills in database architecture and management, ensuring secure, efficient, and reliable data handling for seamless application functionality"
    ],
  },
  // Add more experiences as needed
];

const Resume = () => {

 

  return (
    <div className="flex flex-col text-start gap-4">
      <h1 className="font-serif">My Resume 📝</h1>
      <h2 className="text-2xl mt-8 font-medium">Work Experience</h2>

      {workExperiences.map((experience, index) => (
        <div key={index} className="text-start">
          <div className="flex gap-3 items-center">
            <img src={experience.logo} className="h-5 w-5" alt={`${experience.companyName} logo`} />
            <h2 className="text-lg text-[#FFFF] underline">{experience.companyName}</h2>
          </div>
          <p className="text-sm">{`${experience.role}, ${experience.location}`}</p>
          <div className="gap-1 flex mt-3 flex-wrap">
            {experience.skills.map((skill, skillIndex) => (
              <Button key={skillIndex} variant="outline" className="p-3 rounded-lg bg-transparent">
                {skill}
              </Button>
            ))}
          </div>
          <ul className="mt-3 list-disc  p-5 text-gray-200">
            {experience.tasks.map((task, taskIndex) => (
              <li key={taskIndex} className="text-[#D4D4D4] mt-3 text-[16px]">
                {task}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <div className="education">
        <h2 className='text-2xl font-medium'>Education</h2>
       <div>
       <h3 className='text-xl font-medium mt-3 flex items-center gap-2'> <span className='text-[20px]'> SGGSJ Govt. College</span></h3>
       <p className='text-sm mt-1 '>Bachelor of Computer Applications | 2021 - 2024 | Himachal Pradesh, India</p>
       </div>
       <div>
       <h3 className='text-[20px] font-medium mt-3'>The Scholar's Home</h3>
       <p className='text-sm mt-1 '>10th |Paonta Sahib, Himachal Pradesh, India</p>
       </div>
      </div>
      <Separator/>
      <div className="education">
        <h2 className='text-2xl font-medium'>Volunteering</h2>
       <div className=''>
       <h3 className='text-xl font-medium mt-3 flex gap-3'> <img src='https://lh4.googleusercontent.com/-1Zc-ef5Sx4c4izK1LwjNzbT09bC4PM8o-lbwrtRT15gyF4bzf3q917B2oTY2IOthrQKxr1pTqyhsTOe2v2OSPY=w16383' className='h-6 bg-white rounded-full' alt="" /> <span className='underline'>TechSphere</span></h3>
       <p className='text-sm mt-1 '>Team lead | February 27 | Himachal Pradesh, India</p>
       <ul className='p-5 flex flex-col gap-4 list-disc text-gray-300'>
        <li>Successfully organized a three-day Tech Fest featuring workshops, quizzes, and cultural events.</li>
        <li>Led a team to coordinate logistics, scheduling, and participant engagement for 10+ events.Coordinated with speakers, judges, and volunteers to maintain seamless event operations.</li>
        <li>Demonstrated strong leadership and organizational skills, contributing to the festival’s success.</li>
       </ul>
       </div>
      </div>
    </div>
  );
};

export default Resume;
