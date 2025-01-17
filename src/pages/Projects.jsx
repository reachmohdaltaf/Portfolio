import React from 'react';
import { Button } from '../components/ui/button';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { Separator } from '../components/ui/separator';

const projectsData = [
  {
    id: 1,
    name: 'Connectify',
    description: 'A Social Media Application that connects people seamlessly.',
    logo: 'https://res.cloudinary.com/dqdwfvrkb/image/upload/v1737122025/193de76a-af5d-4396-9f54-1268385927f0.png', // Replace with the actual path to the logo
    technologies: ['React', 'Redux', 'Javascript', 'Node.js'],
    link: 'https://connectify-h8zy.onrender.com/', // Replace with the actual route or external URL
  },
  {
    id: 2,
    name: 'Chatify',
    description: 'Realtime Chat Application',
    logo: 'https://res.cloudinary.com/dqdwfvrkb/image/upload/v1736874770/logoipsum-225_sn1a7o.png',
    technologies: ['React.js', 'Express.js', 'MongoDB'],
    link: 'https://realtime-chat-application-6w8u.onrender.com/', // Replace with the actual route or external URL
  },
  {
    id: 3,
    name: 'Remote Job-Platform',
    description: 'Realtime Chat Application',
    logo: 'https://res.cloudinary.com/dqdwfvrkb/image/upload/v1736874908/logo_1_z2awvb.webp',
    technologies: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'TailwindCSS'],
    link: 'https://remote-jobs-platform.vercel.app/', // Replace with the actual route or external URL
  },
  {
    id: 4,
    name: 'Invozo',
    description: 'Invoice generator',
    logo: 'https://res.cloudinary.com/dqdwfvrkb/image/upload/v1736875118/Mediamodifier-Design-Template_anvekn.png',
    technologies: ['Next.js', 'Tailwind Css', 'React.js', 'Shadcn'],
    link: 'https://invozo-pges.vercel.app/', // Replace with the actual route or external URL
  },
  {
    id: 5,
    name: 'Expenzy',
    description: 'Expense Tracker helps you manage and track your personal finances',
    logo: 'https://res.cloudinary.com/dqdwfvrkb/image/upload/v1736875374/3bef4a45-ec8d-4d26-8cfe-f22b60230b52.png',
    technologies: ['React.js', 'Tailwind Css', 'Redux'],
    link: 'https://expenzy-kpsb.vercel.app/', // Replace with the actual route or external URL
  },
  {
    id: 6,
    name: 'Food',
    description: 'Product Catalog ',
    logo: 'https://res.cloudinary.com/dqdwfvrkb/image/upload/v1736875434/58ddac7d-e493-4d9d-bf91-776bf688e76f.png',
    technologies: ['React.js', 'Tailwind Css', 'Redux'],
    link: 'https://food-kohl-omega.vercel.app/', // Replace with the actual route or external URL
  },
 
];

const Projects = () => {
  return (
    <div>
      <h1 className='font-medium'>Projects 🚀</h1>

      {projectsData.map((project) => (
        <div key={project.id} className="flex mt-5 flex-col gap-4">
          <h4 className="flex items-center">
            <img src={project.logo} alt={`${project.name} logo`} className="h-6 w-6 mr-2" />
            <Link to={project.link} target='_blank'  className="font-semibold text-lg underline text-white">
              {project.name}
            </Link>
          </h4>
          <p className="text-sm">{project.description}</p>
          <div className="flex gap-2 flex-wrap">
            {project.technologies.map((tech, index) => (
              <Button key={index} variant="secondary" className="p-4 bg-transparent rounded-xl">
                {tech}
              </Button>
            ))}
          </div>
          <Separator/>
        </div>
      ))}
    </div>
  );
};

export default Projects;
