
import React from 'react'
// import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import Subhero from '@/components/ui/Subhero'
import ServicesHome from '@/components/ui/ServicesHome'
import Prices from '@/components/ui/Prices'
import Faq from '@/components/ui/Faq'
// import Cta from '@/components/ui/Cta'
// import Footer from '@/components/ui/Footer'
import Home from '@/components/Home'
import Cities from '@/components/ui/Cities'


const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Subhero/>
      <ServicesHome/>
      <Prices/>
      <Home/>
      <Cities/>
      <Faq/>
      {/* <Cta/> */}
      {/* <Footer/> */}
    </div>
  )
}

export default page