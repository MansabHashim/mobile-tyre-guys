'use client'
import React from 'react'

import { useState } from "react";

export default function ContactForm() {
    const [result, setResult] = React.useState("");
  
    const onSubmit = async (event) => {
      event.preventDefault();
      setResult("Sending....");
      const formData = new FormData(event.target);
  
      formData.append("access_key", "82e602d0-d967-4bc5-896f-42ece99d4939");
  
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: formData
      });
  
      const data = await response.json();
  
      if (data.success) {
        setResult("Form Submitted Successfully");
        event.target.reset();
      } else {
        console.log("Error", data);
        setResult(data.message);
      }
    };


  
    return (
      <div className=' flex  flex-col gap-5 justify-center items-center w-[100%] py-8 rounded-2xl bg-blue-200'>
        <h2 className=" text-darker text-center lg:text-[2rem] md:text-start md:text-5xl">Fill Out The Form</h2>
        <form onSubmit={onSubmit} className='flex flex-col gap-5 items-center justify-center  w-full '>
          <input className='bg--300 rounded w-[90%] p-3 '  type="text" name="name" placeholder='"Your Name"' required/>
          <input className='bg--300 rounded w-[90%] p-3 ' type="email" name="email" placeholder='"Your Email"' required/>
          <input className='bg--300 rounded w-[90%] p-3 ' type="text" name="Phone" placeholder='"Your Phone"' required/>
          <textarea className='bg--300 rounded  w-[90%] p-3 ' name="message" placeholder='"Write Your Message"' required></textarea>
          {/* <textarea className='bg--300 rounded  w-[90%] p-3 ' name="message" placeholder='"Write Your Message"' required></textarea> */}
         <div className='px-8 text-sm'>
          <input className='' type="checkbox" id="consent" name="consent" value='By submitting this form and signing up for texts, you consent to receive marketing text messages from The Mobile Tyre Guys at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Unsubscribe at any time by replying STOP. I have also read and agree to the Privacy Policy'></input>
         <label for="consent">By submitting this form and signing up for texts, you consent to receive marketing text messages from The Mobile Tyre Guys at the number provided. Consent is not a condition of purchase. Msg & data rates may apply. Unsubscribe at any time by replying STOP. I have also read and agree to the<a href="/privacy">
            {" "}
            privacy policy
          </a></label>
         
         </div>
           <button className=' bg-primary px-7 py-3 rounded-full' type="submit">Submit Form</button>
  
        </form>
        <span className='text-darker px-3'>{result}</span>
  
      </div>
    );
  }