"use client";
import { color } from "framer-motion";
import React from "react";
import { Typewriter } from "react-simple-typewriter";
// import { useTypewriter, Cursor } from 'react-simple-typewriter'

const TypEffect = () => {
  return (
    <div className="typehead">
      <p  >
        {/* Life is simple{" "} */}
        <span style={{  fontWeight: 'bold', fontSize:"x-large" }}>
          <Typewriter
            words={[
              "Have a Flat Tire?",
              "Looking for a Towing Truck? ",
              " Need a Jump Start?",
              "Out of Fuel?",
              "Need a tire replacement?",
              "Need a spare tire?",
            ]}
            loop={5}
            cursor
            cursorColor="orange"
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          />
        </span>
      </p>
    </div>
  );
};

export default TypEffect;
