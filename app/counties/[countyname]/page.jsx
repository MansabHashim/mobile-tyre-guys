'use client'
import Btn from '@/components/ui/Btn';
import LearnMore from '@/components/ui/LearnMore';
import React, { useState, useEffect } from 'react';
import CityMap from '@/components/ui/CityMap';

const Page = ({params}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [county, setcounty] = useState(`${params.countyname.replace(/%2C/g, ',').replace(/%20/g, ' ' ) + ' United States'}`)

 
  return (
    <div className=' flex px-24 py-12 items-start justify-center m-5 gap-5'>
        <div className='flex flex-col gap-5 pt-16 w-[45%]'>
        <h2 className='text-start font-bold text-5xl my-5'><span className=' text-primary'>{county}</span> Towing & Roadside Assistance </h2>
        <div className=' flex gap-5'>
        <Btn/>
        <LearnMore/>
        </div>
        </div>
   {/* <img className='w-[50%]' src="/logo.png" alt="" /> */}

<div className='w-[45%] '>
<CityMap cityName={params.countyname} />

</div>


    </div>
  );
};

export default Page;
