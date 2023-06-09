import React from 'react'
import { motion } from 'framer-motion'
import { SocialIcon } from 'react-social-icons'
import Link from 'next/link'


function Navbar() {
  return (
    <header className='sticky top-0 flex items-center justify-between max-w-7xl z-20 xl:items-center p-5 mx-20'>
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='uppercase text-gray-400 -ml-8 md:ml-0 text-[12px]'
      >
       Wandile Mlambo
      </motion.div>
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5
        }} 
        animate={{
          x: 0,
          opacity: 1,
          scale: 1
        }}
        transition={{
          duration: 1.5
        }}
        className='flex flex-row items-center -mr-10 md:mr-0  text-gray-300'>
          

        <SocialIcon 
          fgColor='gray'
          bgColor='transparent'
          network='github'
          className='cursor-pointer w-5 h-5'
          url='https://github.com/mlambow'
          style={{ height: 35, width: 35 }}

        />
         
        <SocialIcon 
          className='cursor-pointer'
          network='email'
          fgColor='gray'
          bgColor='transparent'
          url='#contact'
          style={{ height: 35, width: 35 }}
        />
          
        <p className='uppercase hidden md:inline-flex text-[12px] text-gray-400'>Get in touch</p>
      </motion.div>
    </header>
  )
}

export default Navbar