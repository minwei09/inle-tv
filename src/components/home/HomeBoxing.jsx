import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import boxing from '../../assets/home/homeboxing.jpg'

const HomeBoxing = () => {

  const heading = useSelector(state => state.language.choose_Language[2].HomePage[4].BoxingText[0].heading)

  const para_1 = useSelector(state => state.language.choose_Language[2].HomePage[4].BoxingText[1].para_1)

  const para_2 = useSelector(state => state.language.choose_Language[2].HomePage[4].BoxingText[2].para_2)

  const buyNow = useSelector(state => state.language.choose_Language[2].HomePage[4].BoxingText[3].buyNow)

  return (
    <div className='mt-12 max-w-auto max-w-none flex flex-col gap-y-6'>
        <img className='h-full object-cover w-full object-center rounded-md' src={boxing} alt="" />
        {/* <div className="overlay absolute top-0 z-[1] left-0 w-full h-full bg-gradient-to-b from-blue  to-black opacity-60"></div> */}
        <div className='flex flex-col items-center justify-center p-2 gap-y-8 md:gap-y-12 text-center '> 
            <h1 className=' text-3xl font-bold sm:text-2xl md:text-3xl lg:text-4xl  lg:w-[60%] mx-auto '>{heading}</h1>
            <p className='text-lg lg:w-[60%] mx-auto'>{para_1}</p>
            <p className='text-lg lg:w-[60%] mx-auto'>{para_2}</p>
            <Link to="/pricing"><button className='btn'>{buyNow}</button></Link>
        </div>
    </div>
  )
}

export default HomeBoxing