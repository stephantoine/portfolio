import React from 'react'
import { projects } from '@/contents/project'
import Image from 'next/image'
import Link from 'next/link'
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa'

const Projects = () => {
  return (
        <section className='py-20 container max-w-7xl mx-auto px-4'>
            <h2 className='text-3xl font-bold mb-12 text-center'>Principaux projets réalisés</h2>

            <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {
                     projects.map((projects) => (
                        <article key={projects.title} className='bg-white dark:bg-dark/50 rounded-lg shadow-md p-6 '>
                            <div className='relative aspect-video mb-4 rounded-lg overflow-hidden'>
                                <Image src={projects.image} alt={projects.title} fill 
                                className='object-cover' sizes='(max-width: 768px) 100vw, (max-width:1200px) 50vw, 33vw'/>
                            </div>

                            <h3 className='text-xl font-semibold mb-2'>{projects.title}</h3>
                            <p className='text-gray-800 dark:text-gray-300 mb-2'>{projects.type}</p>
                            <p className='text-gray-600 dark:text-gray-400 mb-4'>{projects.description}</p>
                            
                            <div className='flex flex-wrap gap-2 mb-4'>
                                {
                                    projects.technologies.map((tech) => (
                                        <span key={tech} className='px-3 py-1 bg-primary/10 text-primary rounded-full text-sm'>
                                            {tech}
                                        </span>
                                    ))
                                }
                            </div>

                           <div className="flex gap-4 mt-2">
                                {projects.githubLink && (
                                    <Link href={projects.githubLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary/80 transition-colors" >
                                        <FaGithub className="w-4 h-4" />
                                        <span>Code</span>
                                    </Link>
                                )}

                                {projects.demoLink && (
                                    <Link href={projects.demoLink} target="_blank" className="flex items-center gap-2 text-secondary hover:text-primary/80 transition-colors">
                                        <FaExternalLinkAlt className="w-4 h-4" />
                                        <span>Démo</span>
                                    </Link>
                                )}
                            </div>

                        </article>
                     ))
                }
            </div>
             <div className="text-center mt-12">
                <Link href="/projects" className="inline-block bg-primary text-white px-8 py-3 rounded-lg hover:bg-primary/90 transition-colors">
                    Voir tous les projets
                </Link>
            </div>
        </section>
    )
}

export default Projects