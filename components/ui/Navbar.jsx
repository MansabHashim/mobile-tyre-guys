'use client'
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { FaAlignJustify } from "react-icons/fa";
import Btn from "./Btn";

const Navbar = () => {
  const [menu, setmenu] = useState(false);

  return (
    <div>
      <div className="flex bg-primary w-full z-10 justify-between md:justify-evenly p-3 items-center text-whit">
        <img className="w-28" src="/new-logo.png" alt="Logo" />
        <ul className="md:flex hidden gap-6 border-secondary border-2 text-darker rounded-full px-7 py-2">
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
        <div
          onClick={() => setmenu(!menu)}
          className="md:hidden text-darker  cursor-pointer text-4xl"
        >
          {" "}
          <FaAlignJustify />
        </div>
        <Btn />
      </div>
      <div className="md:hidden mb-0">
        {menu && (
          <ul className="mobile-menu flex flex-col absolute z-50 justify-center items-start  gap-5 pb-5  bg-primary  rounde w-full px-12 py-2">
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
