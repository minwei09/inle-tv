import React from 'react'

import {BsFacebook, BsMessenger,BsInstagram, BsTelegram, BsSignal, BsWhatsapp, BsYoutube} from 'react-icons/bs'
import { useSelector } from 'react-redux'


const Contact = () => {

  const contact = useSelector(state => state.language.choose_Language[2].HomePage[7].contactus)

  return (
    <div className='flex flex-col gap-y-4'>
        <h1 className='text-2xl text-center text-blue '>{contact}</h1>
        <div className='flex flex-wrap gap-5 sm:gap-10 justify-center p-6 md:p-6 '>

          <a href="https://www.facebook.com/profile.php?id=100067427025936&mibextid=LQQJ4d" target='_blank'><BsFacebook className='contact_logo'/></a>

          <a href="https://m.me/100067427025936" target='_blank'><BsMessenger className='contact_logo'/></a>

          <a href="https://youtube.com/channel/UC9p77JM8Te7D18-1gboStNw" target='_blank'><BsYoutube className='contact_logo'/></a>

          <a href="https://t.me/CONTACT_SKYNET" target='_blank'><BsTelegram className='contact_logo'/></a>

          <a href="https://wa.me/17166228262" target='_blank'><BsWhatsapp className='contact_logo'/></a>

          <a href="https://signal.group/#CjQKIFTceY-16vu7vI2mf9yMOmLBzeRs9r_1KXHoFIpiP_eCEhClcc4uX-YjLmqM0XBxMf8N" target='_blank'><BsSignal className='contact_logo'/></a>

            

        </div>
    </div>
  )
}

export default Contact