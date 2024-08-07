import React from "react";
import Btn from "./Btn";
import LearnMore from "./LearnMore";
import { FaDotCircle } from "react-icons/fa";

const Choose = () => {
  return (
    <div className="hero bg-gray00 h-fit p-5 md:py-24 py-12 items-center justify-center flex flex-col gap-12">
      <div className="flex  w-full justify-evenly  gap-5 flex-col md:flex-row  items-center">
      <div className="md:w-[500px] w-[%] ">
          <img
            className="shadow-lg shadow-gray-500 rounded-[20px]"
            src="https://img.freepik.com/free-photo/business-man-holding-clipboard-with-why-choose-us-question_23-2148932313.jpg?t=st=1722881427~exp=1722885027~hmac=5ce9d3c8f6bedaeaaecbfffdecc96b346bd809c27da6451f95cfedd036af1462&w=740"
            alt=""
          />
        </div>
        <div className="md:w-[40%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5">
          <h2 className=" text-secondary">Mobile Tire Guys</h2>
          <h1 className=" text-lighter text-center lg:text-[3em] md:text-start md:text-5xl">
            {" "}
            Why<span> Choose Us </span>
          </h1>
          <p className="text-lg">
            If you find yourself in a position where you need roadside assistent service, chances are good that the day is not going so
            well. Whether your vehicle has broken down or you have been involved
            in a car accident, we strive to provide dependable, prompt service
            with a grateful attitude.
          </p>
          <ul className="flex items-start flex-col">
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Get an Instant Quote by Phone
            </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Damage-Free Towing
              </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Fast Response and Efficient Service
              </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              Experienced and Trained Professionals
              </li>
            <li className="flex justify-center items-center gap-3 text-lighter">
              {" "}
              <i className="text-primary">
                {" "}
                <FaDotCircle />
              </i>{" "}
              24/7 Live On-Call Support
              </li>
          </ul>
        </div>
      
      </div>
      <div className="flex gap-5 items-center">
        <Btn />
        <LearnMore />
      </div>
    </div>
  );
};

export default Choose;
