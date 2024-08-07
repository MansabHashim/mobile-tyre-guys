import React from "react";
import { FaPhoneSquareAlt } from "react-icons/fa";
import Link from "next/link";

const Btn = (props) => {
  return (
    <Link
    href="/"
      id="btn"
      className="bg-secondary hover:bg-primary hover:text-darker border-secondary border-2 flex items-center gap-0 justify-evenly btn w-[220px] h-16 rounded-lg px-2 py-3"
    >
      <FaPhoneSquareAlt className='text-5xl bg-re-500' />{" "}
      <div className="btn text-black">
       
       <p> 909 202 20001</p>
       <p> Click To Call Us</p>
      </div>
      
    </Link>
  );
};

export default Btn;
