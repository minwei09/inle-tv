import React, { useState } from 'react'
import {BsFillCheckCircleFill, BsInstagram, BsFacebook, BsMessenger, BsTelegram, BsSignal, BsWhatsapp, BsYoutube} from 'react-icons/bs'
import {FaGooglePay} from 'react-icons/fa'
import {SiCashapp} from 'react-icons/si'
import {IoLogoVenmo} from 'react-icons/io5'
import Modal from '../components/pricing/Modal'

import logo from '../assets/pricing.jpg'
import { useSelector } from 'react-redux'

const pricingTxtv1 = [
    {id: 1, name: 'OVER 7,000 + CHANNELS'},
    {id: 2, name: 'SD HD & FHD QUALITY'},
    {id: 3, name: 'PPV CHANNELS INCLUDED'},
    {id: 4, name: 'MOVIES & SERIES APP'},
    {id: 5, name: 'NFL, NBA, NHL, MLB'},
    {id: 6, name: 'SUPPORT ALL DEVICES'},
    {id: 7, name: '24/7 ONLINE SUPPORT '},
    
]

const one_connection = [
    {connection_id: 1, plan: '1 Month 1 Connection', price: '20', credit_link: 'https://buy.stripe.com/28o3d4aJ96gFcM0289', pricetxt: pricingTxtv1}, 
    {connection_id: 2, plan: '3 Month 1 Connection', price: '50', credit_link: 'https://buy.stripe.com/eVa3d4eZp7kJ13ifZ3', pricetxt: pricingTxtv1},
    {connection_id: 3, plan: '6 Month 1 Connection', price: '100',
    credit_link: 'https://buy.stripe.com/3cs6pg6sT20pdQ49AG', pricetxt: pricingTxtv1},
    {connection_id: 4, plan: '12 Month 1 Connection', price: '200',
    credit_link: 'https://buy.stripe.com/eVa00S3gH7kJcM03co', pricetxt: pricingTxtv1},
]

const three_connection = [
    {connection_id: 1, plan: '1 Month 3 Connection', price: '40', credit_link: 'https://buy.stripe.com/28o3d4aJ96gFcM0289', pricetxt: pricingTxtv1}, 
    {connection_id: 2, plan: '3 Month 3 Connection', price: '80', credit_link: 'https://buy.stripe.com/eVa14W5oPbAZ7rGfZc', pricetxt: pricingTxtv1},
    {connection_id: 3, plan: '6 Month 3 Connection ', price: '130',
    credit_link: 'https://buy.stripe.com/bIYfZQg3t8oN5jycN1', pricetxt: pricingTxtv1},
    {connection_id: 4, plan: '12 Month 3 Connection', price: '220',
    credit_link: 'https://buy.stripe.com/00g3d418zdJ7cM0fZe', pricetxt: pricingTxtv1},
]

const five_connection = [
    {connection_id: 1, plan: '1 Month 5 Connection', price: '60', credit_link: 'https://buy.stripe.com/9AQbJAcRh0WlfYc4go', pricetxt: pricingTxtv1}, 
    {connection_id: 2, plan: '3 Month 5 Connection', price: '100', credit_link: 'https://buy.stripe.com/6oE14W7wX34t13icN4', pricetxt: pricingTxtv1},
    {connection_id: 3, plan: '6 Month 5 Connection ', price: '180',
    credit_link: 'https://buy.stripe.com/7sIaFweZp7kJcM06oH', pricetxt: pricingTxtv1},
    {connection_id: 4, plan: '12 Month 5 Connection', price: '300',
    credit_link: 'https://buy.stripe.com/3cs00S18zbAZ6nC3cx', pricetxt: pricingTxtv1},
]

const Pricing = () => {

    const h1 = useSelector( state => state.language.choose_Language[9].Pricing[0].h1)
    const p1 = useSelector( state => state.language.choose_Language[9].Pricing[1].p1)
    const p2 = useSelector( state => state.language.choose_Language[9].Pricing[2].p2)

    const [showModal, setShowModal] = useState(false)
    const [plan ,setPlan] = useState('')
    const [price, setPrice] = useState('')
    const [creditLink, setCreditLink] = useState('')
    const [id, setId] = useState(null)

    const[activeOne, setActiveOne] = useState(true)
    const[activeTwo, setActiveTwo] = useState(false)
    const[activeThree, setActiveThree] = useState(false)

  return (
    <div className='p-2 mt-[7rem]'>
        <h1 className='text-2xl md:text-4xl text-center  font-semibold leading-10 tracking-widest mb-6'>{h1}</h1>    

        {/* -------------------------------MODAL --------------------- */}

            <Modal 
            showModal={showModal} 
            setShowModal={setShowModal} 
            price={price} 
            plan={plan}
            // creditLink={creditLink}
            id={id}/>

        {/* -------------------------------MODAL --------------------- */}   

        <div className=' p-2 '>
            
            <div className='py-6 '>
                <ul className='flex relative items-center justify-center  w-fit mx-auto  sm:gap-x-5 md:gap-x-10 rounded-full cursor-pointer '>
                    <li 
                    onClick={() => {setActiveOne(true), setActiveTwo(false), setActiveThree(false)}}
                    className={`'relative z-[1] rounded-full text-sm font-semibold p-1 px-2 py-3 sm:p-4 md:text-base min-w-[100px]  ${activeOne && 'text-white'}`}>1 Connection</li>
                    <li 
                    onClick={() => {setActiveOne(false), setActiveTwo(true), setActiveThree(false)}}
                    className={`'relative z-[1] rounded-full text-sm font-semibold p-1 px-2 py-3 sm:p-4 md:text-base min-w-[106px]  ${activeTwo && 'text-white'}`}>3 Connection</li>
                    <li 
                    onClick={() => {setActiveOne(false), setActiveTwo(false), setActiveThree(true)}}
                    className={`'relative z-[1] rounded-full text-sm font-semibold p-1 px-2 py-3 sm:p-4 md:text-base min-w-[106px]  ${activeThree && 'text-white'}`}>5 Connection</li>

                    <div className={`absolute top-0 w-[100px] sm:w-[122px] md:w-[140px]  h-full bg-blue rounded-full transition-all duration-200 ease-in-out ${activeOne && "left-0"} ${activeTwo && "left-[6.7rem] sm:left-[9rem] md:left-[11rem]"} ${activeThree && "left-[13.5rem] sm:left-[18rem] md:left-[22rem]"}`}></div>
                </ul>
            </div>

            <div className={`animation_price ${activeOne ? 'opacity-100': 'opacity-0'}`}>
            {activeOne && 
            <div className={`flex flex-wrap justify-center sm:gap-8 lg:gap-12 `}>
            {one_connection.map( item => (
                <div key={item.connection_id} className='mb-[4rem] p-3 rounded-2xl shadow-xl bg-[#eeeeee] w-[20rem] '>
                    <h1 className='py-3 text-xl text-center font-[900]'>{item.plan}</h1>
                    {item.pricetxt.map( txt => (
                        <div key={txt?.id} className="flex gap-x-3 py-3 items-center">
                           <div className='px-1 w-6 h-6 flex items-center'>
                           <BsFillCheckCircleFill className='text-blue'/>
                           </div>
                           <p className='w-fit '>{txt?.name}</p>
                        </div>
                    ))}
                    <p className='py-3 text-center text-xl font-bold tracking-widest '>${item.price} /Month</p>
                    <div className='flex justify-center py-3'>
                        <button 
                        onClick={() => {setShowModal(true) , setPlan(item.plan), setPrice(item.price), setCreditLink(item.credit_link), setId(item.connection_id)}}
                        className='btn '>{p1}</button>
                    </div>

                </div>
            ))}
            </div>}
            </div>

            <div className={`animation_price ${activeTwo ? 'opacity-100': 'opacity-0'}`}>
            {activeTwo && 
            <div className='flex flex-wrap justify-center sm:gap-8 lg:gap-12'>
            {three_connection.map( item => (
                <div key={item.connection_id} className='mb-[4rem] p-3 rounded-2xl shadow-xl bg-[#eeeeee] w-[20rem] '>
                    <h1 className='py-3 text-xl text-center font-[900]'>{item.plan}</h1>
                    {item.pricetxt.map( txt => (
                        <div key={txt?.id} className="flex gap-x-3 py-3 items-center">
                           <div className='px-1 w-6 h-6 flex items-center'>
                           <BsFillCheckCircleFill className='text-blue'/>
                           </div>
                           <p className='w-fit '>{txt?.name}</p>
                        </div>
                    ))}
                    <p className='py-3 text-center text-xl font-bold tracking-widest '>${item.price} /Month</p>
                    <div className='flex justify-center py-3'>
                        <button 
                        onClick={() => {setShowModal(true) , setPlan(item.plan), setPrice(item.price), setCreditLink(item.credit_link), setId(item.connection_id)}}
                        className='btn '>{p1}</button>
                    </div>

                </div>
            ))}
            </div>}
            </div>

            <div className={`animation_price ${activeThree ? 'opacity-100': 'opacity-0'}`}>
            {activeThree && 
            <div className='flex flex-wrap justify-center sm:gap-8 lg:gap-12'>
            {five_connection.map( item => (
                <div key={item.connection_id} className='mb-[4rem] p-3 rounded-2xl shadow-xl bg-[#eeeeee] w-[20rem] '>
                    <h1 className='py-3 text-xl text-center font-[900]'>{item.plan}</h1>
                    {item.pricetxt.map( txt => (
                        <div key={txt?.id} className="flex gap-x-3 py-3 items-center">
                           <div className='px-1 w-6 h-6 flex items-center'>
                           <BsFillCheckCircleFill className='text-blue'/>
                           </div>
                           <p className='w-fit '>{txt?.name}</p>
                        </div>
                    ))}
                    <p className='py-3 text-center text-xl font-bold tracking-widest '>${item.price} /Month</p>
                    <div className='flex justify-center py-3'>
                        <button 
                        onClick={() => {setShowModal(true) , setPlan(item.plan), setPrice(item.price), setCreditLink(item.credit_link), setId(item.connection_id)}}
                        className='btn '>{p1}</button>
                    </div>

                </div>
            ))}
            </div>}
            </div>

        </div>


        <div className='flex flex-col items-center justify-center'>
            <h1 className='text-lg md:text-2xl font-semibold text-center py-2'>{p2}</h1>

            <div className='flex gap-6 justify-center py-8 text-blue'>
                <a href="https://www.facebook.com/profile.php?id=100067427025936&mibextid=LQQJ4d" target='_blank'><BsFacebook className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://m.me/100067427025936" target='_blank'><BsMessenger className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://youtube.com/channel/UC9p77JM8Te7D18-1gboStNw" target='_blank'><BsYoutube className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://t.me/CONTACT_SKYNET" target='_blank'><BsTelegram className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://wa.me/17166228262" target='_blank'><BsWhatsapp className='w-8 h-8 cursor-pointer'/></a>

                <a href="https://signal.group/#CjQKIFTceY-16vu7vI2mf9yMOmLBzeRs9r_1KXHoFIpiP_eCEhClcc4uX-YjLmqM0XBxMf8N" target='_blank'><BsSignal className='w-8 h-8 cursor-pointer'/></a>
            </div>

            <img className='mb-4' src={logo} alt="" />
        </div>
    </div>
  )
}
 
export default Pricing