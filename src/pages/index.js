import Image from 'next/image'
import { Inter } from 'next/font/google'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Skills from '@/components/Skills'
import Projects from '@/components/Projects'
import Contact from '@/components/Contact'
import ProjectCard from '@/components/ProjectCard'
import { ArrowUpCircleIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className='bg-[rgb(36,36,36)] h-screen text-white snap-mandatory overflow-x-hidden z-0 snap-y overflow-y-scroll scrollbar-track-gray-500/20 scrollbar-thumb-[#e4c359]/60 scrollbar'>
      
        <Navbar />

      <section id='hero' className='snap-center'>
        <Hero />
      </section>

      <section id="about" className='snap-center'>
        <About />
      </section>

      {/* <section id='#experience' className='snap-center'>
        <Experience />
      </section> */}

      <section id='skills' className='snap-start'>
        <Skills />
      </section>

      <section id='projects' className='snap-center'>
        <Projects />
      </section>

      <section id='contact' className='snap-start'>
        <Contact />
      </section>

      <Link href='#hero' 
        className='justify-center items-center flex h-12 sticky bottom-5 cursor-pointer w-fit-content'>
        <ArrowUpCircleIcon 
          className='h-12 w-12 text-[#e2b844] grayscale filter hover:grayscale-0'            
        />
      </Link>
    </div>
  )
}
