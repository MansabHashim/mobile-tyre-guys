import React from "react";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

const LearnMore = () => {
  return (
    <Link
    href="/contact"
    id="learn" 
      className="bg-darker flex items-center justify-evenly gap-0  text-secondary hover:bg-secondary hover:text-darker hover:border-primary border-secondary border-2 rounded-lg px-2 w-[150px] h-16 py-3"
    >
      {" "}
      <div className="learnmore">
        Learn More
      </div>
      <FaArrowRight/>
    </Link>
  );
};

export default LearnMore;
