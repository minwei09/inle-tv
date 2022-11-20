import React from 'react'
import { useSelector } from 'react-redux'
import Img1 from '../assets/aboutus/aboutUs.jpg'
import Img2 from '../assets/aboutus/popcorn.jpg'

import Logo from '../assets/WebLogo.png'

const AboutUs = () => {

    const p1 = useSelector( state => state.language.choose_Language[4].AboutUs[0].p1)

    const p2 = useSelector( state => state.language.choose_Language[4].AboutUs[1].p2)

    const p3 = useSelector( state => state.language.choose_Language[4].AboutUs[2].p3)

    const p4 = useSelector( state => state.language.choose_Language[4].AboutUs[3].p4)

    const p5 = useSelector( state => state.language.choose_Language[4].AboutUs[4].p5)

    const p6 = useSelector( state => state.language.choose_Language[4].AboutUs[5].p6)

    const p7 = useSelector( state => state.language.choose_Language[4].AboutUs[6].p7)

    const p8 = useSelector( state => state.language.choose_Language[4].AboutUs[7].p8)

    const p9 = useSelector( state => state.language.choose_Language[4].AboutUs[8].p9)

    const p10 = useSelector( state => state.language.choose_Language[4].AboutUs[9].p10)

    const p11 = useSelector( state => state.language.choose_Language[4].AboutUs[10].p11)

  return (
    <div className='p-3 sm:p-12'>
        
 
        <div className='flex flex-col lg:flex-row py-6 lg:py-20 lg:mb-20 mb-6 gap-y-8 lg:gap-8'>
          <div className='flex items-center justify-center lg:w-[50%]'><img className='rounded-2xl  h-full ' src={Img1} alt="" /></div>

          <div className='flex flex-col gap-y-4 lg:w-[50%]'>     
            <h1 className='text-blue text-3xl font-semibold text-center lg:text-4xl '>{p1}</h1> 

            <h1 className='font-semibold text-blue py-3 tracking-wider'>{p2}</h1>

            <p className='about_text'>{p3}</p>
            <p className='about_text'>{p4} </p>
          </div>
        </div>

        <div className='flex flex-col gap-y-3'>
          <img className='' src={Img2} alt="" />

          <div className='flex flex-col gap-y-4'>

          <h1 className='text-center font-bold text-3xl py-4 '>{p5}</h1>

            <p className='about_text'>{p6}</p>

            <p className='about_text'>{p7}</p>

            <p className='about_text'>{p8}</p>

            <p className='about_text'>{p9}</p>

            <p className='about_text'>{p10}</p>

            <p className='about_text'>{p11}</p>

          </div>
        </div>

        <div className='flex items-center justify-center gap-10 py-6 sm:py-10'>
          <img className='w-[6rem] h-[6rem] sm:w-[8rem] sm:h-[8rem]' src={Logo} alt="" />
          <h1 className='text-2xl sm:text-4xl text-blue font-bold italic'>Inle TV</h1>
        </div>

    </div>
  )
}

export default AboutUs