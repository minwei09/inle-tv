import { FlatTree } from 'framer-motion'
import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import homenba from '../../assets/home/homenba.jpg'
import homesport from '../../assets/home/homepage7.jpg'
import strange from '../../assets/home/strange.jpg'

const HomeNba = () => {

  const heading = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[0].heading)

  const p1 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[1].p1)
  const p2 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[2].p2)
  const p3 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[3].p3)
  const p4 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[4].p4)
  const p5 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[5].p5)

  const p6 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[7].p6)
  const p7 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[8].p7)
  const p8 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[9].p8)
  const p9 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[10].p9)
  const p10 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[11].p10)
  const p11 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[12].p11)
  const p12 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[13].p12)
  const p13 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[14].p13)
  const p14 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[15].p14)


  const button = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[6].button)

  const [showtext, setShowtext] = useState(false)


  return (
    <div className='flex flex-col gap-y-12 py-[3rem] md:py-[5rem] p-2 '>
        <div className='flex flex-col gap-y-6 text-center'>
        <h1 className='text-3xl font-bold'>{heading}</h1>
        <p className='text-lg '>{p1}</p>
        </div>
        <img className='block sm:hidden' src={homenba} alt="" />
        <img src={homesport} className='hidden sm:block' alt="" />

        <div className='flex flex-col items-center gap-y-8 text-center'>
        <h1 className='text-3xl font-bold '>{p3}</h1>
        <img src={strange} alt="" />
        <p className='text-xl '>{p4}</p>
        <p className='text-lg'>{p5}</p>
        </div>

        <p className='text-center text-2xl font-bold'>{p2}</p>
        <div className='mx-auto'>
        <Link to='/download'><button className='btn'>{button}</button></Link>
        </div>

        <div className='leading-[2rem]'>
            <div 
            onClick={() =>setShowtext(!showtext)}
            className='min-w-full sm:min-w-fit flex  items-center gap-6 p-4  cursor-pointer justify-center py-8'>
                <h1 className='leading-5 font-semibold text-xl sm:text-2xl  text-blue'>{p6}</h1>
                {showtext ?
                <MdOutlineKeyboardArrowDown className='w-8 h-8 text-blue'/> : <MdOutlineKeyboardArrowRight className='w-8 h-8 text-blue'/>}
            </div>

            {showtext && 
            <div className='p-4 flex flex-col gap-y-4 transition-all duration-150 ease-in-out shadow-lg'>
            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{p7}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{p8}</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4 leading-[2.5rem]'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{p9}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{p10}</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{p11}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{p12}</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{p13}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{p14}</p>
            </div>
            </div>
            }
        </div>
    </div>
  )
}

export default HomeNba