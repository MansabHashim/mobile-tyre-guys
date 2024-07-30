'use client'
import React, { useState, useEffect } from 'react';

const Page = ({params}) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [state, setstate] = useState(`${params.statename}`)

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
    <div className=' flex  flex-col items-center justify-center m-5 gap-5'>
      <h2 className='text-center font-bold text-5xl my-5'>All the counties in <span className=' text-primary'>{state.replace(/%20/g, ' ')}</span> state </h2>
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
    </div>
  );
};

export default Page;
