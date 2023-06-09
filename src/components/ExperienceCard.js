import React, { useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'

function ExperienceCard({ title, listItem1, listItem2, listItem3, listItem4, src, src1, src2, src3, src4, src5, url, url1 }) {
  
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[300px] h-[600px] md:w-[400px] lg:w-[500px] snap-center p-10 bg-[#292929] opacity-40 hover:opacity-100 cursor-pointer transition-opacity duration-200 overflow-hidden overflow-y-scroll scrollbar-thin scrollbar-thumb-[#90dbe0]'>
      <motion.img
        initial={{y: -100, opacity: 0}}
        transition={{duration: 1.3}}
        whileInView={{opacity: 1, y: 0}}
        // viewport={{once: true}} 
        className='h-[100px] w-[100px] rounded-full xl:w-[150px] xl:h-[150px] object-cover object-center'
        src={src}
      />

      <div className='px-0 md:px-10'>
        <h4 className='text-4xl font-light uppercase'>{title}</h4>
        {/* tech used */}
        <div className='flex space-x-2 py-2'>
          <Image 
            className='rounded-full'
            src={src1}
            alt='skill'
            width={40}
            height={40}
          />
          <Image 
            className='rounded-full'
            src={src2}
            alt='skill'
            width={40}
            height={40}
          />
          <Image 
            className='rounded-full'
            src={src3}
            alt='skill'
            width={40}
            height={40}
          />
          <Image 
            className='rounded-full'
            src={src4}
            alt='skill'
            width={40}
            height={40}
          />
          <Image 
          className='rounded-full'
          src={src5}
          alt='skill'
          width={40}
          height={40}
        />
        </div>
        <ul className='list-disc space-y-4 ml-5 text-lg'>
          <li>{listItem1}</li>
          <li>{listItem2}</li>
          <li>{listItem3}</li>
          <li>{listItem4}</li>
        </ul>
        <div className='items-center justify-between flex space-x-3 mt-3 w-full'>
          <a href={url1} target='_blank' className='heroButton hover:text-[#e4c359]'>Live Demo</a>
          
          <a href={`https://github.com/mlambow/${url}`} target='_blank' className='heroButton hover:text-[#e4c359]'>GitHub</a>
        </div>
      </div>
    </article>
  )
}

export default ExperienceCard