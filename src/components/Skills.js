import React from 'react'
import { motion } from 'framer-motion'
import Skill from './Skill'

function Skills() {
  return (
    <motion.div
      initial={{opacity: 0}}
      whileInView={{opacity: 1}}
      transition={{duration: 1.5}} 
      className='h-screen w-full flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-y-hidden'>
      <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Skills</h3>

      <h3 className='absolute uppercase tracking-[5px] text-gray-500 top-40 text-sm'>Hover over for current proficiency</h3>

      <div className='grid-cols-4 grid gap-5'>
        <Skill 
          src='https://shorturl.at/rAEL0' 
          value='50' 
          name='JavaScript'  
        />
        <Skill 
          src='https://shorturl.at/zGJY8' 
          value='50' 
          name='React'  
        />
        <Skill 
          src='https://shorturl.at/dFLN3' 
          value='50' 
          name='NextJS'  
        />
        <Skill 
          src='https://shorturl.at/tzORU' 
          value='50' 
          name='Tailwind CSS'  
        />
        <Skill 
          src='https://shorturl.at/flnE0' 
          value='50' 
          name='Firebase'  
        />
        <Skill 
          src='https://shorturl.at/mNTY9' 
          value='50' 
          name='GitHub'  
        />
        <Skill 
          src='https://shorturl.at/iosJ8' 
          value='50'
          name='CSS' 
        />
        <Skill 
          src='https://shorturl.at/qwO01' 
          value='50'
          name='Redux' 
        />
        <Skill 
          src='https://shorturl.at/drHR3' 
          value='50'
          name='NodeJS' 
        />
        <Skill 
          src='https://shorturl.at/juAGO' 
          value='50'
          name='HTML' 
        />
        <Skill 
          src='https://shorturl.at/zGJY8' 
          value='50' 
          name='React Native' 
        />
      </div>

    </motion.div>
  )
}

export default Skills