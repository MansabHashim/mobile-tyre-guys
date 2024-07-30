
import React from 'react'
// import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import Subhero from '@/components/ui/Subhero'
import ServicesHome from '@/components/ui/ServicesHome'
import Prices from '@/components/ui/Prices'
import Faq from '@/components/ui/Faq'
import States from '@/components/ui/States'
import Cta from '@/components/ui/Cta'
import Footer from '@/components/ui/Footer'


const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Subhero/>
      <ServicesHome/>
      <Prices/>
      {/* <h1>All states of US</h1> */}
      <States/>
      <Faq/>
      <Cta/>
      <Footer/>
    </div>
  )
}

export default page