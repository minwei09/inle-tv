import React from 'react'

import Credit from '../../assets/credit.png'

import {BsFillCheckCircleFill, BsXCircle, BsFacebook, BsMessenger, BsTelegram, BsSignal, BsWhatsapp} from 'react-icons/bs'
import {FaGooglePay} from 'react-icons/fa'
import {SiCashapp} from 'react-icons/si'
import {IoLogoVenmo, IoTerminal} from 'react-icons/io5'
import { useSelector } from 'react-redux'


const Modal = ({showModal, setShowModal, price, plan, creditLink, id}) => {

    const p1 = useSelector( state => state.language.choose_Language[6].ResellerModal[0].p1)

    const p2 = useSelector( state => state.language.choose_Language[6].ResellerModal[1].p2)

  return (
    <>
    {showModal && (
        <>
                        <div className='bg-black fixed top-0 left-0 w-full h-full opacity-70 pointer-events-none z-[1] '></div>

                        <div className='fixed top-0 left-0 w-full h-screen  flex items-center justify-center z-[2] '>
                            <div className='bg-white sm:w-[30rem] px-6 py-3 rounded-lg'>
                               {/* <BsXCircle className='absolute -top-6 -right-3 bg-white rounded-full  w-6 h-6  '/> */}
                                <div className=' py-4 text-center flex flex-col gap-y-3'>
                                <h1 className='text-lg uppercase underline underline-offset-4 md:text-2xl'>{p1}</h1>
                                <p className='text-xl'>{plan}</p>
                                <p className='text-xl'>${price} /Month Plan</p>
                                </div>

                            <div className='bg-[#eeeeee] rounded-md p-4 py-4 flex flex-col gap-y-4  '>
                                <div className='flex items-center sm:justify-center  gap-4  sm:gap-8'>
                                    <FaGooglePay className='w-8 h-8 text-blue'/>
                                    <a className='font-semibold' href="https://gpay.app.goo.gl/pay-BViN2O0DwOU" target='_blank'>Pay With Google Pay</a>
                                </div>
                                <hr className='text-blue'/>
                                <div className='flex items-center sm:justify-center  gap-4 sm:gap-8'>
                                    <SiCashapp className='w-8 h-8 text-blue'/>
                                    <a className='font-semibold' href="https://cash.app/$007SKY" target='_blank'>Pay With Cash App</a>
                                </div>
                                <hr className='text-blue'/>
                                <div className='flex items-center sm:justify-center  gap-4 sm:gap-8'>
                                    <IoLogoVenmo className='w-8 h-8 text-blue'/>
                                    <a className='font-semibold' href="https://venmo.com/code?user_id=2886066885361664202&created=1667850678.784536&printed=1" target='_blank'>Pay With Venmo</a>
                                </div>
                                
                                
                                {id === 1 ? 
                                <></> :
                                <>
                                <hr className='text-blue'/>
                                <div className='flex items-center sm:justify-center  gap-4 sm:gap-8'>
                            <img src={Credit} className='w-8 h-8 text-blue'/>
                            
                            
                            <a 
                            href={creditLink}
                            className='font-semibold' target='_blank'>Pay With Credit Card</a>
                            
                                </div>
                                </>
                                
                                }
  
                            
                            </div>

                            <div className='flex justify-end mt-5'>
                                <button
                                onClick={() => setShowModal(false)}
                                className='btn'>{p2}</button>
                            </div>

                            </div>
                        </div>
        </>
    )}
    </>
  )
}

export default Modal