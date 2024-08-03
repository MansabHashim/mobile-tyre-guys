import React from 'react'

const StateMap = () => {

    const apiKey = process.env.NEXT_PUBLIC_API_KEY; 
    const encodedCity = encodeURIComponent(cityName);
    const mapUrl = `https://www.google.com/maps/embed/v1/place?q=${encodedCity}&key=${apiKey}`;
  



  return (
    <div>StateMap</div>
  )
}

export default StateMap