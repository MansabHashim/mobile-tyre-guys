import React from 'react'
import Link  from 'next/link'
import data from '@/data/data'
import CityMap from './CityMap'

const AllStates = () => {
  return (
    <div  className=' md:mx- w-[100%] flex flex-col items-center justify-center'>
    <h1 className='text-lighter text-center my-5'>We Serve All Over the <span>United States</span></h1>
    <CityMap className='w-32' cityName={"United States"}/>
     <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-x-5 gap-x-2 flex-wrap justify-evenly p-5">
    {data.states.map((state, index) => (

      <Link key={index} href={`/states/${state.name}`}  className="state bg-secondary hover:bg-primary rounded-md my-2 py-4 px-8">
        {/* <a > */}
        <h2 className=' font- my-2 text-2xl text-black font-bold'>{state.name}</h2>
        {/* </a> */}
        {/* <p>Capital: {state.capital}</p>
        <p>Largest City: {state.largest_city}</p>
        <p>Population: {state.population.toLocaleString()}</p>
        <p>Area: {state.area_sq_mi.toLocaleString()} sq mi</p> */}
        {/* <p className='text-darker'>Number of Counties: {state.number_of_counties}</p> */}
        <hr/> 
        {/* <p>State ZIP Code Range: {state.state_zip_code}</p>
        <p>State Abbreviation: {state.state_abbreviation}</p>*/}
         <div className='mx-2 statesIMG'>
         {state.name === 'Georgia' ? (
              <img src='https://usflags.design/assets/images/flag-georgia.svg' alt={`Flag of ${state.name}`} width={100} />
            ) : (
              <img src={state.state_flag} alt={`Flag of ${state.name}`} width={100} />
            )}
         </div>
      </Link>
    ))
    
    }
  </div>
  </div>
  )
}

export default AllStates