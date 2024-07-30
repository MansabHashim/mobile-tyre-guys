import React from "react";
import Link from "next/link";

const Footer = () => {
  return <div className='flex w-full bg-gray-500 items-center justify-evenly   gap-5 p-5' >
    <div className='flex w-[50%]  flex-col gap-5'><img src="/logo.png" className='w-32' alt="" />
    <h2 className='text-darker leading-5 w-[75%]'>Call us anytime day or night, 24 hours a day, 7 days a week – your reliable roadside assistants.
</h2>
<div>
<p>123 123 123</p>
<p>hello@mobiletyreguys.com</p>
</div>
    </div>
    <div className='flex  flex-col gap-5 justify-center'>
    <ul className=" gap-6  text-lighter rounded-full px-1 py-2">
        <h2 className='py-1 text-2xl text-darker font-bold'>Menu</h2>
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
     </div>
  </div>;
};

export default Footer;
