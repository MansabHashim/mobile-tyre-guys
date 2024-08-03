import React from 'react';

const services = [
  {
    "icon": "24-hours-support.png",
    "name": "24/7 Emergency Service",
    "description": "From vehicle lockouts to vehicle breakdowns, we assist with everything to keep you on-road.",
    "call_to_action": "Read More"
  },
  {
    "icon": "tow-truck.png",
    "name": "Towing, Rescue & Recovery",
    "description": "We tow all kinds of vehicles and machinery and offer wrecker and recovery services too.",
    "call_to_action": "Read More"
  },
  {
    "icon": "calling.png",
    "name": "Roadside Assistance",
    "description": "Need help with a dead battery or ignition problems with your vehicle?",
    "call_to_action": "Read More"
  },
  {
    "icon": "tire-wheels.png",
    "name": "Tire Repair & Replacement",
    "description": "Got a flat tire or need a tire change in the middle of the road? We are here to help.",
    "call_to_action": "Read More"
  },
  {
    "icon": "gas-station.png",
    "name": "Fuel Delivery Service",
    "description": "Ran out of gas? Can happen to anyone and this is where you need a reliable support partner.",
    "call_to_action": "Read More"
  },
  {
    "icon": "flat-tire.png",
    "name": "Flat Tire Change",
    "description": "we’ll come to your location, and change your tire quickly and safely to get you back on the road",
    "call_to_action": "Read More"
  },
  {
    "icon": "tyre-change.png",
    "name": "Spare Tire Rental",
    "description": "we’ll come to your location if your vehicle doesn’t have a spare tire we’ll let you rent our full-size spare tire",
    "call_to_action": "Read More"
  },
  {
    "icon": "car-rental.png",
    "name": "Car lockout",
    "description": "Got locked out of your car? No worries give us a call and we’ll help out",
    "call_to_action": "Read More"
  },
  {
    "icon": "battery.png",
    "name": "Battery Jump Start",
    "description": "Is your car battery dead? We can help you out with a jumpstart to get you back on the road.",
    "call_to_action": "Read More"
  },
  {
    "icon": "tire-lock.png",
    "name": "Wheel Lock Removal",
    "description": "Lost your wheel lock key? we’ll come to your location, and remove them safely without damaging the wheels.",
    "call_to_action": "Read More"
  },
  {
    "icon": "settings.png",
    "name": "Stripped Lug Nuts",
    "description": "Got a lug nut that’s stripped? we’ll come to your location, and remove them safely without damaging the wheel.",
    "call_to_action": "Read More"
  },
  {
    "icon": "tow.png",
    "name": "Towing",
    "description": "We tow up to 100 miles anywhere 24/7",
    "call_to_action": "Read More"
  },
];

const EachService = () => {
  return (
    <div className="flex flex-wrap md:gap-8 gap-4  items-center  justify-center p-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-secondary flex flex-col justify-start shadow-lg rounded-lg  p-6 w-full h-60 sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <img src={service.icon} className='w-16 text-black bg-blue-00 p-2 rounded-lg mb-3' alt=''/>
          <h2 className="text-xl text-darker font-semibold mb-2">{service.name}</h2>
          <p className="text-gray-700 mb-4">{service.description}</p>
          {/* <a
            href="/services"
            className="text-blue-500 hover:text-darker hover:underline"
          >
            {service.call_to_action}
          </a> */}
        </div>
      ))}
    </div>
  );
};

export default EachService;
