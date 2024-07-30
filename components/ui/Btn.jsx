import React from "react";
// import { FaPhoneAlt } from "react-icons/fa";

const Btn = (props) => {
  return (
    <div
      id="btn"
      className="bg-primary hover:bg-secondary hover:text-darker flex items-center gap-2 justify-between btn w-fit rounded-full px-7 py-2"
    >
      {/* <FaPhoneAlt />{" "} */}
      <a href="" className="btn">
        {" "}
        909 202 20001
      </a>
    </div>
  );
};

export default Btn;
