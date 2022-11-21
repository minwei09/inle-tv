import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import handshake from '../assets/reseller/reseller.jpg'
import img from '../assets/reseller/reseller2.jpg'
import ModalReseller from '../components/reseller/ModalReseller'
import {BsFillCheckCircleFill, BsXCircle, BsFacebook, BsMessenger, BsTelegram, BsSignal, BsWhatsapp, BsInstagram, BsYoutube} from 'react-icons/bs'
import logo from '../assets/pricing.jpg'

const payment = [
    {id: 1, credit: '50', price: '250'},
    {id: 2, credit: '100', price: '400'},
    {id: 3, credit: '200', price: '700'},
    {id: 4, credit: '400', price: '1000'},
]

const Reseller = () => {

    const h1 = useSelector( state => state.language.choose_Language[5].Reseller[0].h1)

    const p1 = useSelector( state => state.language.choose_Language[5].Reseller[1].p1)
    const p2 = useSelector( state => state.language.choose_Language[5].Reseller[2].p2)
    const p3 = useSelector( state => state.language.choose_Language[5].Reseller[3].p3)
    const p4 = useSelector( state => state.language.choose_Language[5].Reseller[4].p4)
    const p5 = useSelector( state => state.language.choose_Language[5].Reseller[5].p5)
    const p6 = useSelector( state => state.language.choose_Language[5].Reseller[6].p6)
    const p7 = useSelector( state => state.language.choose_Language[5].Reseller[7].p7)
    const p8 = useSelector( state => state.language.choose_Language[5].Reseller[8].p8)
    const p9 = useSelector( state => state.language.choose_Language[5].Reseller[9].p9)
    const p10 = useSelector( state => state.language.choose_Language[5].Reseller[10].p10)
    const p11 = useSelector( state => state.language.choose_Language[5].Reseller[11].p11)

    const buyNow = useSelector( state => state.language.choose_Language[5].Reseller[12].buyNow)

    const [price, setPrice] = useState('')
    const [credit, setCredit] = useState('')
    const [showModalreseller, setShowModalreseller] = useState(false)

  return (
    <div className='flex flex-col gap-y-4 p-4 max-w-3xl mx-auto'>

        <img className='max-h-[20rem] sm:py-3 object-contain' src={handshake} alt="" />

        <h1 className='text-lg  font-semibold'>{h1}</h1>

        <div className='flex flex-col gap-y-3 leading-[2rem]'>
            <h1 className='reseller_heading'>{p1}</h1>

            <p>{p2}</p>

            <p>{p3}</p>

            <p>{p4}</p>

            <p>{p5}</p>
        </div>

        <div className='flex flex-col gap-y-3 leading-[2rem]'>
            <h1 className='reseller_heading'>{p6}</h1>

            <p>{p7}</p>
        </div>

        <div className='flex flex-col gap-y-3 leading-[2rem]'>
            <h1 className='reseller_heading'>{p8}</h1>
            <p>{p9}</p>

            <p>{p10}</p>
        </div>

        <h1 className='reseller_heading text-center'>1 Account 3 Connection</h1>

        <div className='mx-auto'>
            <div className='flex gap-3 border max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>1 Month Subscription</p>
                <p className='px-3 p-1'>1 Credit Points</p>
            </div>
            <div className='flex gap-3 border  max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>3 Month Subscription</p>
                <p className='px-3 p-1'>3 Credit Points</p>
            </div>
            <div className='flex gap-3 border max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>6 Month Subscription</p>
                <p className='px-3 p-1'>6 Credit Points</p>
            </div>
            <div className='flex gap-3 border max-w-lg justify-center'>
                <p className='border-r px-3 p-1'>12 Month Subscription</p>
                <p className='px-3 p-1'>12 Credit Points</p>
            </div>
        </div>

        <img src={img} alt="" />

        <div  className='flex  justify-center flex-wrap gap-2 py-5 gap-y-8'>
        {payment.map( item => (          

            <div key={item.id} className='bg-[#eeeeee] rounded-2xl p-4 w-[18rem] mx-auto flex flex-col gap-y-3 '>
                <h1 className='text-center text-2xl font-semibold underline underline-offset-8 py-3 text-blue'>{item.credit} Credit</h1>
                <div className='flex flex-col gap-y-1'>
                    <p>1 Month 1 Credit Points</p>
                    <p>3 Month 3 Credit Points</p>
                    <p>6 Month 6 Credit Points</p>
                    <p>12 Month 12 Credit Points</p>
                    <p>Free Trial Everyday</p>
                    <p>Customize Groups</p>
                    <p>Pay As You Go!</p>
                    <p>Credits Not Expire</p>
                    <p>24/7 Support</p>
                </div>
                <p className='text-center font-semibold text-blue text-xl'>${item.price}</p>
                <div className='flex justify-center '>
                <button className='btn'
                onClick={() => {setShowModalreseller(true) , setCredit(item.credit), setPrice(item.price) }}
                >{buyNow}</button>
                </div>
            </div>

        ))}
        </div>

        <ModalReseller 
        showModalreseller={showModalreseller}
        setShowModalreseller={setShowModalreseller}
        credit={credit}
        price={price}
        />

<div className='py-4 flex flex-col items-center justify-center'>
            <h1 className='text-lg md:text-2xl font-semibold text-center py-2'>{p11}</h1>

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

export default Reseller