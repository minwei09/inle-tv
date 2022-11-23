import React from 'react'
import { useSelector } from "react-redux";

import {MdTv, MdPhoneIphone, MdMoney} from 'react-icons/md'
import {IoMdTrophy, IoMdGlobe,} from 'react-icons/io'
import {BsCashCoin, BsFilm} from 'react-icons/bs'

const box_items = [
    {id: 1, icon: <MdTv className='homebox_icon'/>},
    {id: 2, icon: <MdPhoneIphone className='homebox_icon'/>},
    {id: 3, icon: <IoMdGlobe className='homebox_icon'/>},
    {id: 4, icon: <IoMdTrophy className='homebox_icon'/>},
    {id: 5, icon: <BsFilm className='homebox_icon'/>},
    {id: 6, icon: <BsCashCoin className='homebox_icon'/>},
]


const HomeBox = () => {

  const box_txt = useSelector( state => state.language.choose_Language[2].HomePage[1].HomeBox)

  // const icon = <BsFilm className='homebox_icon'/>
  // console.log('first' ,typeof icon)

  return (
    <div className='flex flex-wrap justify-center gap-8 sm:gap-12 py-4 sm:py-16'>
        {
         box_txt.map( item => (
          
              <div key={item.name} className="flex flex-col  items-center justify-center gap-y-4 p-4 rounded-xl shadow-lg max-w-[20rem] min-h-[15rem] bg-">
                  {box_items.map( icn => (
                    icn.id === item.id && <div className='sm:h-[18%]'>{icn.icon}</div>
                  ))}
                  {/* <div className='sm:h-[18%]' dangerouslySetInnerHTML={{__html: item.icon}} /> */}
                  <hr className='w-full bg-slate text-softblue'/>
                  <h1 className='sm:h-[15%]  text-xl font-semibold text-blue text-center'>{item.name}</h1>
                  <p className='sm:h-[60%] '>{item.paragraph}</p>                
              </div>
          ))
        }
    </div>
  )
}

export default HomeBox