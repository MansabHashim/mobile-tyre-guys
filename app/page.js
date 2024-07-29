import React from 'react'
import Home from '@/components/Home'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'
import Subhero from '@/components/ui/Subhero'
import ServicesHome from '@/components/ui/ServicesHome'
import Prices from '@/components/ui/Prices'
import Faq from '@/components/ui/Faq'


const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <Subhero/>
      <ServicesHome/>
      <Prices/>
      <Faq/>
      <h1>All states of US</h1>
      <Home/>
    </div>
  )
}

export default page