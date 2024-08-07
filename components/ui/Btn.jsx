import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";

const Btn = (props) => {
  return (
    <a
    href="tel:888-451-6551"
      id="btn"
      className="bg-secondary hover:bg-primary hover:text-darker border-secondary border-2 flex items-center gap-0 justify-evenly btn md:w-[250px] w-[160px] md:h-16 h-12 rounded-lg px-2 py-3"
    >
      <FaPhoneSquareAlt className='md:text-5xl text-3xl bg-re-500' />{" "}
      <div className="btn text-black ">
       
       <p > 888-451-6551       </p>
       <p > Click To Call Us </p>
      </div>
      
    </a>
  );
};

export default Btn;
