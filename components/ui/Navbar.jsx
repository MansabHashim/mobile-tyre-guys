'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignJustify, FaRegClock } from "react-icons/fa";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Btn from "./Btn";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  return (

    // laptop screen navbar
// {/* ////////////////////////////////////////////////////////////////////////// */}


    <div>
      <div className='lg:flex flex-col hidden'>

     
      <div className="flex bg-white w-full z-10 justify-between md:justify-between px-[15%] p-3 items-center text-whit">
        <img className="w-28" src="/new-logo.png" alt="Logo" />
        
        {/* <Btn /> */}
       <div className='flex gap-3'>

        <a
    href="tel:888-451-6551"
    id="btn"
      className="bg- hover:bg-primary hover:text-darker border- border2 flex items-center gap-2 justify-evenly btn  h-16 rounded-lg px-2 py-3"
      >
      <FaPhoneSquareAlt className='text-3xl bg-re-500 text-secondary' />{" "}
      <div className="btn text-black">
        <p> Call Us Toll Free </p>
       <p> 888-451-6551       </p>
       
      </div>
      
    </a>
        <a
    href="tel:888-451-6551"
    id="btn"
    className="bg- hover:bg-primary hover:text-darker border- border2 flex items-center gap-2 justify-evenly btn  h-16 rounded-lg px-2 py-3"
    >
      <FaRegClock className='text-3xl bg-re-500 text-secondary ' />{" "}
      <div className="btn text-black">
       <p> Availability </p>
       <p> 24/7</p>
      
      </div>
      
    </a>
      </div>
      </div>
<div className='flex bg-primary  justify-between px-[13%] py-2 bg-gray-700'>
<ul className="md:flex hidden gap-6 text-darker justify-center items-center border-secondary border-rounded-full px-7 py-2">
          <Link href="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link href="/about">
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link href="/services">
            {" "}
            <li>Services</li>{" "}
          </Link>
          <Link href="/contact">
            {" "}
            <li>Contact</li>{" "}
          </Link>
        </ul>
        <Btn/>
</div>
 </div>


{/* ////////////////////////////////////////////////////////////////////////// */}
{/* tablet navbar */}

<div className='md:block lg:hidden hidden'>

 <div className='flex  justify-between px-5 items-center bg-lighter  '>
 <img className="w-28" src="/new-logo.png" alt="Logo" />
 <div className='flex gap-3'>
 <a
    href="tel:888-451-6551"
    id="btn"
    className="bg- hover:bg-primary hover:text-darker border- border2 flex items-center gap-2 justify-evenly btn  h-16 rounded-lg px-2 py-3"
    >
      <FaRegClock className='text-3xl bg-re-500 text-secondary ' />{" "}
      <div className="btn text-black">
       <p> Availability </p>
       <p> 24/7</p>
      
      </div>
      
    </a>
    <Btn/>
 </div>

      </div>
      <div className='md:flex  bg-primary  justify-around py-2 bg-gray-700'>
<ul className="md:flex hidden gap-12 text-darker justify-center items-center border-secondary border-rounded-full px-7 py-2">
          <Link href="/">
            {" "}
            <li>Home</li>{" "}
          </Link>
          <Link href="/about">
            {" "}
            <li>About</li>{" "}
          </Link>
          <Link href="/services">
            {" "}
            <li>Services</li>{" "}
          </Link>
          <Link href="/contact">
            {" "}
            <li>Contact</li>{" "}
          </Link>
        </ul>
        {/* <Btn/> */}
</div>

 </div>

 {/* ////////////////////////////////////////////////////////////////// */}


{/* mobile menu  */}

{/* ////////////////////////////////////////////////////////////////////////////////////// */}

<div className='block md:hidden'>
  <div className='bg-lighter flex justify-between px-2'>
  <a
    href="tel:888-451-6551"
    id="btn"
      className="bg- hover:bg-primary hover:text-darker border- border2 flex items-center gap-2 justify-evenly btn  h-16 rounded-lg px-2 py-3"
      >
      <FaPhoneSquareAlt className='text-3xl bg-re-500 text-secondary' />{" "}
      <div className="btn text-black">
        <p> Call Us Toll Free </p>
       <p> 888-451-6551       </p>
       
      </div>
      
    </a>
        <a
    href="tel:888-451-6551"
    id="btn"
    className="bg- hover:bg-primary hover:text-darker border- border2 flex items-center gap-2 justify-evenly btn  h-16 rounded-lg px-2 py-3"
    >
      <FaRegClock className='text-3xl bg-re-500 text-secondary ' />{" "}
      <div className="btn text-black">
       <p> Availability </p>
       <p> 24/7</p>
      
      </div>
      
    </a>
  </div>
  <div className='flex  items-center justify-between bg-primary px-2'>
  <img className="w-28" src="/new-logo.png" alt="Logo" />
  <Btn/>
  <div
          onClick={() => setmenu(!menu)}
          className="md:hidden text-darker  cursor-pointer text-4xl"
        >
          {" "}
          <FaAlignJustify />
        </div>
  </div>
</div>



      <div className="md:hidden mb-0">
        {menu && (
          <ul className="mobile-menu flex flex-col absolute z-50 justify-center items-center  gap-5 pb-5  bg-primary  rounde w-full px-12 py-2">
            <Link href="/">
              {" "}
              <li>Home</li>{" "}
            </Link>
            <Link href="/about">
              {" "}
              <li>About</li>{" "}
            </Link>
            <Link href="/services">
              {" "}
              <li>Services</li>{" "}
            </Link>
            <Link href="/contact">
              {" "}
              <li>Contact</li>{" "}
            </Link>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Navbar;
