import React from 'react'

function ProjectCard({ src, title }) {
  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center snap-mandotory snap-always'>
      
      <img 
        className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-full md:w-64 md: xl:w-[400px] xl:h-[400px]'
        src='https://links.papareact.com/'
      />
      
      <div className='space-y-3'>
        <h3 className='text-xl tracking-[10px] uppercase text-gray-500 mb-4'>{title}</h3>
        <div>
          <img
            className='h-10 w-10 rounded-full' 
            src='https://links.papareact.com/5me'
          />
        </div>
        
          <ul className='list-disc space-y-4 ml-5 text-lg'>
            <li>Summary points Summary points Summary points Summary points</li>
            <li>Summary points Summary points Summary points Summary points</li>
            <li>Summary points Summary points Summary points Summary points</li>
            <li>Summary points Summary points Summary points Summary points</li>
            <li>Summary points Summary points Summary points Summary points</li>
          </ul>
        
        <div className='flex justify-between items-center mt-3'>
          <button className='p-3 bg-[#daa259] text-gray-400'>Live Demo</button>
          <button className='p-3 bg-[#daa259] text-gray-400'>Github Repo</button>
        </div>
      </div>
    </div>
  )
}

export default ProjectCard