"use client";

import { Button, Checkbox, Input, Label, Textarea } from "@relume_io/relume-ui";
import React from "react";

export function Contact10() {
  return (
    <section id="relume" className="px-[5%] py-20 md:py-28 lg:py-32 bg-gradient-to-b from-[#232218] to-[#1a1a14] text-[#f8f3e9]">
      <div className="container mx-auto grid grid-cols-1 gap-y-16 md:grid-flow-row md:grid-cols-2 md:gap-x-16 lg:gap-x-24">
        <div className="relative">
          <div className="absolute -top-4 -left-4 w-16 h-16 border-l-2 border-t-2 border-[#d4b98c] opacity-60"></div>
          <div className="absolute -bottom-4 -right-4 w-16 h-16 border-r-2 border-b-2 border-[#d4b98c] opacity-60"></div>
          <div className="border border-[#d4b98c]/30 overflow-hidden">
            <img
              src="https://relume-assets.s3.us-east-1.amazonaws.com/placeholder-map-image.svg"
              alt="Castle Location Map"
              className="size-full object-cover opacity-90 hover:opacity-100 transition-opacity duration-500"
            />
          </div>
          <div className="bg-[#1a1a14] border border-[#d4b98c]/30 p-6 md:p-8 mt-6 md:mt-8">
            <h4 className="font-serif text-xl text-[#d4b98c] mb-4">Castle Retreat Location</h4>
            <p className="font-serif mb-4">1234 Royal Estate Drive<br/>Castleton, CA 95123</p>
            <p className="font-serif mb-2">contact@castleretreat.com</p>
            <p className="font-serif">+1 (555) 123-4567</p>
          </div>
        </div>
        <div>
          <div className="mb-8 md:mb-10">
            <p className="mb-4 font-serif text-[#d4b98c] tracking-widest uppercase text-sm md:text-base">Royal Connection</p>
            <div className="h-[1px] w-16 bg-[#d4b98c] mb-6"></div>
            <h2 className="mb-6 text-5xl font-serif font-bold md:mb-8 md:text-6xl lg:text-7xl tracking-wide">
              Get in Touch
            </h2>
            <p className="font-serif leading-relaxed md:text-lg">We'd be honored to assist with your royal wellness journey.</p>
          </div>
          <form className="grid grid-cols-1 gap-8">
            <div className="grid w-full items-center">
              <Label htmlFor="name" className="mb-3 font-serif text-[#d4b98c]">
                Name
              </Label>
              <Input 
                type="text" 
                id="name" 
                className="bg-[#1a1a14] border-[#d4b98c]/50 p-4 font-serif focus:border-[#d4b98c] focus:ring-[#d4b98c]/30 text-[#f8f3e9]" 
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="email" className="mb-3 font-serif text-[#d4b98c]">
                Email
              </Label>
              <Input 
                type="email" 
                id="email" 
                className="bg-[#1a1a14] border-[#d4b98c]/50 p-4 font-serif focus:border-[#d4b98c] focus:ring-[#d4b98c]/30 text-[#f8f3e9]" 
              />
            </div>
            <div className="grid w-full items-center">
              <Label htmlFor="message" className="mb-3 font-serif text-[#d4b98c]">
                Message
              </Label>
              <Textarea
                id="message"
                placeholder="Share your wellness wishes..."
                className="min-h-[11.25rem] overflow-auto bg-[#1a1a14] border-[#d4b98c]/50 p-4 font-serif focus:border-[#d4b98c] focus:ring-[#d4b98c]/30 text-[#f8f3e9]"
              />
            </div>
            <div className="mb-4 flex items-center space-x-4 text-sm">
              <Checkbox id="terms" className="border-[#d4b98c] text-[#8b2131] focus:ring-[#d4b98c]/30" />
              <Label htmlFor="terms" className="cursor-pointer font-serif text-[#f8f3e9]">
                I agree to the Royal Treatment Terms
              </Label>
            </div>
            <div>
              <Button 
                title="Submit Inquiry"
                className="px-8 py-3 bg-[#8b2131] hover:bg-[#6a1926] text-[#f8f3e9] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300 shadow-md"
              >
                Submit Inquiry
              </Button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
