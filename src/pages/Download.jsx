import React, { useState } from 'react'

import {MdOutlineKeyboardArrowRight, MdOutlineKeyboardArrowDown} from 'react-icons/md'

import img_1 from '../assets/download/store.jpg'
import img_2 from '../assets/download/stb.jpg'
import img_3 from '../assets/download/xc.jpg'
import img_4 from '../assets/download/vod.jpg'

import img_5 from '../assets/download/download_img.jpg'

import web_playerImg from '../assets/download/player.jpg'
import smartImg from '../assets/download/smarttv.jpg'

import { useSelector } from 'react-redux'
const watch_player_link = 'http://mandalay.ga:8080/webplayer/login.php'

const id_1_link1 = 'https://archive.org/download/blueoceantv/InleTVAppStore.apk'


const id_2_link1 = 'https://tinyurl.com/inlelivesupanew'
const id_2_link2 = 'https://www.mediafire.com/file/6gqrfdmle2ab8aw/Blue_Ocean_TIVI.apk/file'


const id_3_link1 = 'https://archive.org/download/blueoceantv/InleLiveTV.apk'
const id_3_link2 = 'https://www.google.com/url?q=https%3A%2F%2Fwww.mediafire.com%2Ffile%2Ff6rx9ul5j5nwp1h%2FBOXC.apk%2Ffile&sa=D&sntz=1&usg=AOvVaw0VdBniPVO-_zPv49GaFgR5'


const id_4_link1 = 'https://tinyurl.com/inlevodplus'
const id_4_link2 = 'https://www.mediafire.com/file/wvrp1b96csf1o2j/BOPLUS.apk/file'


const downloadLinks = [
    {id: 1, name: 'INLE TV APP STORE', link1Name: 'DIRECT DOWNLOAD', link1: id_1_link1,  img: img_1},

    {id: 2, name: 'INLE TV STB', link1Name: 'DIRECT DOWNLOAD', link1: id_2_link1, link2Name: 'MEDIAFIRE', link2: id_2_link2, img: img_2},

    {id: 3, name: 'INLE TV XC', link1Name: 'DIRECT DOWNLOAD', link1: id_3_link1, link2Name: 'MEDIAFIRE', link2: id_3_link2, img: img_3},
    
    {id: 4, name: 'INLE TV VOD', link1Name: 'DIRECT DOWNLOAD', link1: id_4_link1, link2Name: 'MEDIAFIRE', link2: id_4_link2, img:img_4},
]

const Download = () => {

    const [showBuffer, setShowBuffer] = useState(false)
    const [showFireStick, setShowFireStick] = useState(false)
    const [showSmart, setShowSmart] = useState(false)

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

    const h3 = useSelector( state => state.language.choose_Language[7].Download[18].h3)
    const s1 = useSelector( state => state.language.choose_Language[7].Download[19].s1)
    const s2 = useSelector( state => state.language.choose_Language[7].Download[20].s2)
    const s3 = useSelector( state => state.language.choose_Language[7].Download[21].s3)
    const s4 = useSelector( state => state.language.choose_Language[7].Download[22].s4)

    const samsungh1 = useSelector( state => state.language.choose_Language[7].Download[23].samsungh1)
    const samsungp1 = useSelector( state => state.language.choose_Language[7].Download[24].samsungp1)
    const samsungp2 = useSelector( state => state.language.choose_Language[7].Download[25].samsungp2)
    const samsungp3 = useSelector( state => state.language.choose_Language[7].Download[26].samsungp3)
    const samsungp4 = useSelector( state => state.language.choose_Language[7].Download[27].samsungp4)
    const samsungp5 = useSelector( state => state.language.choose_Language[7].Download[28].samsungp5)
    const samsungp6 = useSelector( state => state.language.choose_Language[7].Download[29].samsungp6)
    const samsungp7 = useSelector( state => state.language.choose_Language[7].Download[30].samsungp7)
    const samsungp8 = useSelector( state => state.language.choose_Language[7].Download[31].samsungp8)

    const lgh1 = useSelector( state => state.language.choose_Language[7].Download[32].lgh1)
    const lgp1 = useSelector( state => state.language.choose_Language[7].Download[33].lgp1)
    const lgp2 = useSelector( state => state.language.choose_Language[7].Download[34].lgp2)
    const lgp3 = useSelector( state => state.language.choose_Language[7].Download[35].lgp3)
    const lgp4 = useSelector( state => state.language.choose_Language[7].Download[36].lgp4)
    const lgp5 = useSelector( state => state.language.choose_Language[7].Download[37].lgp5)
    const lgp6 = useSelector( state => state.language.choose_Language[7].Download[38].lgp6)
    const lgp7 = useSelector( state => state.language.choose_Language[7].Download[39].lgp7)

    const h4 = useSelector( state => state.language.choose_Language[7].Download[40].h4)
    

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

                    {/* {item.link2 &&
                    <a href={item.link2} className="btn rounded-full w-[15rem] text-center" target='_blank'>{item.link2Name}</a>
                    } */}

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

        <img src={smartImg} alt="" />
        
        <div className='py-4 mt-20'>
            <div 
            onClick={() =>setShowSmart(!showSmart)}
            className='min-w-full sm:min-w-fit flex min-w-xl items-center gap-6 p-4 shadow-lg cursor-pointer btn '>
                <h1 className='leading-5 p-3 sm:text-xl sm:min-w-full'>{h3}</h1>
                {showSmart ?
                <MdOutlineKeyboardArrowDown className='w-8 h-8'/> : <MdOutlineKeyboardArrowRight className='w-8 h-8'/>}
            </div>

            {showSmart && 
            <>
            <div className='py-6 flex flex-col gap-y-4'>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{s1}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{s2}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{s3}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{s4}</p>
            </div>
            <div className='py-6 flex flex-col gap-y-3'>
                <h1 className='font-semibold text-xl leading-[2.5rem] underline underline-offset-8'>{samsungh1}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp1}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp2}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp3}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp4}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp5}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp6}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp7}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{samsungp8}</p>
            </div>
            <div className='py-6 flex flex-col gap-y-3'>
                <h1 className='font-semibold text-xl leading-[2.5rem] underline underline-offset-8'>{lgh1}</h1>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp1}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp2}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp3}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp4}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp5}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp6}</p>
                <p className='tracking-wide text-xl leading-[2.5rem]'>{lgp7}</p>
            </div>
            </>}

        </div>


        <div className='py-4'>
            <div 
            onClick={() =>setShowFireStick(!showFireStick)}
            className=' flex min-w-full sm:min-w-fit  items-center gap-6 p-4 shadow-lg cursor-pointer btn'>
                <h1 className='leading-5 p-3 sm:text-xl '>{h1}</h1>
                {showFireStick ?
                <MdOutlineKeyboardArrowDown className='w-8 h-8'/> : <MdOutlineKeyboardArrowRight className='w-8 h-8'/>}
            </div>

            {showFireStick && 
            <div className='flex flex-col gap-y-5 py-6 p-2  leading-[2.5rem]'>
            {/* <h1 className='text-3xl font-semibold leading-[2.5rem]'>{h1}</h1> */}
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
        </div>}
        </div>

        <div className='py-4 leading-[2rem]'>
            <div 
            onClick={() =>setShowBuffer(!showBuffer)}
            className='min-w-full sm:min-w-fit flex  items-center gap-6 p-4 shadow-lg cursor-pointer btn'>
                <h1 className='leading-5 p-3 sm:text-xl '>{h2}</h1>
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

        <h1 className='my-12 leading-[3rem] text-center font-bold text-2xl md:text-3xl'>{h4}</h1>

        {/* <img className='mb-6' src={img_5} alt="" /> */}

        <img className='mb-12' src={img_5} alt="" />

        
    </div>
  )
}

export default Download 