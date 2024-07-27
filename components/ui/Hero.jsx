import React from 'react'
import Btn from './Btn'
import LearnMore from './LearnMore'

const Hero = () => {

  return (          
    <div  className='flex hero h-[70vh] my-5 w-full justify-center  gap-5 flex-col md:flex-row  items-center'>
       
       
        <div className='md:w-[50%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5'>
            <h2 className=' text-secondary'>24 HOURS x 7 DAYs A WEEK
            </h2>
            <h1 className=' text-lighter text-center lg:text-[4em] md:text-start md:text-5xl'>Emergency <span>Roadside Help</span>, Towing, and Rescue</h1>
            <p className='text-lg'>Always Here to Help When You Need Us Most</p>
        <div className='flex gap-5 items-center'>
        <Btn />
        <LearnMore/>
        </div>

        </div>
        <div className='w-[300px] '><img src="https://cdn.pixabay.com/photo/2013/07/12/14/16/tire-148121_1280.png" alt="" /></div>
    </div>
  )
}

export default Hero