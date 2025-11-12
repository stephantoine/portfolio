import React from 'react'
import { skills } from '@/contents/comp'
import { projects } from '@/contents/project'
import Image from 'next/image';
import Link from 'next/link';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

const num = 4; // indice de la compétence "Réaliser"

const Conduire = () => {
  const skill = skills[num];

  // On récupère les projets liés à cette compétence
  const relatedProjects = projects.filter((p) =>
    skill.projects.includes(p.handle)
  );

  return (
    <div className="container max-w-7xl mx-auto pt-10 pb-20 space-y-6">
      <div className= "text-2xl font-bold">
        {skill.number} – {skill.name} : {skill.description}
      </div>

      <div className='text-gray-800 dark:text-gray-400 space-y-6'>
        <p>{skill.details[0]}</p>

        <div className='space-y-2'>
          <p>{skill.details[1]}</p>

          <ul className='list-disc list-inside'>
            {skill.details.slice(2, 5).map((detail, index) => (
              <li key={index}>{detail}</li>
            ))}
          </ul>
        </div>

        <p>{skill.details[5]}</p>
      </div>

      <div>
          <h2 className='text-xl font-bold'>Quelques projets</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 pt-6">
                {relatedProjects.map((project) => (
                  <article 
                    key={project.title}
                    className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 ' style={{ border: `2px solid ${skill.color}` }}>
                        <div className="relative aspect-video mb-4 rounded-lg overflow-hidden">
                            <Image
                            src={project.image}
                            alt={project.title}
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-500"
                            sizes="(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw"
                            />
                        </div>

                        <h3 className='text-xl font-semibold mb-2'>{project.title}</h3>
                        <p className='text-gray-800 dark:text-gray-300 mb-2'>{project.type}</p>
                        <p className='text-gray-600 dark:text-gray-400 mb-4'>{project.description}</p>
                        
                        <div className='flex flex-wrap gap-2 mb-4'>
                            {
                                project.technologies.map((tech) => (
                                    <span key={tech} className='px-3 py-1 bg-primary/10 text-primary  rounded-full text-sm'>
                                        {tech}
                                    </span>
                                ))
                            }
                        </div>

                    <div className="flex gap-4 mt-2">
                            {project.githubLink != '' && (
                                <Link href={project.githubLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary/80 transition-colors" >
                                    <FaGithub className="w-4 h-4" />
                                    <span>Code</span>
                                </Link>
                            )}

                            {project.demoLink != '' && (
                                <Link href={project.demoLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary/80 transition-colors">
                                    <FaExternalLinkAlt className="w-4 h-4" />
                                    <span>Démo</span>
                                </Link>
                            )}
                        </div>

                    </article>
                ))}
          </div>
      </div>
    </div>
  )
}

export default Conduire
