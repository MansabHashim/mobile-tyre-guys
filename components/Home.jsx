import React from 'react'
import data from '@/data/data'
import Link from 'next/link'
// import States from './ui/States'

const states = () => {
  return (
    <div>
      {/* <States/> */}
    </div>
  )
}

export default states


    //    <div className=" grid lg:grid-cols-4 md:grid-cols-2 grid-cols-2 gap-5 justify-start p-5">
    //   {data.states.map((state, index) => (
    //     <div key={index} className="state bg-red-500 rounded-lg p-5">
    //       <Link href={`/states/${state.name}`}>
    //       <h2 className=' font-mono text-2xl text-black font-bold'>{state.name}</h2>
    //       </Link>
    //       <p>Capital: {state.capital}</p>
    //       <p>Largest City: {state.largest_city}</p>
    //       <p>Population: {state.population.toLocaleString()}</p>
    //       <p>Area: {state.area_sq_mi.toLocaleString()} sq mi</p>
    //       <p>Number of Counties: {state.number_of_counties}</p>
    //       <p>State ZIP Code Range: {state.state_zip_code}</p>
    //       <p>State Abbreviation: {state.state_abbreviation}</p>
    //       <img src={state.state_flag} alt={`Flag of ${state.name}`} width={100} />
    //     </div>
    //   ))}
    // </div>