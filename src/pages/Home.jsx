import React, { useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay,Pagination } from "swiper";
import Typical from 'react-typical'
import { useTypewriter, Cursor } from 'react-simple-typewriter'

// image

import image_1 from '../assets/landingImg/homepage1.jpg'
import image_2 from '../assets/landingImg/homepage2.jpg'
import image_3 from '../assets/landingImg/homepage3.jpg'
import image_5 from '../assets/landingImg/homepage5.jpg'
import image_6 from '../assets/landingImg/homepage6.jpg'

import HomeBox from "../components/home/HomeBox";
import HomeText from "../components/home/HomeText";
import HomeBoxing from "../components/home/HomeBoxing";
import HomeNba from "../components/home/HomeNba";
import Testimonial from "../components/home/Testimonial";
import Contact from "../components/home/Contact";
import { useSelector } from "react-redux";
// import image_7 from '../assets/landingImg/homepage7.jpg'

const image_container = [
  {id: 1, image: image_1},
  {id: 2, image: image_2},
  {id: 3, image: image_3},
  {id: 5, image: image_5},
  {id: 6, image: image_6},
]

const Home = () => {

  const homeHeading1 = useSelector( state => state.language.choose_Language[2].HomePage[0].Home[0])

  const homeHeading2 = useSelector( state => state.language.choose_Language[2].HomePage[0].Home[1])

  const homeHeading3 = useSelector( state => state.language.choose_Language[2].HomePage[2])

  const [text] = useTypewriter({
    words: [`${homeHeading2.name}`],
    loop: Infinity,
    onLoopDone: () => console.log(`loop completed after 3 runs.`)
  })


  return (
    <div className='p-6 text-black '
    >
      <div>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Pagination]}
        className="rounded-lg min-h-[15rem] max-h-[80%] "
      >
          {image_container.map( item => (
            <SwiperSlide className="slide_img min-h-full" key={item.id}>
            <img className="object-contain w-full min-h-[12rem] max-h-full object-center rounded-lg" src={item.image} alt="" />
            </SwiperSlide>
          ))}
        
      </Swiper>
      </div>

      {/* - TEXT CHANGE */}
      <div className="mt-5 h[15%] flex flex-col items-center justify-center b-gradient-to-r from-blue  to-softblue sm:bg-none p-4 rounded-md min-h-[18rem] sm:min-h-fit">
        <h1 className="home_heading">{homeHeading1.name}</h1>
        {/* <Typical className="home_para text-blue"
          steps={[`${homeHeading2.name}`, 3000, '', 500]}
          loop={Infinity}
          wrapper="p"
        /> */}
        <div>
          <span>{text}</span>
          <Cursor cursorColor='black' />
        </div>
      </div>

      <HomeBox />
      <h1 className='py-6 leading-[2.5rem] sm:py-8 font-semibold text-2xl sm:text-3xl lg:text-4xl  text-center text-blue sm:leading-[3.5rem] lg:leading-[4.5rem] mb-6'>{homeHeading3.h1}</h1>

      <HomeText />
      <HomeBoxing />
      <HomeNba />
      <Testimonial />
      <Contact />

      
    </div>
  )
}

export default Home

