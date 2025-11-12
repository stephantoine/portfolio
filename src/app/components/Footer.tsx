import React from 'react'
import Link from 'next/link'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
        <footer className='bg-white dark:bg-dark border-t border-gray-200 dark:border-gray-800'>
            <div className='container max-w-7xl mx-auto px-4 py-8'>
                <div className='flex flex-col md:flex-row justify-between items-center'>
                    <div className='mb-4'>
                        <Link href="/" className='text-xl font-bold text-primary'>
                            Portfolio&trade;
                        </Link>
                        
                        <p className='text-sm text-secondary mt-2'>Portfolio de Stéphane Antoine. Tous droits réservés. {new Date().getFullYear()}</p>
                    </div>
                    <div className='flex justify-center space-x-6'>
                        <Link href="https://github.com/stephantoine" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-duration-300'>
                            <FaGithub />
                        </Link>
                        <Link href="https://www.linkedin.com/in/stephane-antoine-etudiant-iutlan/" className='text-2xl text-gray-600 hover:text-primary dark:text-gray-300 transition-duration-300'>
                            <FaLinkedin />
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer