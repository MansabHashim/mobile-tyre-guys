import React from "react";
import { FaPhoneAlt } from "react-icons/fa";

const Btn = (props) => {
  return (
    <div
      id="btn"
      className="bg-secondary hover:bg-primary hover:text-darker border-secondary border-2 flex items-center gap-2 justify-between btn w-fit rounded-lg px-7 py-3"
    >
      <FaPhoneAlt />{" "}
      <a href="" className="btn">
        {" "}
        909 202 20001
      </a>
      
    </div>
  );
};

export default Btn;
