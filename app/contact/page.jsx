import ContactForm from '@/components/ui/ContactForm'
import ContactHero from '@/components/ui/ContactHero'
import React from 'react'
import Faq from '@/components/ui/Faq'
import Cta from '@/components/ui/Cta'
import Home from '@/components/Home'


const page = () => {
  return (
    <div>
      <ContactHero/>
      <Home/>
      <Faq/>
      <Cta/>
    </div>
  )
}

export default page