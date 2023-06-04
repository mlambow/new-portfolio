import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
import headPicture from '../../public/headPicture.jpg'
import Link from 'next/link'
import { motion } from 'framer-motion'

function Hero() {
    const [text, count] = useTypewriter({
        words: ["Hi, It's Wandile Mlambo here", "A_Front-End_Developer.jsx", "<A guy who loves football />"],
        loop: true,
        delaySpeed: 2000
    })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
      <BackgroundCircles />
      <motion.img
        initial={{
          x: -200,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.2
        }}
        className='rounded-full object-cover mx-auto relative w-32 h-32'
        src='../../headPicture.jpg'
        alt='headPicture'
      />
      <div className='z-10'>
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[13px]'>Software Developer</h2>
        <h1 className='text-5xl lg:text-6xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#e4c359'/>
        </h1>
      </div>
      <div className='pt-5 z-20'>
        <a href='#about'>
          <button className='heroButton'>About</button> 
        </a>
        <a href='#skills'>
          <button className='heroButton'>Skills</button>  
        </a>
        <a href='#projects'>
          <button className='heroButton'>Projects</button>  
        </a>
        <a href='#contact'>
          <button className='heroButton'>Contact</button> 
        </a>
        
      </div>
      
    </div>
  )
}

export default Hero