import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const projects = [
  {
    title: 'Block Events: Event Management App',
    description: 'An event management app where users can browse, post, register for events and get updates on events they have registered for. Built with Next.js, MongoDB Atlas and Node.js.',
    technologies: ['Next.js', 'Node.js', 'Tailwind CSS', 'MongoDB Atlas', 'Express.js'],
    image: '/images/blockevents_logo.png', // Placeholder for the project image
    link: '#',
    repo: "https://github.com/NebiyouBelaineh/block-events-backend"
  },
  {
    title: 'DishCovery: Recipe Finder Web App',
    description: 'A recipe finder app that takes in user\'s ingredients and dish preferences and returns a list of recipes',
    technologies: ['MySQL', 'Flask', 'Python', 'Javascript', 'Bootstrap', 'CSS'],
    image: '/images/dishcovery_logo.png', // Placeholder for the project image
    link: 'https://dishcovery-six.vercel.app/',
    repo: "https://github.com/NebiyouBelaineh/Dishcovery"
  },
  {
    title: 'Airbnb-Clone',
    description: 'An AirBnB clone built with Flask, Jinja2, CSS, and MySQL.',
    technologies: ['Flask', 'Python', 'MySQL'],
    image: '/images/hbnb.png', // Placeholder for the project image
    link: '#',
    repo: "https://github.com/NebiyouBelaineh/AirBnB_clone_v4"
  },
  {
    title: 'Keeper Note taking app',
    description: 'A note taking app that allows users to create, edit, and delete notes.',
    technologies: ['React.js', 'JavaScript', 'CSS'],
    image: 'https://picsum.photos/seed/picsum/200/300', // Placeholder for the project image
    link: '#',
    repo: "https://www.github.com"
  },
  {
    title: 'Portfolio Website',
    description: 'A personal portfolio website showcasing software engineering projects.',
    technologies: ['Next.js', 'TypeScript', 'Tailwind CSS'],
    image: '/images/landingPage.png', // Placeholder for the project image
    link: '#',
    repo: "https://github.com/NebiyouBelaineh/my-portfolio-v1"
  },
  // Add more projects as needed
];

const Projects: React.FC = () => {
  return (
    <section id="projects" className="py-20 bg-base-300 rounded text-white mb-10">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">My Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-neutral rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              <Image
                src={project.image}
                alt={project.title}
                className="w-full h-40"
                width={300}
                height={200}
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-neutral-content mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="bg-base-300 text-sm px-2 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className='text-accent-content rounded-md flex gap-x-2 bottom-0'>
                  <Link
                    href={project.link}
                    target="_blank"
                    className={project.link === '#' ? "hidden" :"bg-accent rounded px-2 py-2 hover:bg-info hover:scale-105 transition-colors"}
                  >
                    Demo
                  </Link>
                  <Link
                    href={project.repo}
                    target="_blank"
                    className="bg-accent rounded px-2 py-2 hover:bg-info hover:scale-105 transition-colors"
                    rel="noopener noreferrer"
                  >
                    Repo
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
