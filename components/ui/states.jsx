import React from 'react'
import data from '@/data/data'
import Link from 'next/link'

const States = () => {
  return (
    <div className='md:mx- w-[100%] flex flex-col items-center justify-center'>
      <h1 className='text-lighter my-5'><span>States</span> we serve in</h1>
       <div className=" grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 md:gap-x-5 gap-x-2 flex-wrap justify-evenly p-5">
      {data.states.map((state, index) => (
        <div key={index} className="state bg-primary py-4 px-8">
          <Link href={`/states/${state.name}`}>
          <h2 className=' font-mono text-2xl text-black font-bold'>{state.name}</h2>
          </Link>
          {/* <p>Capital: {state.capital}</p>
          <p>Largest City: {state.largest_city}</p>
          <p>Population: {state.population.toLocaleString()}</p>
          <p>Area: {state.area_sq_mi.toLocaleString()} sq mi</p> */}
          <p className='text-darker'>Number of Counties: {state.number_of_counties}</p>
          <hr/>
          {/* <p>State ZIP Code Range: {state.state_zip_code}</p>
          <p>State Abbreviation: {state.state_abbreviation}</p>
          <img src={state.state_flag} alt={`Flag of ${state.name}`} width={100} /> */}
        </div>
      ))}
    </div>
    </div>
  )
}

export default States