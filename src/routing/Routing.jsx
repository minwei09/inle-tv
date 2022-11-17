import React from 'react'
import { Navigate, Route, Routes } from 'react-router-dom'

import Navbar from '../components/header/Navbar'
import Footer from '../components/footer/Footer'
import ScrollToTop from '../javascript/ScrollToTop'
import AboutUs from '../pages/AboutUs'
import Channels from '../pages/Channels'
import ContactUs from '../pages/ContactUs'
import Download from '../pages/Download'
import Home from '../pages/Home'
import Pricing from '../pages/Pricing'
import Reseller from '../pages/Reseller'


const Routing = () => {
  return (
    <div >
    <ScrollToTop />
    <Navbar />
    
    <div className='layout mt-[5.2rem] max-w-6xl mx-auto '>
      <Routes>
      <Route path='/' element={<Home />}/>
        <Route path='/pricing' element={<Pricing />}/>
        <Route path='/contactus' element={<ContactUs />}/>
        <Route path='/aboutus' element={<AboutUs />}/>
        <Route path='/channels' element={<Channels />}/>
        <Route path='/reseller' element={<Reseller />}/>
        <Route path='/download' element={<Download />}/>


        <Route path='*' element={<Navigate to='/'/>}/>
      </Routes>
    </div>

    <Footer />
    </div>
  )
}

export default Routing