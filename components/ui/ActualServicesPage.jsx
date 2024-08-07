import React from 'react'
import Btn from './Btn'
import LearnMore from './LearnMore'


const ActualServicesPage = (props) => {
  return (
    <div className={`hero ${props.bg} h-fit p-5-24 md:py-24 py-12 my5 items-center justify-center flex flex-col gap-12`}>
    <div className="flex  w-full justify-center   gap-5 flex-col md:flex-row  items-center">
      <div className={`md:w-[40%] md:items-start ${props.order} m-5 items-center md:justify-start justify-center flex flex-col gap-5`}>
        <h2 className=" text-secondary">Mobile Tire Guys Services</h2>
        <h1 className=" text-lighter text-center lg:text-[3em] md:text-start md:text-5xl">
          {" "}
          <span>{props.focus} </span> {props.heading}
        </h1>
        <p className="text-lg">
          {props.para}
        </p>
        <div className="flex gap-5 items-center">
      <Btn />
      <LearnMore />
    </div>
      </div>
      <div className={`md:w-[500px]  w-[90%] `}>
        <img
          className="shadow-lg shadow-gray-500 rounded-[20px]"
          src={props.imgsrc}
          alt=""
        />
      </div>
    </div>
   
  </div>
  )
}

export default ActualServicesPage