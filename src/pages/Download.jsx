import React, { useState } from 'react'

import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import img_1 from '../assets/download/store.jpg'
import img_2 from '../assets/download/tivimate.jpg'
import img_3 from '../assets/download/xc.jpg'
import img_4 from '../assets/download/vod.jpg'

import img_5 from '../assets/download/download_img.jpg'
import web_playerImg from '../assets/download/player.jpg'
import { useSelector } from 'react-redux'
const watch_player_link = 'http://tonystarks.website/tonystarks/alextv020820/index.php?loggedout'

const id_1_link1 = 'https://s.id/botv'


const id_2_link1 = 'https://tinyurl.com/blueoceantivi'
const id_2_link2 = 'https://www.mediafire.com/file/6gqrfdmle2ab8aw/Blue_Ocean_TIVI.apk/file'


const id_3_link1 = 'https://www.google.com/url?q=https%3A%2F%2Farchive.org%2Fdownload%2Fblueoceantv%2FBOXC.apk&sa=D&sntz=1&usg=AOvVaw3l_r4p7tkNKsq4Oo1JpVEj'
const id_3_link2 = 'https://www.google.com/url?q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Ff6rx9ul5j5nwp1h%2FBOXC.apk%2Ffile&sa=D&sntz=1&usg=AOvVaw0VdBniPVO-_zPv49GaFgR5'


const id_4_link1 = 'https://tinyurl.com/blueoceanplus'
const id_4_link2 = 'https://www.mediafire.com/file/wvrp1b96csf1o2j/BOPLUS.apk/file'


const downloadLinks = [
    {id: 1, name: 'BLUE OCEAN APP STORE', link1Name: 'DIRECT DOWNLOAD', link1: id_1_link1,  img: img_1},

    {id: 2, name: 'BLUE OCEAN TIVIMATE', link1Name: 'DIRECT DOWNLOAD', link1: id_2_link1, link2Name: 'MEDIAFIRE', link2: id_2_link2, img: img_2},

    {id: 3, name: 'BLUE OCEAN XC', link1Name: 'DIRECT DOWNLOAD', link1: id_3_link1, link2Name: 'MEDIAFIRE', link2: id_3_link2, img: img_3},
    
    {id: 4, name: 'BLUE OCEAN VOD', link1Name: 'DIRECT DOWNLOAD', link1: id_4_link1, link2Name: 'MEDIAFIRE', link2: id_4_link2, img:img_4},
]

const Download = () => {

    const [showBuffer, setShowBuffer] = useState(false)

    const h1 = useSelector( state => state.language.choose_Language[7].Download[0].h1)

    const p1 = useSelector( state => state.language.choose_Language[7].Download[1].p1)
    const p2 = useSelector( state => state.language.choose_Language[7].Download[2].p2)
    const p3 = useSelector( state => state.language.choose_Language[7].Download[3].p3)
    const p4 = useSelector( state => state.language.choose_Language[7].Download[4].p4)
    const p5 = useSelector( state => state.language.choose_Language[7].Download[5].p5)
    const p6 = useSelector( state => state.language.choose_Language[7].Download[6].p6)
    const p7 = useSelector( state => state.language.choose_Language[7].Download[7].p7)
    const p8 = useSelector( state => state.language.choose_Language[7].Download[8].p8)

    const h2 = useSelector( state => state.language.choose_Language[7].Download[9].h2)

    const b1 = useSelector( state => state.language.choose_Language[7].Download[10].b1)
    const b2 = useSelector( state => state.language.choose_Language[7].Download[11].b2)
    const b3 = useSelector( state => state.language.choose_Language[7].Download[12].b3)
    const b4 = useSelector( state => state.language.choose_Language[7].Download[13].b4)
    const b5 = useSelector( state => state.language.choose_Language[7].Download[14].b5)
    const b6 = useSelector( state => state.language.choose_Language[7].Download[15].b6)
    const b7 = useSelector( state => state.language.choose_Language[7].Download[16].b7)
    const b8 = useSelector( state => state.language.choose_Language[7].Download[17].b8)

  return (
    <div className='flex flex-col gap-y-6 sm:gap-y-12 p-3'>


        {downloadLinks.map( item => (

        <div key={item.id} >
            <div className='mx-auto w-fit py-4'>
                <img className='ma-h-[10rem] object-contain' src={item.img} alt="" />
            </div>

            <div>
                {item.name &&
                <h1 className='text-center font-semibold text-lg sm:text-xl'>{item.name}</h1>
                }
                <div className='flex flex-col py-3 gap-y-3'>

                    { item.link1 &&
                    <a href={item.link1} className="btn rounded-full w-[15rem] text-center" target='_blank'>{item.link1Name}</a>
                    }

                    {item.link2 &&
                    <a href={item.link2} className="btn rounded-full w-[15rem] text-center" target='_blank'>{item.link2Name}</a>
                    }

                </div>
            </div>
        </div>

        ))}

        <div className='py-6 flex flex-col gap-y-8 mb-8'>
        <div className='mx-auto w-fit ma-w-[90vh]'>
            <img className=' object-contain' src={web_playerImg} alt="" />
        </div>

        <div className='flex justify-center'>
        <a href={watch_player_link} className="btn rounded-full w-[15rem] text-center" target='_blank'>Web Player</a>
        </div>
        </div>

        <img src={img_5} alt="" />

        <div className='flex flex-col gap-y-5 py-6 p-2  leading-[2.5rem]'>
            <h1 className='text-3xl font-semibold leading-[2.5rem]'>{h1}</h1>
            <div>
                <h1 className='download_heading leading-[2.5rem]'>{p1}</h1>
                <p className='download_para leading-[2.5rem]'>{p2}</p>
            </div>
            <div>
                <h1 className='download_heading leading-[2.5rem]'>{p3}</h1>
                <p className='download_para leading-[2.5rem]'>{p4}</p>
            </div>
            <div>
                <h1 className='download_heading leading-[2.5rem]'>{p5}</h1>
                <p className='download_para leading-[2.5rem]'>{p6}</p>
            </div>
            <div>
                <h1 className='download_heading leading-[2.5rem]'>{p7}</h1>
                <p className='download_para leading-[2.5rem]'>{p8}</p>
            </div>
        </div>

        <div className=' mb-12 leading-[2rem]'>
            <div 
            onClick={() =>setShowBuffer(!showBuffer)}
            className=' flex  items-center gap-6 p-4 shadow-lg cursor-pointer btn'>
                <h1 className='text-xl'>{h2}</h1>
                {showBuffer ?
                <MdOutlineKeyboardArrowDown className='w-8 h-8'/> : <MdOutlineKeyboardArrowRight className='w-8 h-8'/>}
            </div>

            {showBuffer && 
            <div className='p-4 flex flex-col gap-y-4 transition-all duration-150 ease-in-out shadow-lg'>
            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{b1}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{b2}</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4 leading-[2.5rem]'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{b3}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{b4}</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{b5}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{b6}</p>
            </div>

            <hr className='text-blue'/>

            <div className='flex flex-col gap-y-3 py-4'>
                <h1 className='font-semibold text-xl leading-[2.5rem]'>{b7}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{b8}</p>
            </div>
            </div>
            }
        </div>

        {/* <img className='mb-6' src={img_5} alt="" /> */}

        
    </div>
  )
}

export default Download 