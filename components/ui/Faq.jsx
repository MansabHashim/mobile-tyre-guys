import React from 'react'

const Faq = () => {
  return (
    <div className='hero bg-gray-00 h-fit p-5 md:py-24 py-12 my-5 items-center justify-center flex flex-col gap-12'>
    <div  className='flex  w-full justify-center  gap-5 flex-col md:flex-row  items-center'>
      
      
      <div className='md:w-[40%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5'>
          {/* <h2 className=' text-secondary'>Mobile Tyre Guys</h2> */}
          <h1 className=' text-lighter text-center lg:text-[3em] md:text-start md:text-5xl'> <span>FAQs          </span> 
          </h1>
          <p className='text-lg'>Whether your vehicle has broken down or you have been involved in a car accident, we strive to provide dependable, prompt service with a grateful attitude.      </p>
      
      
  
      </div>
      <div className='md:w-[500px] w-[90%] bg-gray-300 rounded-xl  '><img className=' shadow-2xl  shadow-gray-500 rounded-[20px]' src="/man.png" alt="" /></div>
  </div>
  {/* <div className='flex gap-5 items-center'>
      
      <Btn />
      <LearnMore/>
      </div> */}
  </div>
  )
}

export default Faq