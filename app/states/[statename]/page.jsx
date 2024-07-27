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
    <div>
      <h2 className='text-center font-bold text-5xl my-5'>All the counties in <span className=' text-orange-500'>{state}</span> state </h2>
      <div className='grid lg:grid-cols-6 md:grid-cols-4 grid-cols-2 flex-wrap justify-evenly gap-5'>
      {data.map((item, index) => (
        (item.state === state &&
       <div className=' bg-red-200 flex w-fit gap-1 m-5 p-4 rounded-e-full'>
         <h2 key={index}>{item.countyName}</h2>
         <h2 key={index}>{item.state}</h2>
       </div>)
      ))}
    </div>
    </div>
  );
};

export default Page;
