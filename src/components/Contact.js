import React, { useRef } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import { SocialIcon } from 'react-social-icons'
import emailjs from '@emailjs/browser'
import Link from 'next/link'

function Contact() {
    const form = useRef()
    const sendEmail = (e) => {
        e.preventDefault()
        emailjs.sendForm('service_uuzteou', 'template_vt89i0a', form.current, 'AmO8kF6TQwbdoL9cx')
        .then((result) => {
            if (result.text == '200' || 'OK') {
                alert('Message sent successfully')
            } else {
                alert('Something went wrong')
            }
            e.target.reset()
        }, (error) => {
            alert(error.text)
        })
    }

    return(
        <div 
            className='h-screen flex flex-col relative text-center md:text-left md:flex-row max-w-7xl p-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-lg md:text-xl lg:text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-5 mt-10'>
                <h4 className='text-xl md:text-2xl font-semibold text-center whitespace-normal'>I got just what you need. Let&#39;s talk</h4>

                <div className='space-y-5'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#d8ae60] md:h-5 md:w-5 h-3 w-3 animate-ping'/>
                        <p className='text-base md:text-xl'>+27 81 595 6071</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#d8ae60] md:h-5 md:w-5 h-3 w-3 animate-ping'/>
                        <p className='text-base md:text-xl'>wandile.mlambo@yahoo.com</p>
                    </div>
                    <div 
                    className='flex items-center space-x-5 justify-center'>
                        <SocialIcon 
                            className='cursor-pointer animate-ping'
                            fgColor='#d8ae60'
                            bgColor='transparent'
                            url='https://www.linkedin.com/in/wandile-mlambo-29aa7855'
                            style={{ height: 35, width: 35 }}
                        />
                        <a 
                            target='_blank'
                            className='text-base xl:text-lg hover:text-[#d8ae60]'
                            href='https://www.linkedin.com/in/wandile-mlambo-29aa7855'>
                            LinkedIn Account
                        </a>
                    </div>
                </div>

                <form
                    ref={form} onSubmit={sendEmail}     
                    className='flex flex-col space-y-2 w-fit mx-auto text-white'>
                    <div className='md:space-x-2 space-y-2 md:flex'>
                        <input placeholder='Name' className='contactInput w-full' type='text' name='user_name' required/>
                        <input placeholder='Email' className='contactInput' type='email' name='user_email' required/>
                    </div>
                    <input placeholder='Subject' className='contactInput' type='text' name='subject' required/>
                    <textarea placeholder='Message' className='contactInput scrollbar-thumb-[#d8ae60] scrollbar-thin' name='message'  required/>
                    <button type='submit' className='bg-[#d8ae60] py-3 md:py-5 md:px-18 rounded-full text-black font-bold text-sm md:text-base hover:text-[#d8ae60] hover:bg-black'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact