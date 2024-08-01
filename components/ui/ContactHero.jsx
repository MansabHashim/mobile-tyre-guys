import React from "react";
import ContactForm from "./ContactForm";
import Btn from "./Btn";

const ContactHero = () => {
  return (
    <div className="hero h-fit p-5 bg-gray-700 -24 md:py-24 py-12 my-5 items-center justify-center flex flex-col gap-12">
      <div className="flex  w-full justify-evenly  gap-5 flex-col md:flex-row  items-center">
        <div className="md:w-[40%] md:items-start items-center md:justify-start justify-center flex flex-col gap-5">
          {/* <h2 className=" text-secondary">Mobile Tyre Guys</h2> */}
          <h1 className=" text-lighter text-center lg:text-[3em] md:text-start md:text-5xl">
            {" "}
            <span>Get in Touch</span> with Us
          </h1>
          <p className="text-lg">
            Have questions or need assistance? Our team at Mobile Tyre Guys is
            here to help! Whether you need immediate roadside support, want to
            schedule a service, or just have a query, feel free to reach out.
            We’re available 24/7 to provide prompt and reliable assistance.
            Contact us via phone, email, or the form below, and we'll get back
            to you as soon as possible. Your convenience and satisfaction are
            our top priorities!
          </p>
          <div className="flex gap-5 items-center">
        <Btn />
        {/* <LearnMore /> */}
      </div>
        </div>
        <div className="md:w-[500px] w-[90%]  ">
          <ContactForm />
        </div>
      </div>
      
    </div>
  );
};

export default ContactHero;
