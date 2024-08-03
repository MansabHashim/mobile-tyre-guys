import AboutHero from '@/components/ui/AboutHero'
import Choose from '@/components/ui/Choose'
import React from 'react'
import Faq from '@/components/ui/Faq'
import Cta from '@/components/ui/Cta'
import Home from '@/components/Home'

const page = () => {
  return (
    <div>
      <AboutHero/>
      <Choose/>
      <Home/>
      <Faq/>
      {/* <Cta/> */}
    </div>
  )
}

export default page