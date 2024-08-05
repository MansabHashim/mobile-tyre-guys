import React from 'react'
import Link from 'next/link'

const LearnMore = () => {
  return (
    <div id='learn' className='bg-darker  text-secondary hover:bg-secondary hover:text-darker hover:border-primary border-secondary border-2 rounded-lg px-7 py-3'> <Link href="/contact" className='learnmore'>Learn More</Link></div>

  )
}

export default LearnMore