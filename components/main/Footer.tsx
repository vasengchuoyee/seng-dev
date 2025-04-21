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
                </div>

               
            </div>
            <div className='mb-[20px] text-[15px] text-center bg-gray-700 p-2 mt-[20px] w-full'>
                    &copy; vaseng.dev @2025 _Next.js
                </div>

        </div>
    )
}

export default Footer