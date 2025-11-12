"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { motion } from 'framer-motion'
import { fadeInUp, scaleIn } from '@/utils/animations'

const Hero = () => {
  return (
    <section className='py-10 2xl:py-32 container max-w-7xl mx-auto px-4'>
        <div className='max-w-3xl mx-auto text-center'>
            <motion.div
            {...scaleIn}
            transition={{ delay: 0.2}}
            className='flex flex-col items-center mb-4'>
                <Image src="/profile.jpg" alt='image de profile' width={100} height={100} className='rounded-full mb-4 w-32 h-32 object-cover ring-2 ring-primary'></Image>
            </motion.div>
           
            <motion.h1 
            {...fadeInUp}
            transition={{ delay:0.3 }}
            className='text-2xl md:text-6xl font-bold mb-6'>Bonjour ! Je m&apos;appelle <span className='text-primary'>Stéphane Antoine</span>
            </motion.h1>
            
            <motion.p 
            {...fadeInUp}
            transition={{ delay:0.5 }}
            className='text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8'>Étudiant en 3ème année de BUT informatique à l&apos;<Link href="https://iut-lannion.univ-rennes.fr/" className='hover:text-primary'>IUT de Lannion</Link>, je recherche actuellement un stage en Data IA ou Dev web
            </motion.p>
            
            <motion.div 
            {...fadeInUp}
            transition={{ delay:0.6 }}
            className='flex justify-center space-x-4 mb-8'>
              <div className="flex items-center gap-4">
                <Link
                  href="https://www.linkedin.com/in/stephane-antoine-etudiant-iutlan/"
                  className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 flex items-center justify-center"
                >
                  <FaLinkedin />
                </Link>

                <Link
                  href="https://github.com/stephantoine"
                  className="text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300 flex items-center justify-center"
                >
                  <FaGithub />
                </Link>

                <Link
                  href="https://www.linkedin.com/in/stephane-antoine-etudiant-iutlan/details/featured/1762985693642/single-media-viewer/?profileId=ACoAAEy_M_gBghXZwrPgkyA7gZ1LQKUpdjBw-cE"
                  className="flex items-center gap-1 text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition duration-300"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 40 40"
                    className="h-[21px] w-auto"  // même taille visuelle que text-2xl
                    fill="none"
                  >
                    <path fill="currentColor" d="M4 4a4 4 0 0 1 4-4h16l12 12v24a4 4 0 0 1-4 4H8a4 4 0 0 1-4-4z" />
                    <path fill="#fff" d="m24 0 12 12h-8a4 4 0 0 1-4-4z" opacity=".3" />
                  </svg>
                  <span className="text-base font-medium">CV</span>
                </Link>
              </div>

            </motion.div>

            <motion.div 
            {...fadeInUp}
            transition={{ delay:0.7 }}
            className='flex flex-col md:flex-row justify-center gap-4'>
              <Link href='/about' className='bg-primary inline-block w-full md:w-auto text-white px-8 py-3 rounded-lg hover:bg-primary/80 transition-colors'>
                À propos
              </Link>
              <Link href='/contact' className='bg-gray-500 inline-block w-full md:w-auto text-white hover:text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-300 transition-colors'>
                Contactez-moi
              </Link>
            </motion.div>
        </div>
    </section>
  )
}

export default Hero
