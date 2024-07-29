import React from 'react';

const services = [
  {
    "name": "24/7 Emergency Service",
    "description": "From vehicle lockouts to vehicle breakdowns, we assist with everything to keep you on-road.",
    "call_to_action": "Read More"
  },
  {
    "name": "Towing, Rescue & Recovery",
    "description": "We tow all kinds of vehicles and machinery and offer wrecker and recovery services too.",
    "call_to_action": "Read More"
  },
  {
    "name": "Roadside Assistance",
    "description": "Need help with a dead battery or ignition problems with your vehicle?",
    "call_to_action": "Read More"
  },
  {
    "name": "Tire Repair & Replacement",
    "description": "Got a flat tire or need a tire change in the middle of the road? We are here to help.",
    "call_to_action": "Read More"
  },
  {
    "name": "Fuel Delivery Service",
    "description": "Ran out of gas? Can happen to anyone and this is where you need a reliable support partner.",
    "call_to_action": "Read More"
  }
];

const EachService = () => {
  return (
    <div className="flex flex-wrap md:gap-8 gap-4  items-center  justify-center p-4">
      {services.map((service, index) => (
        <div
          key={index}
          className="bg-primary shadow-lg rounded-lg  p-6 w-full h-52 sm:w-1/2 lg:w-1/3 xl:w-1/4"
        >
          <h2 className="text-xl text-darker font-semibold mb-2">{service.name}</h2>
          <p className="text-gray-700 mb-4">{service.description}</p>
          <a
            href="#"
            className="text-blue-500 hover:underline"
          >
            {service.call_to_action}
          </a>
        </div>
      ))}
    </div>
  );
};

export default EachService;
