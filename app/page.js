import React from 'react'
import Home from '@/components/Home'
import Navbar from '@/components/ui/Navbar'
import Hero from '@/components/ui/Hero'


const page = () => {
  return (
    <div>
      {/* <Navbar/> */}
      <Hero/>
      <h1>All states of US</h1>
      <Home/>
    </div>
  )
}

export default page