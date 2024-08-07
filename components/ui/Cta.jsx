import React from "react";
import Btn from "./Btn";
import LearnMore from "./LearnMore";

const Cta = () => {
  return (
    <div className=" bg-gray-00 h-fit p-5 md:py-24 py-12 my-5 items-center justify-center fle flex-col gap-12">
      <div className="flex flex-col  w-full justify-center  gap-5  items-center">
        <div className=" flex  flex-col justify-center items-center gap-6">
          <h2 className=" text-secondary underline underline-offset-8 ">
            The Mobile Tire Guys 
          </h2>
          <h1 className=" text-lighter text-center  lg:text-[3em] md:text-5xl">
            {" "}
            <span>Professional and Prompt</span> <br />
            Roadside Assistance
          </h1>
          <p className="text-lg w-[70%] flex items-center  text-center ">
          We are only a call away no matter what the emergency situation you are in on your journey. Whether you are on-road or off-road, our team of experts will be able to reach you quickly for a speedy assistance.


          </p>
        </div>
        <div className="flex justify-evenly items-center gap-5  pb-12">
          {/* <EachService/> */}
        </div>
      </div>
      <div className="flex gap-5 justify-center items-center">
        <Btn />
        <LearnMore />
      </div>
    </div>
  );
};

export default Cta;
