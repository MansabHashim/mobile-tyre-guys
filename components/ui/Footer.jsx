import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="flex w-full lg:flex-row bg-primary md:flex-col flex-col text-black items-start justify-evenly   gap-5 p-8">
      <div className="flex lg:w-[30%]  flex-col gap-5">
        <img src="/logo.png" className="w-32" alt="" />
        <h2 className="text-darker leading-5 text-black">
          Call us anytime day or night, 24 hours a day, 7 days a week – your
          reliable roadside assistants.
        </h2>
        <div className='flex  flex-col gap-2 text-black'>
          <a href='tel:123 123 123' className='text-black'>123 123 123</a>
          <a href='mailto:hello@mobiletyreguys.com' className='text-black'>hello@mobiletyreguys.com</a>
          {/* <p className='text-black'>hello@mobiletyreguys.com</p> */}
        </div>
      </div>
      <div className="flex footerLinks  flex-col gap-5 justify-center">
        <ul className=" gap-6   text-lighter rounded-full px-1 py-2">
          <h2 className="py-1 text-2xl text-darker font-bold">Menu</h2>
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
          <Link href="/privacy">
            {" "}
            <li>Privacy & CCP</li>{" "}
          </Link>
        </ul>
      </div>
      <div className='flex flex-col  gap-5 lg:w-[30%]'>
        <h2 className='text-black text-2xl'>Disclaimer</h2>
        <p className='text-black'>
          Mobiletireguys.com is a referral and recommendation service for
          roadside assistance. We connect you to a provider of local roadside
          assistance. We do not own or administer any roadside
          assistance-related services. Each consumer bears responsibility for
          making sure their service provider meets all licensing and insurance
          requirements in their state. The images displayed are for purposes of
          illustration only and do not represent the towing services available
          in your area.
        </p>
      </div>
    </div>
  );
};

export default Footer;
