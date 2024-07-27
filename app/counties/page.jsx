'use client'
import React, { useState, useEffect } from 'react';

const Page = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Define an async function to fetch data
    const fetchData = async () => {
      try {
        const response = await fetch('https://parseapi.back4app.com/classes/Area', {
          headers: {
            'X-Parse-Application-Id': 'VWAH9UbFty9tuCJVHIJPjYvH8OGcNyUTMkHH3UvL', // Application ID
            'X-Parse-Master-Key': 'UsYwiuputxOcEcYTZqWKshopMgEjElqA4U4Mcy9V', // Master Key
          },
        });
        const data = await response.json();
        setData(data.results); // Assuming data.results contains the array of areas
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
      {data.map((item, index) => (
        (item.state === 'Alaska' &&
       <div className=' bg-red-200 flex w-fit gap-5 m-5 p-2 rounded-e-full'>
         <h2 key={index}>{item.countyName}</h2>
         <h2 key={index}>{item.state}</h2>
       </div>)
      ))}
    </div>
  );
};

export default Page;
