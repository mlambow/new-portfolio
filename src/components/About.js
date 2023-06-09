import React from 'react'
import { motion } from 'framer-motion'



function  About() {
  return (
    <motion.div 
    className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center snap-mandotory snap-always'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500  text-lg md:text-xl lg:text-2xl'>About</h3>
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
          duration: 1.5
        }}
        className='-mb-28 sm:-mb-20 md:mb-0 flex-shrink-0 w-32 h-32 sm:w-40 sm:h-40 rounded-full object-cover md:rounded-lg md:w-64 md:h-64 xl:w-[400px] xl:h-[350px]'
        src='../../formal.jpg'
        alt='headPicture'
      />

      <motion.div 
        initial={{
          x: 300,
          opacity: 0
        }}
        whileInView={{
          x: 0,
          opacity: 1
        }}
        transition={{
          duration: 1.6
        }}
        className='md:space-y-10 space-y-5 px-0 md:px-10'>
        <h3 className='md:text-2xl text-xl font-semibold'>Here is a little background</h3>
        <p className='text-xs md:text-[14px] lg:text-[16px] text tracking-wide '>I&#39;m a very ambitious front-end developer who loves to learn and create things that lives in the internet! I&#39;m looking for a front-end role in a IT company with the opportunity to work with the latest technologies on challenging and diverse projects.

        I&#39;m a curious person who likes and enjoy challenges and learning new technologies and languages.

        I&#39;m comfortable in working with JavaScript, React, Next.JS, Redux (React Context API), CSS and Tailwind-CSS and REST APIs, as I have used all these frameworks to create my projects with them, but I&#39;m not limited to this list as I adapt to any framework.

        If I may define myself in one sentence that would be a family guy, a sports and music fanatic and a food lover!</p>
        
        <div className='-ml-6'>
          <a href="../../Wandile's CV.pdf" download className='heroButton md:text-lg lg:text-xl text-sm gap-y-5 hover:text-[#e4c359]'>
            Download CV
          </a>
        </div>
      </motion.div>
    </motion.div>
  )
}

export default About