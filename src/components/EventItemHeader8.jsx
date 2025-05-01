"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { BiCalendarAlt, BiMap, BiUser } from "react-icons/bi";

export function EventItemHeader8() {
  return (
    <section id="relume" className="relative px-[5%] py-20 md:py-28 lg:py-32">
      <div className="relative z-10 container">
        <div className="mx-auto flex w-full max-w-xl md:max-w-2xl flex-col items-center text-center text-white">
          <div className="flex flex-col items-center">
            <h4 className="font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Exceptional Destination</h4>
            <div className="h-[1px] w-16 bg-[#d4b98c] my-4"></div>
            <h1 className="mt-3 text-4xl sm:text-5xl font-serif font-bold md:mt-4 md:text-7xl lg:text-8xl tracking-wide">
              Historic Elegance Meets Modern Luxury
            </h1>
          </div>
          <p className="mt-6 text-sm sm:text-base md:mt-7 md:text-lg font-sans leading-relaxed text-white/90">
            Schloss Thalheim offers an exclusive castle setting for weddings, corporate events, 
            yoga retreats, and cultural gatherings. Surrounded by majestic landscapes, our 
            historic property combines centuries of charm with contemporary comfort.
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm md:mt-9 text-[#d4b98c] font-serif">
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <BiCalendarAlt className="size-5 flex-none" />
              Available Year-Round
            </div>
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <BiMap className="size-5 flex-none" />
              <span>Kapelln, Austria</span>
            </div>
            <div className="flex items-center gap-3 border-b border-[#d4b98c] pb-1">
              <div className="flex h-5 items-center">
                <BiUser size={20} />
              </div>
              <span>Bespoke Experiences</span>
            </div>
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-y-3 gap-x-5 md:mt-12">
            <Button 
              title="Explore Venues" 
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-[#64625B] text-white hover:bg-[#64625B]/90 border border-[#64625B] font-serif tracking-wider text-sm shadow-sm hover:shadow transition-all duration-300"
            >
              Explore Venues
            </Button>
            <Button 
              title="Plan Your Event" 
              variant="secondary"
              className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 bg-transparent text-white border border-white/30 hover:bg-white/5 font-serif tracking-wider text-sm shadow-sm hover:shadow transition-all duration-300"
            >
              Plan Your Event
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 z-0">
        <img
          src="/hero/castle.jpg"
          className="size-full object-cover"
          alt="Schloss Thalheim Luxury Castle"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#000]/60 via-[#000]/50 to-[#000]/60" />
        <div className="absolute inset-0 bg-[#000]/20" />
      </div>
    </section>
  );
}
