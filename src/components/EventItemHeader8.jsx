"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCalendarAlt, BiMap, BiUser } from "react-icons/bi";

export function EventItemHeader8() {
  return (
    <section id="relume" className="relative px-[5%] py-20 md:py-28 lg:py-32">
      <div className="relative z-10 container">
        <div className="mx-auto flex w-full max-w-lg flex-col items-center text-center text-[#f8f3e9]">
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Luxury Escape</h4>
            <div className="h-[1px] w-16 bg-[#d4b98c] my-4"></div>
            <h1 className="mt-3 text-5xl font-serif font-bold md:mt-4 md:text-7xl lg:text-8xl tracking-wide">
              Castle Wellness Retreat
            </h1>
          </div>
          <p className="mt-6 text-base md:mt-7 md:text-md font-serif leading-relaxed">
            Experience rejuvenation in a breathtaking castle setting designed
            for your ultimate wellness journey.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm md:mt-9 text-[#d4b98c] font-serif">
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <BiCalendarAlt className="size-6 flex-none" />
              Sat 10 Feb 2024
            </div>
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <BiMap className="size-6 flex-none" />
              <span>Historic Castle</span>
            </div>
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <div className="flex h-6 items-center">
                <BiUser size={23} />
              </div>
              <span>Wellness Experts</span>
            </div>
          </div>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-6 md:mt-12">
            <Button 
              title="Save my spot" 
              className="px-8 py-3 bg-[#8b2131] hover:bg-[#6a1926] text-[#f8f3e9] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300"
            >
              Save my spot
            </Button>
            <Button 
              title="View event" 
              variant="secondary-alt"
              className="px-8 py-3 bg-transparent hover:bg-[#d4b98c]/10 text-[#d4b98c] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300"
            >
              View event
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg"
          className="size-full object-cover"
          alt="Castle Wellness Retreat"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1a1a14]/80 via-[#1a1a14]/70 to-[#1a1a14]/80" />
        <div className="absolute inset-0 bg-[#1a1a14]/30" />
      </div>
    </section>
  );
}
