import React from 'react'
import { FaDiscord, FaGithub, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'

const Footer = () => {
    return (
        <div className='w-full h-full bg-transparent text-gray-200 shadow-lg p-[15px]'>
            <div className='w-full flex flex-col items-center justify-center m-auto'>
                <div className='w-full h-full flex flex-row items-center justify-around flex-wrap'>

                    <div className='min-w-[200px] h-auto flex flex-col items-start justify-start'>
                        <div className='font-bold text-[16px]'>
                            Community
                        </div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaYoutube />
                            <span className='hover-text'>Youtube</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaGithub />
                            <span className='hover-text'>Github</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaDiscord />
                            <span className='hover-text'>Discord</span>
                        </p>

                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-start justify-start'>
                        <div className='font-bold text-[16px]'>
                            Social Media
                        </div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaInstagram />
                            <span className='hover-text'>Instagram</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaTwitter />
                            <span className='hover-text'>Twitter</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>
                            <FaLinkedin />
                            <span className='hover-text'>Line</span>
                        </p>

                    </div>

                    <div className='min-w-[200px] h-auto flex flex-col items-start justify-start'>
                        <div className='font-bold text-[16px]'>
                            About
                        </div>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>

                            <span className='hover-text'>Join Dev team</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>

                            <span className='hover-text'>Learning about me</span>
                        </p>
                        <p className='flex flex-row items-center my-[15px] cursor-pointer'>

                            <span className='hover-text'>vasengchouyee@gmail.com</span>
                        </p>

                    </div>
                    <div className='relative w-full mt-[20px] mb-[20px] overflow-hidden'>
                    <div className='absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-blue-500/10 blur-xl'></div>
                    <div className='relative bg-[#0300145e] backdrop-blur-sm border-t border-[#7042f88b] p-4'>
                        <div className='flex flex-col md:flex-row items-center justify-center gap-2 text-center'>
                            <span className='text-[15px] text-gray-300 font-light'>
                                &copy; {new Date().getFullYear()}
                            </span>
                            <span className='text-lg bg-gradient-to-r from-purple-400 to-blue-400 text-transparent bg-clip-text font-medium'>
                                vaseng.dev
                            </span>
                            <span className='text-[15px] text-gray-300 font-light'>
                                Built with
                                <span className='mx-1 text-blue-400 hover:text-blue-300 transition-colors'>
                                    Next.js
                                </span>
                                &
                                <span className='mx-1 text-purple-400 hover:text-purple-300 transition-colors'>
                                    TailwindCSS
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                </div>
                


            </div>


        </div>
    )
}

export default Footer