'use client'
import CityMap from '@/components/ui/CityMap';
import React, { useState, useEffect } from 'react';
import LearnMore from '@/components/ui/LearnMore';
import Btn from '@/components/ui/Btn';
import Cities from '@/components/ui/Cities';

const Page = ({params}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setstate] = useState(`${params.statename.replace(/%20/g, ' ')}`)

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://parseapi.back4app.com/classes/Area?limit=5000', {
          headers: {
            'X-Parse-Application-Id': 'VWAH9UbFty9tuCJVHIJPjYvH8OGcNyUTMkHH3UvL', // Application ID
            'X-Parse-Master-Key': 'UsYwiuputxOcEcYTZqWKshopMgEjElqA4U4Mcy9V', // Master Key
          },
        });
        const data = await response.json();
        setData(data.results); // Assuming data.results contains the array of areas
        console.log(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []); // Empty dependency array means this effect runs once on mount

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className=' flex  flex-col items-center justify-center p5 gap-5'>
      <div className='flex gap-5 bg-gray-700 p-12 w-full flex-wrap justify-evenly'>
      <div className='flex flex-col gap-5 pt-16 w-[40%]'>
        <h2 className='text-start font-bold text-5xl my-5'><span className=' text-primary'>{state}</span> Towing & Roadside Assistance </h2>
        <div className=' flex gap-5'>
        <Btn/>
        <LearnMore/>
        </div>
        </div>
        <div className='w-[40%]'>
        <CityMap className='w-32' cityName={state}/>
        </div>
      </div>
      <h2 className='text-center font-bold text-5xl my-5'>All the counties in <span className=' text-primary'>{state}</span> state </h2>
      <div className='grid lg:grid-cols-5 md:grid-cols-4 grid-cols-2 flex-wrap justify-evenly gap-x-5'>
      {data.map((item, index) => (
        (item.state === state.replace(/%20/g, ' ') &&
       <div className=' bg-secondary text-black  gap-3 m- p-5 '>
         <h2 key={index} className='text-wrap text-black leading-5'>{item.countyName}</h2>
         <hr className=' mt-3' />
         {/* <h2 key={index}>{item.state}</h2> */}
       </div>)
      ))}
    </div>
        <Cities/>
    </div>
  );
};

export default Page;
