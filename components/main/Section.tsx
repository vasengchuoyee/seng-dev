'use client';

import React, { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { TECH_IMAGES } from '@/constants/images';


const Section: React.FC = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);
  const [scroll, setScroll] = useState<number>(0);

  const handleScroll = useCallback(() => {
    const scrollY = window.scrollY;
    requestAnimationFrame(() => setScroll(scrollY));
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % TECH_IMAGES.length);
    }, 3000);

    window.addEventListener('scroll', handleScroll);

    return () => {
      clearInterval(interval);
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-blue-900">
      {/* 3D Carousel Section */}
      <div className="flex flex-col items-center justify-center py-24 px-4">
        <h1 className="text-4xl font-bold text-white mb-8 animate-fade-in">
          3D <span className='text-xl'>Animation</span>
        </h1>
        <div className="carousel-container flex flex-wrap justify-center gap-4 perspective-1000">
          {TECH_IMAGES.map((image, index) => (
            <div
              key={image.src}
              className="image-card transform-gpu hover:scale-110 transition-all duration-300"
              style={{
                transform: `rotateY(${scroll * 0.1 + index * 45}deg) translateZ(200px)`,
              }}
            >
              <Image
                src={image.src}
                alt={image.alt}
                width={192}
                height={192}
                className="object-cover rounded-lg shadow-lg p-6 "
                priority
              />
            </div>
          ))}
        </div>
      </div>

      {/* Code Display Section */}
      <div className="min-h-screen w-full bg-black flex flex-col md:flex-row items-center justify-center p-4 md:p-8 gap-8 md:gap-16">
        <div className="relative w-full md:w-1/2 max-w-md h-[500px] overflow-hidden rounded-xl group">
          <div className="relative z-[2] p-4 h-full flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] transform-gpu transition-all duration-500 hover:scale-110">
              <Image
                src={TECH_IMAGES[currentImageIndex].src}
                alt={TECH_IMAGES[currentImageIndex].alt}
                width={280}
                height={280}
                className="w-full h-full object-contain transform rotate-[-15deg] shadow-2xl 
                          transition-all duration-500 hover:rotate-0
                          rounded-lg border border-gray-700/50 backdrop-blur-lg
                          bg-gray-900/30 hover:bg-gray-900/50"
                priority
              />
            </div>
          </div>
        </div>

        <div className="w-full max-w-md flex flex-col items-start gap-6 px-4 py-24">
          <h1 className="text-xl md:text-4xl text-blue-400 font-bold leading-tight">
            <span className="text-blue-500 animate-pulse">Next.js</span> is the best
            <br />
            option for you.
          </h1>
          <p className="text-sm text-gray-200">
            Use Next.js, a powerful frontend technology, to create modern web applications.
          </p>

          <a href="https://nextjs.org/" target="_blank" rel="noopener noreferrer">
            <button className="mt-4 bg-blue-500 hover:bg-blue-600 text-white px-8 py-3 
                           rounded-md text-lg font-medium transition-all duration-300
                           hover:shadow-lg hover:shadow-blue-500/50 transform hover:-translate-y-1
                           relative overflow-hidden group">
              <div className="flex whitespace-nowrap">
                <span className="animate-marquee group-hover:pause">
                  Learn Next.js - 15
                </span>
              </div>
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Section;