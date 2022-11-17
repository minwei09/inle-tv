import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

import homenba from '../../assets/home/homenba.jpg'
import homesport from '../../assets/home/homepage7.jpg'

const HomeNba = () => {

  const heading = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[0].heading)

  const p1 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[1].p1)

  const p2 = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[2].p2)

  const button = useSelector(state => state.language.choose_Language[2].HomePage[5].NbaText[3].button)


  return (
    <div className='flex flex-col gap-y-12 py-[3rem] md:py-[5rem] p-2 '>
        <div className='flex flex-col gap-y-6 text-center'>
        <h1 className='text-3xl font-bold'>{heading}</h1>
        <p className='text-lg '>{p1}</p>
        </div>
        <img className='block sm:hidden' src={homenba} alt="" />
        <img src={homesport} className='hidden sm:block' alt="" />
        <p className='text-center text-2xl font-bold'>{p2}</p>
        <div className='mx-auto'>
        <Link to='/download'><button className='btn'>{button}</button></Link>
        </div>
    </div>
  )
}

export default HomeNba