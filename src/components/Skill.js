import React from 'react'
import { motion } from 'framer-motion'

function Skill({ src, value, name }) {
    return (
        <div className='group relative flex cursor-pointer'>
            <motion.img
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{duration: 1.2}}
                whileInView={{opacity: 1, x: 0}}
                src={src}
                className='rounded-full items-center justify-center border border-gray-500 object-cover h-12 w-12 xl:h-20 xl:w-20 filter group-hover:grayscale transition-300 ease-in-out md:h-16 md:w-16'
            />
            
            <div 
                className='absolute opacity-0 group-hover:opacity-75 transition duration-200 ease-in-out group-hover:bg-white h-12 w-12 xl:h-20 xl:w-20 rounded-full z-0 md:h-16 md:w-16'>
                <div 
                    className='flex flex-col items-center justify-center h-full'>
                    <p className='text-[10px] md:text-base font-bold text-black'>{value}%</p>
                    <p className='font-bold text-[8px] md:text-xs text-black'>{name}</p>
                </div>
            </div>
        </div>

    )
}

export default Skill