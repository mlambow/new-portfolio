import React, { useRef } from 'react'
import { PhoneIcon, MapPinIcon, EnvelopeIcon } from '@heroicons/react/24/solid'
import emailjs from '@emailjs/browser'
import 'react-toastify/dist/ReactToastify.css'

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
            <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl'>Contact</h3>

            <div className='flex flex-col space-y-10 mt-10'>
                <h4 className='text-4xl font-semibold text-center whitespace-normal'>I got just what you need. Let&#39;s talk</h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                        <PhoneIcon className='text-[#d8ae60] h-7 w-7 animate-ping'/>
                        <p className='text-2xl'>+27 81 595 6071</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <EnvelopeIcon className='text-[#d8ae60] h-7 w-7 animate-ping'/>
                        <p className='text-2xl'>wandile.mlambo@yahoo.com</p>
                    </div>
                    <div className='flex items-center space-x-5 justify-center'>
                        <MapPinIcon className='text-[#d8ae60] h-7 w-7 animate-ping'/>
                        <p className='text-2xl'>1356 Madiba Road Unit J</p>
                    </div>
                </div>

                <form
                    ref={form} onSubmit={sendEmail}     
                    className='flex flex-col space-y-2 w-fit mx-auto text-white'>
                    <div className='flex space-x-2'>
                        <input placeholder='Name' className='contactInput' type='text' name='user_name'/>
                        <input placeholder='Email' className='contactInput' type='email' name='user_email'/>
                    </div>
                    <input placeholder='Subject' className='contactInput' type='text' name='subject'/>
                    <textarea placeholder='Message' className='contactInput' name='message'/>
                    <button type='submit' className='bg-[#d8ae60] py-5 px-18 rounded-full text-black font-bold text-lg'>Submit</button>
                </form>
            </div>
        </div>
    )
}

export default Contact