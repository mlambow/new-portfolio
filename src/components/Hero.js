import React, { useRef } from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import BackgroundCircles from './BackgroundCircles'
import Image from 'next/image'
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
        className='rounded-full object-cover mx-auto relative md:w-32 md:h-32 w-20 h-20'
        src='../../headPicture.jpg'
        alt='headPicture'
      />
      <div className='z-10'>
        <h2 className='text-[10px] md:text-sm uppercase text-gray-500 pb-2 tracking-[8px] sm:tracking-[10px] md:tracking-[13px]'>Software Developer</h2>
        <h1 className='text-2xl md:text-3xl lg:text-5xl font-semibold px-10'>
          <span className='mr-3'>{text}</span>
          <Cursor cursorColor='#e4c359'/>
        </h1>
      </div>
      <div className='pt-1 md:pt-5 z-20'>
        <Link href='#about'>
          <button className='heroButton '>About</button> 
        </Link>
        <Link href='#skills'>
          <button className='heroButton'>Skills</button>  
        </Link>
        <Link href='/#projects'>
          <button className='heroButton'>Projects</button> 
        </Link>
        <Link href='/#contact'>
          <button className='heroButton'>Contact</button> 
        </Link>
        
      </div>
      
    </div>
  )
}

export default Hero