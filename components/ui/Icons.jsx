import React from 'react'
import services from '@/data/services'


const Icons = () => {
  return (
    <div>
         <div className="flex flex-wrap md:gap-4 gap-2  md:items-start justify-center  md:justify-start md:w-[75%] p-4">
      {services.services.map((service, index) => (
        <div
          key={index}
          className="spin-on-hover bg-secondary hover:bg-primary hover:scale-105 transform scale-100 transition-transform duration-300 ease-in-out hover:animate-spin-1s flex flex-col justify-start shadow-lg rounded-lg  "
        >
          <img src={service.icon} className='w-12 icon text-black bg-blue-00 p-2 rounded-lg' alt=''/>
          {/* <h2 className="text-xl text-darker font-semibold mb-2">{service.name}</h2> */}
          {/* <p className="text-gray-700 mb-4">{service.description}</p> */}
          {/* <a
            href="/services"
            className="text-blue-500 hover:text-darker hover:underline"
          >
            {service.call_to_action}
          </a> */}
        </div>
      ))}
    </div>
    </div>
  )
}

export default Icons