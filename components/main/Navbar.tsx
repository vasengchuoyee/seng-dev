'use client'
import { Socials } from '@/constants'
import Image from 'next/image'
import React, { useState } from 'react'

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    return (
        <div className='w-full h-[65px] fixed top-0 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md z-50 px-4 md:px-10'>
            <div className='w-full h-full flex flex-row items-center justify-between m-auto'>
                <a href='#about-me' className='h-auto w-auto flex flex-row items-center'>
                    <Image
                        src="/smilevue.png"
                        alt='logo'
                        width={40}
                        height={40}
                        className='cursor-pointer hover:animate-slowspin box-border rounded-[50px] border'
                    />
                    {/* <span className='font-bold italic ml-[8px] hidden md:block text-gray-300'>
                        SMILE NEXT
                    </span> */}
                    <h1 className="dancing-script text-2xl ml-[8px] hidden md:block text-gray-300">smile_nextjs</h1>
                </a>

                {/* Hamburger Menu Button - Visible on mobile only */}
                <button 
                    className='md:hidden z-50'
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    <div className='w-6 h-5 flex flex-col justify-between'>
                        <span className={`h-0.5 w-full bg-gray-300 transition-all ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-gray-300 transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
                        <span className={`h-0.5 w-full bg-gray-300 transition-all ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
                    </div>
                </button>

                {/* Desktop Navigation */}
                <div className='hidden md:flex w-[500px] h-full flex-row items-center justify-between md:mr-20'>
                    <div className='flex items-center justify-between w-full h-auto border border-[#7042f861] bg-[#0300145e] mr-[15px] px-[20px] py-[10px] rounded-full text-gray-200'>
                        <a href='#about-me' className='cursor-pointer hover:text-blue-500 relative group'>
                            About me
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href='#skills' className='cursor-pointer hover:text-blue-500 relative group'>
                            Skills
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                        <a href='#projects' className='cursor-pointer hover:text-blue-500 relative group'>
                            Projects
                            <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100"></span>
                        </a>
                    </div>
                </div>

                {/* Mobile Navigation */}
                <div className={`md:hidden fixed top-[65px] left-0 w-full bg-[#030014] transition-all duration-300 ease-in-out ${
                    isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-full pointer-events-none'
                }`}>
                    <div className='flex flex-col items-center py-4 text-gray-200'>
                        <a 
                            href='#about-me' 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            About me
                        </a>
                        <a 
                            href='#skills' 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Skills
                        </a>
                        <a 
                            href='#projects' 
                            className='py-2 cursor-pointer hover:text-blue-500'
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Projects
                        </a>
                    </div>
                </div>

                {/* Social Icons - Hidden on mobile */}
                <div className='hidden md:flex flex-row gap-5'>
                    {Socials.map((social) => (
                        <a
                            href={social.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            key={social.name}
                        >
                            <Image
                                src={social.src}
                                alt={social.name}
                                width={24}
                                height={24}
                                className="cursor-pointer"
                            />
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Navbar
