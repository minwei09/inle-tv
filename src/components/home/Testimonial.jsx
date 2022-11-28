import React from 'react'
import { useSelector } from 'react-redux'

import img1 from '../../assets/testimonial/customer1.png'
import img2 from '../../assets/testimonial/customer2.png'
import img3 from '../../assets/testimonial/customer3.jpg'
import img4 from '../../assets/testimonial/customer4.jpg'

const Testimonial = () => {

  const heading = useSelector(state => state.language.choose_Language[2].HomePage[6].Testimonial[0].heading)

  const customer1 = useSelector(state => state.language.choose_Language[2].HomePage[6].Testimonial[1].customer_1)

  const customer2 = useSelector(state => state.language.choose_Language[2].HomePage[6].Testimonial[2].customer_2)

  const customer3 = useSelector(state => state.language.choose_Language[2].HomePage[6].Testimonial[3].customer_3)

  const customer4 = useSelector(state => state.language.choose_Language[2].HomePage[6].Testimonial[4].customer_4)

  return (
    <div className='p-4 text-white' 
    >

        <h1 className='mb-20 md:mt-8 text-blue text-2xl sm:text-2xl md:text-3xl p-1 font-bold text-center'>{heading}</h1>

        <div className='flex flex-wrap justify-center'>

        <div 
        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img3} alt="" />
            <blockquote className='relative text-sm italic leading-6 tracking-wider text-slate-600'><span className='text-5xl'>&#8220;</span>{customer1}
            <span className='text-5xl absolute -bottom-12 right-4'>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold'>Tommy</h3>
        </div>

        <div 

        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img1} alt="" />
            <blockquote className='text-sm relative italic leading-6 tracking-wider text-slate-600'><span className='text-5xl '>&#8220;</span>{customer2}
            <span className='text-5xl absolute -bottom-12 right-4 '>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold '>Jessica</h3>
        </div>

        <div
        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img2} alt="" />
            <blockquote className='text-sm relative italic leading-6 tracking-wider text-slate-600'><span className='text-5xl '>&#8220;</span>{customer3}
            <span className='text-5xl absolute -bottom-12 right-4 '>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold '>Rebecca</h3>
        </div>

        <div
        className='mb-20 text-center bg-blue rounded-md shadow-sm relative  mx-auto p-1 w-[20rem]'>
            <p className='pb-16'></p>
            <img className='w-20 h-20 rounded-full absolute -top-10 left-[36%]' src={img4} alt="" />
            <blockquote className='text-sm relative italic leading-6 tracking-wider text-slate-600'><span className='text-5xl '>&#8220;</span>{customer4}
            <span className='text-5xl absolute -bottom-12 right-4 '>&#8221;</span></blockquote>
            <h3 className='py-5 text-lg font-semibold '>Matt</h3>
        </div>

        </div>
        

    </div>
  )
}

export default Testimonial