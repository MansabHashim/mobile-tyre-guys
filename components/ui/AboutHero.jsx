import React from "react";
import Btn from "./Btn";
import LearnMore from "./LearnMore";
import { FaDotCircle } from "react-icons/fa";

const AboutHero = () => {
  return (
    <div className="hero h-fit p-5 bg-gray-700 -24 md:py-24 py-12 items-center justify-center flex flex-col gap-12">
      <div className="flex  w-full justify-center  gap-5 flex-col md:flex-row  items-center">
        <div className="md:w-[40%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5">
          <h2 className=" text-secondary">Mobile Tire Guys</h2>
          <h1 className=" text-lighter text-center lg:text-[3em] md:text-start md:text-5xl">
            {" "}
            <span>RELIABLE </span> ROADSIDE ASSISTANCE 24/7
          </h1>
          <p className="text-lg">
            Need reliable roadside assistance right when you need it? Mobile
            Tire Guys are here for you 24/7,  we serve all over the US. We specialize in
            quick and efficient solutions for breakdowns, including tire
            changes, battery jumps, and more. No matter the issue—be it a flat
            tire, dead battery, or other mechanical trouble—our skilled team is
            ready to get you back on the road in no time.
          </p>
          <ul className="flex items-start flex-col">
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              24/7 Live Support
            </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Clear and Competitive Pricing              </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Safe, Damage-Free Towing
              </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Rapid Response and Efficient Service
              </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Skilled and Professional Operators</li>
          </ul>
        </div>
        <div className="md:w-[500px] w-[90%]  ">
          <img
            className="shadow-lg shadow-gray-500 rounded-[20px]"
            src="https://cdn.pixabay.com/photo/2015/09/10/20/13/child-labor-934900_1280.jpg"
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

export default AboutHero;
