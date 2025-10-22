"use client"

import { MoonIcon } from '@heroicons/react/24/outline';
import { SunIcon } from '@heroicons/react/24/outline';
import { XMarkIcon } from '@heroicons/react/16/solid';
import { Bars3Icon } from '@heroicons/react/16/solid';
import { div } from 'framer-motion/client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'
import { useTheme } from '../context/ThemeContext';

const Navbar = () => {
    const {theme, toggleTheme} = useTheme();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false);
    const pathname = usePathname();
    const toggleMobileMenu = () => {
        console.log("Toggle mobile menu")
        setIsMobileMenuOpen(!isMobileMenuOpen)
    }

    const menuItems = [
        { label: 'Accueil', href: '/' },
        { label: 'A propos', href: '/about' },
        { label: 'Projets', href: '/projects' },
        { label: 'Compétences', href: '/competences' },
        { label: 'Contact', href: '/contact' }
    ]

    return (
        <nav className='fixed w-full bg-white/80 dark:bg-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-700 shadow-sm transition-colors'>
            <div className='container max-w-7xl mx-auto px-4'>
                {/* Desktop Menu */}
                <div className='flex items-center justify-between h-16'>
                    <Link href="/" className='text-xl font-bold text-primary'>Portfolio&trade;</Link>

                    <div className='hidden md:flex items-center space-x-8'>
                        {
                            menuItems.map((item) => {
                                const isActive = pathname === item.href;
                                return(
                                    <Link key={item.href} href={item.href} className={`hover:text-primary 
                                    transition-colors font-medium ${isActive ? 'text-primary':""}`}>{item.label}</Link>
                                )
                            })   
                        }
        
                        <button onClick={toggleTheme} className='p-2 rounded-lg hover:bg-gray-100 dark:text-white hover:text-primary dark:hover:bg-gray-800 transition-colors cursor-pointer'>  
                            {
                                theme === "dark" ? (
                                    <SunIcon className='w-5 h-5'/>
                                ) : (
                                    <MoonIcon className='w-5 h-5'/>
                                )
                            }
                        </button>
                    </div>
                    <button 
                    onClick={toggleMobileMenu}
                    type='button'
                    className='md:hidden p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors cursor-pointer'>
                        {
                            isMobileMenuOpen ? (<XMarkIcon className='w-6 h-6'/>) : (<Bars3Icon className=  'w-6 h-6'/>)
                        }
                    </button>
                </div>

                {/* Mobile Menu */}
                {
                    isMobileMenuOpen && (
                        <div className='md:hidden'>
                            <div className='py-4 space-y-4'>
                                {
                                    menuItems.map((item, index) => (
                                        <div key={index} onClick={toggleMobileMenu}>
                                            <Link href={item.href} className='block py-2 hover:text-primary transition-colors'>{item.label}</Link>
                                        </div>
                                    ))
                                }                                                 
                            </div>
                            <button onClick={toggleTheme} className='flex items-center gap-2 py-2 hover:text-primary transition-colors align-middle'>  
                            {
                                theme === "dark" ? (
                                <>
                                    <SunIcon className='w-5 h-5 inline-block align-middle'/> 
                                    <span className='leading-none'>Mode clair</span>
                                </>
                                ) : (
                                <>
                                    <MoonIcon className='w-5 h-5 inline-block align-middle'/> 
                                    <span className='leading-none'>Mode sombre</span>
                                </>
                                )
                            }
                        </button>
                        </div>
                    )
                }
            </div>
        </nav>
        
    )
}

export default Navbar
