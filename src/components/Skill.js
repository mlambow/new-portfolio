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
                className='rounded-full items-center justify-center border border-gray-500 object-cover h-24 w-24 xl:h-32 xl:w-32 filter group-hover:grayscale transition-300 ease-in-out md:h-28 md:w-28'
            />
            
            <div 
                className='absolute opacity-0 group-hover:opacity-75 transition duration-200 ease-in-out group-hover:bg-white h-24 w-24 xl:h-32 xl:w-32 rounded-full z-0 md:h-28 md:w-28'>
                <div 
                    className='flex flex-col items-center justify-center h-full'>
                    <p className='text-2xl font-bold text-black'>{value}%</p>
                    <p className='font-bold text-black'>{name}</p>
                </div>
            </div>
        </div>

    )
}

export default Skill