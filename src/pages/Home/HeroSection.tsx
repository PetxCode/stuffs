import React from "react";
import { Button } from "../../components/reUse";

const HeroSection = () => {
  return (
    <div className="w-full h-[600px] bg-black text-white flex flex-col items-center justify-center">
      <div className="text-[#78fb95] uppercase text-sm font-bold tracking-widest">
        Growing with Data Analytics
      </div>
      <div className="text-[50px] uppercase font-bold  ">Grow with Data</div>

      <div className="uppercase text-sm font-bold text-[darkorange]">
        Fast, flexible and Reliable
      </div>
      <div>
        Monitor your data analytics to increase revenue for BTB, BTC & SASS
        platforms.
      </div>
      <Button title="Get Started Now" />
    </div>
  );
};

export default HeroSection;
