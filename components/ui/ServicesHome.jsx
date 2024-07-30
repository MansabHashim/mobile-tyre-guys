import React from 'react'
import Btn from './Btn'
import LearnMore from './LearnMore'
// import { FaDotCircle } from 'react-icons/fa'
import EachService from './EachService'

const ServicesHome = () => {
  return (
    <div className=' bg-gray-00 h-fit p-5 md:py-24 py-12 my-5 items-center justify-center fle flex-col gap-12'>
    <div  className='flex flex-col  w-full justify-center  gap-5  items-center'>
      
      
      <div className=' flex  flex-col justify-center items-center gap-6'>
          <h2 className=' text-secondary underline underline-offset-8 '>24 HOUR SERVICES
          </h2>
          <h1 className=' text-lighter text-center  lg:text-[3em] md:text-5xl'> <span>Light & Heavy Duty Towing</span> <br /> 
          Roadside Assistance & Vehicle Recovery
          </h1>
          <p className='text-lg w-[70%] flex items-center  text-center '>Whether your vehicle has broken down or you have been involved in a car accident, we strive to provide dependable, prompt service with a grateful attitude.      </p>
      
      
  
      </div>
      <div className='flex justify-evenly items-center gap-5  pb-12'>
       <EachService/>
      </div>
  </div>
  <div className='flex gap-5 justify-center items-center'>
      
      <Btn />
      <LearnMore/>
      </div>
  </div>
  )
}

export default ServicesHome