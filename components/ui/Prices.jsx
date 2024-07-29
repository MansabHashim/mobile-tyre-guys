import React from 'react'
import Btn from './Btn'
import LearnMore from './LearnMore'

const Prices = () => {
  return (
    <div className='hero bg-gray-700 h-fit p-5 md:py-24 py-12 my-5 items-center justify-center flex flex-col gap-12'>
    <div  className='flex  w-full justify-center  gap-12 flex-col md:flex-row  items-center'>
      
          <div className='lg:w-[500px] w-[90%] '><img className='shadow-lg shadow-gray-500 rounded-[20px]' src="/truck.jpg" alt="" /></div>
      
      <div className='md:w-[40%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5'>
          <h2 className=' text-secondary'>Our Prices are
          </h2>
          <h1 className=' text-lighter text-center lg:text-[3em] md:text-start md:text-5xl'> <span>Fair </span>  & Affordable
          </h1>
          <p className='text-lg'>If you are looking for a reliable towing and roadside assistance operator, then we are here to help 24/7. Contact us now to get a quote for your service.</p>
      <div className=' grid grid-cols-2 grid-rows-2 lg:gap-5 gap-2'>
        <div className='flex flex-col gap-3 p-5 border-amber-100 border rounded-md  '>
            <h2 className='lg:text-5xl md:text-3xl text-3xl  font-extrabold text-primary'>11</h2>
            <p className=' text-lg'>Years of Experience</p>
        </div>
        <div className='flex flex-col gap-3 p-5 border-amber-100 border rounded-md  '>
            <h2 className='lg:text-5xl md:text-3xl text-3xl  font-extrabold text-primary'>2+</h2>
            <p className=' text-lg'>Customers Assisted per month            </p>
        </div>
        <div className='flex flex-col gap-3 p-5 border-amber-100 border rounded-md  '>
            <h2 className='lg:text-5xl md:text-3xl text-3xl  font-extrabold text-primary'>2k+</h2>
            <p className=' text-lg'>Counties Served in US            </p>
        </div>
        <div className='flex flex-col gap-3 p-5 border-amber-100 border rounded-md  '>
            <h2 className='lg:text-5xl md:text-3xl text-3xl  font-extrabold text-primary'>100%</h2>
            <p className=' text-lg'>Local & Verified Operators            </p>
        </div>
      </div>
      
      
  
      </div>
  </div>
  <div className='flex gap-5 items-center'>
      
      <Btn />
      <LearnMore/>
      </div>
  </div>
  )
}

export default Prices