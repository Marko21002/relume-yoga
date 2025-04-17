"use client";

import { Button } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import {
  BiLogoFacebookCircle,
  BiLogoInstagram,
  BiLogoLinkedinSquare,
  BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const ConditionalRender = ({ condition, children }) => {
  return condition ? <>{children}</> : null;
};

const useRelume = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);
  const animateMenu = isMenuOpen
    ? { menu: "open", menu2: "openSecond" }
    : { menu: "close", menu2: "closeSecond" };
  return {
    toggleMenu,
    animateMenu,
    isMenuOpen,
  };
};

export function Navbar16() {
  const useActive = useRelume();
  return (
    <section
      id="relume"
      className="relative z-[999] flex min-h-16 w-full items-center border-b border-b-[#d4b98c] bg-[#1a1a14] px-[5%] md:min-h-18 shadow-md"
    >
      <div className="mx-auto flex size-full items-center justify-between">
        <a href="#" className="flex items-center">
          <img
            src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
            alt="Relume placeholder logo"
            className="h-10 md:h-12 mr-3"
          />
          <span className="font-serif text-[#d4b98c] text-xl md:text-2xl tracking-wide">Castle Retreat</span>
        </a>
        <div className="flex items-center justify-center gap-2 lg:gap-4">
          <Button 
            title="Join" 
            size="sm" 
            className="px-4 py-1 md:px-6 md:py-2 bg-[#8b2131] hover:bg-[#6a1926] text-[#f8f3e9] border border-[#d4b98c] font-serif tracking-wider transition-all duration-300"
          >
            Join
          </Button>
          <button
            className="-mr-2 flex size-12 flex-col items-center justify-center justify-self-end lg:mr-0"
            onClick={useActive.toggleMenu}
          >
            <span className="relative flex size-6 flex-col items-center justify-center">
              <motion.span
                className="absolute top-[3px] h-0.5 w-full bg-[#d4b98c]"
                animate={useActive.animateMenu.menu}
                variants={{
                  open: {
                    width: 0,
                    transition: { duration: 0.3, ease: "easeIn" },
                  },
                  close: {
                    width: "100%",
                    transition: { duration: 0.3, delay: 0.3, ease: "linear" },
                  },
                }}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-[#d4b98c]"
                animate={useActive.animateMenu.menu}
                variants={{
                  open: {
                    rotate: 135,
                    transition: {
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  close: {
                    rotate: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                  openSecond: {
                    rotate: 45,
                    transition: {
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  closeSecond: {
                    rotate: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              />
              <motion.span
                className="absolute h-0.5 w-full bg-[#d4b98c]"
                animate={useActive.animateMenu.menu2}
                variants={{
                  open: {
                    rotate: 135,
                    transition: {
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  close: {
                    rotate: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                  openSecond: {
                    rotate: 45,
                    transition: {
                      duration: 0.4,
                      delay: 0.1,
                      ease: "easeInOut",
                    },
                  },
                  closeSecond: {
                    rotate: 0,
                    transition: { duration: 0.4, ease: "easeInOut" },
                  },
                }}
              />
              <motion.span
                className="absolute bottom-[3px] h-0.5 w-full bg-[#d4b98c]"
                animate={useActive.animateMenu.menu}
                variants={{
                  open: {
                    width: 0,
                    transition: { duration: 0.3, ease: "easeIn" },
                  },
                  close: {
                    width: "100%",
                    transition: { duration: 0.3, delay: 0.3, ease: "linear" },
                  },
                }}
              />
            </span>
          </button>
        </div>
      </div>
      <AnimatePresence>
        <ConditionalRender condition={useActive.isMenuOpen}>
          <div className="absolute inset-x-0 top-full h-[calc(100vh-4rem)] w-full overflow-hidden md:h-[calc(100vh-4.5rem)]">
            <motion.div
              variants={{ open: { opacity: 1 }, close: { opacity: 0 } }}
              animate={useActive.animateMenu.menu}
              initial="close"
              exit="close"
              transition={{ duration: 0.4 }}
              className="flex h-full flex-col overflow-auto bg-[#1a1a14] bg-opacity-98 px-[5%] pt-0.5 border-t border-[#d4b98c]"
            >
              <div className="my-auto grid grid-cols-1 gap-x-10 gap-y-6 py-8 text-center md:py-4">
                <a
                  href="#"
                  className="py-3 text-2xl leading-[1.2] font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300 md:text-10xl relative group"
                >
                  <span>Home Retreat</span>
                  <span className="block h-[1px] w-0 bg-[#d4b98c] mx-auto mt-1 group-hover:w-1/4 transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="py-3 text-2xl leading-[1.2] font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300 md:text-10xl relative group"
                >
                  <span>Wellness Programs</span>
                  <span className="block h-[1px] w-0 bg-[#d4b98c] mx-auto mt-1 group-hover:w-1/4 transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="py-3 text-2xl leading-[1.2] font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300 md:text-10xl relative group"
                >
                  <span>Luxury Stay</span>
                  <span className="block h-[1px] w-0 bg-[#d4b98c] mx-auto mt-1 group-hover:w-1/4 transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="py-3 text-2xl leading-[1.2] font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300 md:text-10xl relative group"
                >
                  <span>Explore More</span>
                  <span className="block h-[1px] w-0 bg-[#d4b98c] mx-auto mt-1 group-hover:w-1/4 transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="py-3 text-2xl leading-[1.2] font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300 md:text-10xl relative group"
                >
                  <span>Book Now</span>
                  <span className="block h-[1px] w-0 bg-[#d4b98c] mx-auto mt-1 group-hover:w-1/4 transition-all duration-300"></span>
                </a>
                <a
                  href="#"
                  className="py-3 text-2xl leading-[1.2] font-serif text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300 md:text-10xl relative group"
                >
                  <span>Testimonials</span>
                  <span className="block h-[1px] w-0 bg-[#d4b98c] mx-auto mt-1 group-hover:w-1/4 transition-all duration-300"></span>
                </a>
              </div>
              <div className="flex min-h-18 items-center justify-between gap-x-4 border-t border-[#d4b98c] py-4">
                <a
                  className="text-md font-serif text-[#d4b98c] hover:text-[#f8f3e9] md:text-xl rounded-button inline-flex items-center justify-center whitespace-nowrap transition-all duration-300 ease-in-out disabled:pointer-events-none disabled:opacity-50 focus-visible:outline-none border-0 gap-2 bg-transparent p-0"
                  href="#"
                >
                  Contact
                </a>
                <div className="flex items-center gap-4">
                  <a href="#" className="text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300">
                    <BiLogoFacebookCircle className="size-6" />
                  </a>
                  <a href="#" className="text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300">
                    <BiLogoInstagram className="size-6" />
                  </a>
                  <a href="#" className="text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300">
                    <FaXTwitter className="size-6" />
                  </a>
                  <a href="#" className="text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300">
                    <BiLogoLinkedinSquare className="size-6" />
                  </a>
                  <a href="#" className="text-[#d4b98c] hover:text-[#f8f3e9] transition-colors duration-300">
                    <BiLogoYoutube className="size-6" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </ConditionalRender>
      </AnimatePresence>
    </section>
  );
}
