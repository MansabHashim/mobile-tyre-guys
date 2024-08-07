import React from "react";
import Btn from "./Btn";
import LearnMore from "./LearnMore";
import { FaDotCircle } from "react-icons/fa";

const Subhero = () => {
  return (
    <div className="hero bg-gray-700 h-fit p-5 mt-24 md:py-24 py-12 my-5 items-center justify-center flex flex-col gap-12">
      <div className="flex  w-full justify-center  gap-5 flex-col md:flex-row  items-center">
        <div className="md:w-[40%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5">
          <h2 className=" text-secondary">Mobile Tire Guys</h2>
          <h1 className=" text-lighter text-center lg:text-[3em] md:text-start md:text-5xl">
            {" "}
            <span>24x7 </span> Roadside Assistance
          </h1>
          <p className="text-lg">
            Whether your vehicle has broken down or you have been involved in a
            car accident, we strive to provide dependable, prompt service with a
            grateful attitude.{" "}
          </p>
          <ul className="flex items-start flex-col">
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              24x7 LIVE On-Call Support
            </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Transparent & Affordable Price{" "}
            </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Damage-Free Towing{" "}
            </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Quick Response Time and Prompt Service{" "}
            </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Experienced and Trained Operators{" "}
            </li>
          </ul>
        </div>
        <div className="md:w-[500px] w-[90%]  ">
          <img
            className="shadow-lg shadow-gray-500 rounded-[20px]"
            src="/tyre-changing.jpg"
            alt=""
          />
        </div>
      </div>
      <div className="flex gap-5 items-center">
        <Btn />
        <LearnMore />
      </div>
    </div>
  );
};

export default Subhero;
