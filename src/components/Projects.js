import React from 'react'
import ExperienceCard from './ExperienceCard'

function Projects() {
  return (
    <div className='relative flex h-screen overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500  text-lg md:text-xl lg:text-2xl z-20'>Projects</h3>

      <div className='flex w-full space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-[#e4c359]/60 absolute z-10 scrollbar-corner-[#e4c359]/60'>
        <ExperienceCard 
          title='Portfolio'
          src='https://shorturl.at/rsuCW'
          src1='https://shorturl.at/rAEL0'
          src2='https://shorturl.at/zGJY8'
          src3='https://shorturl.at/dFLN3'
          src4='https://shorturl.at/tzORU'
          src5='https://shorturl.at/flnE0'
          listItem1='This is the portfolio you are looking at'
          listItem2='This is where I introduce myself and you are able to see all my builds and what I am capable of'
          listItem3='It is a simple and one page web portfolio'
          listItem4='I hope you enjoy and I love it!'
          url='new-portfolio'
          url1='#hero'
        />
        <ExperienceCard 
          title='Facebook Clone' 
          src='https://links.papareact.com/5me'
          src1='https://shorturl.at/rAEL0'
          src2='https://shorturl.at/zGJY8'
          src3='https://shorturl.at/dFLN3'
          src4='https://shorturl.at/tzORU'
          src5='https://shorturl.at/flnE0'
          listItem1='In this Facebook Clone you are able to login to and out from your Facebook account powered by Next.Auth and Facebook'
          listItem2='You will be able to post and see your posts'
          listItem3='It is mobile friendly web app as it is responsive to every device'
          listItem4='This is one of the builds I am enjoying building and it is coming soon'
           url='facebook-clone'
           url1=''
        />
        <ExperienceCard
          title='Netflix Clone' 
          src='https://shorturl.at/jKPR7'
          src1='https://shorturl.at/zGJY8'
          src2='https://shorturl.at/rAEL0'
          src3='https://shorturl.at/iosJ8'
          src4='https://shorturl.at/mNTY9'
          src5='https://shorturl.at/flnE0'
          listItem1='It is the first clone I have built.'
          listItem2='In this clone, you are able to view all the latest, now playing and trending movies.'
          listItem3='Not only that you can see the movies, but you can view the trailers only by a click on the movie poster'
          listItem4='All the movies that are rendered are all taken from an API from TMDB'
          url='netflix-clone'
          url1='https://netflix-clone-w-168dc.web.app'
        />
        <ExperienceCard 
          title='Weather App' 
          src='https://shorturl.at/qwUXY'
          src1='https://shorturl.at/rAEL0'
          src2='https://shorturl.at/iosJ8'
          src3='https://shorturl.at/zGJY8'
          src4='https://shorturl.at/mNTY9'
          src5='https://shorturl.at/flnE0'
          listItem1='It is a weather app that shows you the weather of your location'
          listItem2='You only allow it to read your location and then it will render your weather'
          listItem3='You will be able to see the hourly, day and weekly weather'
          listItem4="It's a must check app"
          url='weather'
          url1='https://weather-app-d848e.web.app'
        />
        <ExperienceCard
          title='Amazon Clone' 
          src='https://shorturl.at/ltvDT'
          src1='https://shorturl.at/rAEL0'
          src2='https://shorturl.at/zGJY8'
          src3='https://shorturl.at/iosJ8'
          src4='https://shorturl.at/lB268'
          src5='https://shorturl.at/flnE0'
          listItem1='It is an Amazon Clone where you are able to buy your favourite products'
          listItem2='You will be able to add and remove items from the basket'
          listItem3='You will be able to login in and out using your Google account powered by Firebase Authentication'
          listItem4='The Stripe payment process is coming soon'
          url='amazon-clone' 
          url1='https://clone-8f3ad.web.app'
        />
        <ExperienceCard 
          title='Bank Landing Page' 
          src='https://shorturl.at/msG18'
          src1='https://shorturl.at/rAEL0'
          src2='https://shorturl.at/zGJY8'
          src3='https://shorturl.at/mNTY9'
          src4='https://shorturl.at/tzORU'
          src5='https://shorturl.at/flnE0'
          listItem1='It is a banking landing page'
          listItem2='It is where you are able to see the product the bank offers and the reviews of the customers'
          listItem3='It is designed only with Tailwind CSS and used React to render all the components'
          listItem4='Give it a look!'
          url='bank-page'
          url1='https://bank-page-94a2a.web.app'
        />
      </div>
        <div className='w-full absoulte top-[30%] bg-[#e9a934]/20 left-0 h-[500px] -skew-y-12 -z-10' />

    </div>
  )
}

export default Projects