"use client";
import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionItemHeading,
  AccordionItemButton,
  AccordionItemPanel,
} from "react-accessible-accordion";

// Demo styles, see 'Styles' section below for some notes on use.
import "react-accessible-accordion/dist/fancy-example.css";

const AccordianComp = () => {


  return (
    <Accordion className=" w-full ">
      <AccordionItem >
        <AccordionItemHeading className="bg-primary">
          <AccordionItemButton>Are you available 24/7?</AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Absolutely. We know that emergencies don’t come announced at can
            occur at any time. We have dispatchers and operators trained to
            handle your emergency roadside service quickly.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            Do you accept credit cards?{" "}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Yes. We accept most major credit cards and forms of digital
            payments.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            How much does your service cost?{" "}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            The cost varies depending on many factors. We can give you a
            quick/no hassle cost estimate over the phone. After you accept the
            quoted price only then you choose to pay and avail our service.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionItemHeading>
          <AccordionItemButton>
            I locked myself out of my vehicle, can you help?{" "}
          </AccordionItemButton>
        </AccordionItemHeading>
        <AccordionItemPanel>
          <p>
            Absolutely, we handle car lockouts on almost every make and model
            vehicle. Also if you need a car trunk opened or if you need a spare
            car key made, feel free to call us.
          </p>
        </AccordionItemPanel>
      </AccordionItem>
    </Accordion>
  );
};

export default AccordianComp;
