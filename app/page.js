import React from 'react'
import Home from '@/components/Home'
import Navbar from '@/components/ui/Navbar'


const page = () => {
  return (
    <div>
      <Navbar/>
      <h1>All states of US</h1>
      <Home/>
    </div>
  )
}

export default page