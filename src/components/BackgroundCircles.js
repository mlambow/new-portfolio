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
        <div className='border border-[#333333] rounded-full h-[200px] w-[200px] mt-52 animate-ping absolute' />
        <div className='border border-[#333333] rounded-full h-[300px] w-[300px] mt-52 animate-ping absolute'  />
        <div className='border border-[#333333] rounded-full h-[500px] w-[500px] mt-52 animate-ping absolute'  />
        <div className='border border-[#e4c359] rounded-full h-[650px] w-[650px] absolute animate-pulse mt-52' />
        <div className='border border-[#333333] rounded-full h-[800px] w-[800px] absolute mt-52' />
    </motion.div>
    
  )
}

export default BackgroundCircles