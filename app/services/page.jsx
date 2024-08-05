import React from "react";
import Home from "@/components/Home";
import Cta from "@/components/ui/Cta";
import Faq from "@/components/ui/Faq";
import ActualServicesPage from "@/components/ui/ActualServicesPage";

const page = () => {
  return (
    <div>
      
      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-vector/twenty-four-service_1017-30335.jpg?w=740&t=st=1722543658~exp=1722544258~hmac=cc3d96a38d1179fb3c80753567645c458b7909843494e659e93af9d961fd1883"
        focus={"24/7"}
        heading={" EMERGENCY SERVICE"}
        bg='bg-gray-700'
        order='order-0'
        para={
          "From vehicle lockouts to vehicle breakdowns, we assist with everything to keep you on-road."
        }
      />
      

      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-photo/man-rolls-new-replacement-wheel-4x4-off-road-truck_1153-4384.jpg?t=st=1722543795~exp=1722547395~hmac=7c7fd0265e6a5cd6835f3ff3821f775ff1e57b5928bb8480740e65ff9bc52d66&w=1060"
        focus={"Towing,"}
        heading={" Rescue & Recovery"}
        bg='bg-gray-00'
        order='order-1'
        para={
          "We tow all kinds of vehicles and machinery and offer wrecker and recovery services too."
        }
      />
      

      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-photo/man-having-problem-with-his-car_329181-11882.jpg?t=st=1722543891~exp=1722547491~hmac=f10ff6b02c7d1dc5caa4bb7f58d7f180df7d6cd1a91b107c47bd16efda148352&w=1060"
        focus={"Roadside"}
        heading={"  Assistance"}
        bg='bg-gray-700'
        order='order-0'
        para={
          "Need help with a dead battery or ignition problems with your vehicle?"
        }
      />
      

      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-photo/car-mechanic-changing-wheels-car_1303-27471.jpg?t=st=1722543944~exp=1722547544~hmac=9afe7d5b6fb4c3acf1c077f209a8323607e51d04cead4766f5da8639a46f27e8&w=1060"
        focus={"Tire Repair"}
        heading={"  & Replacement"}
        bg='bg-gray-00'
        order='order-1'
        para={
          "Got a flat tire or need a tire change in the middle of the road? We are here to help."
        }
      />
      

      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-photo/view-woman-with-car-gas-station_23-2150516371.jpg?t=st=1722544075~exp=1722547675~hmac=39ac13627904af3f563e3b21dec0cef05b15753e07acc02a50a19e6e7676a0e2&w=1060"
        focus={"Fuel Delivery"}
        heading={"Service"}
        bg='bg-gray-700'
        order='order-0'
        para={
          "Ran out of gas? Can happen to anyone and this is where you need a reliable support partner."
        }
      />
      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-photo/unlocking-car-door-with-key_53876-25010.jpg?t=st=1722685407~exp=1722689007~hmac=d50a1091a2af8e11fcf5e201bf7e0d69b96a2cbe8058f6654e09a80faa52daba&w=1060"
        focus={"Car "}
        heading={"  lockout"}
        bg='bg-gray-00'
        order='order-1'
        para={
          "Got locked out of your car? No worries give us a call and we’ll help out"
        }
      />
      

      <ActualServicesPage
        imgsrc="https://img.freepik.com/free-photo/car-repairman-wearing-white-uniform-standing-holding-wrench-that-is-essential-tool-mechanic_1150-16588.jpg?t=st=1722685472~exp=1722689072~hmac=6992a5aef694b747f122fc988dcf7674e38aaa422e50b1affc63f5fd7d4bdb31&w=1060 "
        focus={"Battery "}
        heading={"Jump Start"}
        bg='bg-gray-700'
        order='order-0'
        para={
          "Is your car battery dead? We can help you out with a jumpstart to get you back on the road."
        }
      />
      

      <Home />
      {/* <Faq /> */}
      {/* <Cta /> */}
    </div>
  );
};

export default page;
