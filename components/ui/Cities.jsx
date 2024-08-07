import React from "react";
import cities from "@/data/cities";
import Link from "next/link";

const Cities = () => {
  return (
    <div className=" bg-gray-700 flex self-center  flex-wrap py-12 my-0 gap-12 flex-col items-center justify-center">
      <div className=' m-12 w-[80%]'>
      <h2 className='text-white my-12 leading-[3rem] text-[3rem] text-wrap font-bold'>Where is Mobile Tire Guys <span className='text-primary'>available?</span></h2>
      <p>
        Mobile Tire Guys is available nationwide across the United States &
        Puerto Rico, providing fast, reliable 24/7/365 emergency roadside
        assistance for car lockout, jump starts, out of gas, tire changes, and
        towing service. Below, explore a small sample of the cities we serve.
      </p>
      </div>
      <div className=" grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-12 gap-y-2">
        {cities.map((city, index) => (
                //   <div key={index} className="state bg-primary rounded-md my-2 py-4 px-8">
           <Link className='bg-primary p-2 leading-10 rounded' href={`/cities/${city}`}>
           <h2 className=' font- my-2  text-black font-md hover:text-secondary'>{city}</h2>
           </Link>
            // {city}
        ))}
      </div>
    </div>
  );
};

export default Cities;
