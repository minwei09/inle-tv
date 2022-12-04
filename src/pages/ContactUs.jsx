import React, { useState } from 'react'

import { BsWhatsapp, BsArrowRight } from 'react-icons/bs'
import { useSelector } from 'react-redux'


const ContactUs = () => {

    const heading = useSelector( state => state.language.choose_Language[3].ContactUs[0].heading)

    const p1 = useSelector( state => state.language.choose_Language[3].ContactUs[1].p1)

    const p2 = useSelector( state => state.language.choose_Language[3].ContactUs[2].p2)

    const p3 = useSelector( state => state.language.choose_Language[3].ContactUs[3].p3)

    const p4 = useSelector( state => state.language.choose_Language[3].ContactUs[4].p4)

    const p5 = useSelector( state => state.language.choose_Language[3].ContactUs[5].p5)

    const p6 = useSelector( state => state.language.choose_Language[3].ContactUs[6].p6)



  return (
    <div className='-mt-5 p-4 sm:p-6 flex flex-col gap-y-6 max-w-lg mx-auto' >

        <h1 className=' text-center font-bold text-3xl py-4'>{heading}</h1>

        <h1 className='text-xl leading-[2.5rem]'>{p1}
        </h1>

        <p className='text-lg '>
        Monday to Friday : <span className='text-blue'>9:30AM-6:30PM</span> <br />  Saturday to Sunday : <span className='text-blue'>9:30AM-5PM,</span> <br />
        </p>

        <p className='text-lg'>{p2}
        <a href="mailto:inlelivetv@gmail.com">
            <div className='mt-3 flex flex-wrap items-center gap-3 w-fit border px-2 py-1 text-blue border-blue rounded-md sm:text-lg hover:text-white hover:bg-blue'>
                <h1 className='wordbreak'>inlelivetv@gmail.com </h1>
                <BsArrowRight />
            </div>
        </a>
        </p>


       <h1 className='text-lg '>{p3}</h1>

       <div className='flex items-center gap-6'>
       <a href="https://wa.me/17166228262" target="_blank"><BsWhatsapp className='w-6 h-6 cursor-pointer text-blue'/></a>
       {/* <h1>716-622-8262</h1> */}
       </div>

        <p>{p4}</p>

        <div className='bg- rounded-lg p-4 flex flex-col gap-y-4 py-5'>
            <h1 className='text-center text-xl font-semibold underline underline-offset-8 decoration-blue'>{p5}</h1>
            <form target="_blank" action="https://formsubmit.co/inlelivetv@gmail.com" method="POST">
            <div>
                <div>
                    <h1>Name:</h1>
                    <input 
               
                    className='input_field' name="name" type="text" required/>
                </div>
                <div>
                    <h1>Email:</h1>
                    <input 
                
                    className='input_field' name="email" type="email" required/>
                </div>
            </div>
            <div>
                <h1>Message:</h1>
                <textarea 
               
                className='input_field h-[15rem]' name="message" id="" required></textarea>
            </div>
            <div 
            className='flex justify-center p-2'><button 
            type="submit" className='btn cursor-pointer'>{p6}</button></div>
        </form>
        </div>
    </div>
  )
}

export default ContactUs