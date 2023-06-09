import React from 'react'
import { motion } from 'framer-motion'

function BackgroundCircles() {
  return (
    <motion.div 
        initial={{
            opacity: 0,
        }}
        animate={{
            scale: [1,2,2,3,1],
            opacity: 1,
            borderRadius: ['20%', '20%', '50%', '30%', '20%']
        }}
        transition={{
            duration: 2.5
        }}
        className='relative flex justify-center items-center'
    >
        <div className='border border-[#333333] rounded-full h-[50px] w-[50px] md:h-[200px] md:w-[200px] mt-52 animate-ping absolute' />
        <div className='border border-[#333333] rounded-full h-[100px] w-[100px] md:h-[300px] md:w-[300px] mt-52 animate-ping absolute'  />
        <div className='border border-[#333333] rounded-full h-[250px] w-[250px] md:h-[400px] md:w-[400px] mt-52 animate-ping absolute'  />
        <div className='border border-[#e4c359] rounded-full h-[350px] w-[350px] md:h-[550px] md:w-[550px] absolute animate-pulse mt-52' />
        <div className='border border-[#333333] rounded-full h-[550px] w-[550px] md:h-[700px] md:w-[700px] absolute mt-52' />
    </motion.div>
    
  )
}

export default BackgroundCircles