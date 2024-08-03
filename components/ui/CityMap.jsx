import React from 'react';

const CityMap = ({ cityName }) => {
  // Replace with your actual Google Maps API key
  const apiKey = process.env.NEXT_PUBLIC_API_KEY; 
  const encodedCity = encodeURIComponent(cityName);
  const mapUrl = `https://www.google.com/maps/embed/v1/place?q=${encodedCity}&key=${apiKey}`;

  return (
    <div style={{ width: '100%', height: '500px', borderRadius:"20px", padding:"5px", border: '1px solid #ddd', backgroundColor: '#fff', padding: '10px', boxSizing: 'border-box' }}>
      <iframe
        width="100%"
        height="100%"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        src={mapUrl}
        title={`Map of ${cityName}`}
      ></iframe>
    </div>
  );
};

export default CityMap;
