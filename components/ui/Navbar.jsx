import React from 'react'
import Image from 'next/image'
import Link from 'next/link'

const Navbar = () => {
  return (
    <div className='flex justify-evenly p-5 items-center text-whit'>
        <img className='w-28' src='/logo.png' alt="Logo" />
        <ul className='flex gap-6 bg-[#fcdc9d] rounded-full px-7 py-2' >
           <Link href='/'>    <li>Home</li>    </Link>
           <Link href='/about'>    <li>About</li>    </Link>
           <Link href='/services'>    <li>Services</li>    </Link>
           <Link href='/contact'>    <li>Contact</li>    </Link>
        </ul>
        <div className='bg-[#84d6e8] rounded-full px-5 py-2'> <a href="">909 202 20001</a></div>
    </div>
  )
}

export default Navbar