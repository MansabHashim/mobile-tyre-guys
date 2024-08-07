import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const LearnMore = () => {
  return (
    <Link
    href="/contact"
    id="learn" 
      className="bg-darker flex items-center justify-evenly hover:text-black gap-0  text-secondary hover:bg-secondary hover:text-darker hover:border-primary border-secondary border-2 rounded-lg px-2 md:w-[160px] w-[120px] md:h-16 h-12 py-3"
    >
      {" "}
      <div className="learnmore md:text-xl text-sm  flex items-center justify-between gap-1 text-secondary">
       <p className='text-secondary hover:text-black'> Learn More</p>
      <FaArrowRight className='lrnmre'/>
      </div>
    </Link>
  );
};

export default LearnMore;
