"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { motion } from "framer-motion";

export function Header1() {
  return (
    <section
      id="relume"
      className="bg-zinc-900 text-white px-[5%] py-28 md:py-36 lg:py-44 mt-16 relative overflow-hidden"
    >
      <div className="container relative z-10 mx-auto">
        <motion.div
          className="flex flex-col items-center text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.6,
            ease: [0.22, 1, 0.36, 1],
          }}
        >
          {/* Content */}
          <motion.p
            className="font-mono text-emerald-400 text-sm uppercase tracking-widest mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Web Design Studio
          </motion.p>
          <motion.h1
            className="mb-8 text-7xl md:text-9xl lg:text-[10rem] font-bold tracking-tight leading-none"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.7,
              delay: 0.3,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            Crafting{" "}
            <span className="text-emerald-400 relative">
              Unique
              <motion.span
                className="absolute -bottom-2 left-0 w-full h-1 bg-emerald-400/30"
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 1 }}
              ></motion.span>
            </span>{" "}
            Websites
          </motion.h1>
          <motion.p
            className="text-zinc-300 font-light tracking-wide leading-relaxed md:text-lg max-w-2xl mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            At our web design studio, we specialize in creating custom websites
            that reflect your brand's unique identity. With our professional
            design quality and affordable pricing, your online presence will
            stand out and thrive.
          </motion.p>
          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-2"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.7 }}
          >
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                title="get started"
                className="rounded-none bg-emerald-500 text-zinc-900 px-10 py-4 hover:bg-emerald-400 transition-colors duration-300 text-lg font-bold tracking-tighter normal-case"
              >
                Get started
              </Button>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.98 }}>
              <Button
                title="learn more"
                variant="secondary"
                className="rounded-none z-100 bg-zinc-900 border border-zinc-700 text-white hover:bg-zinc-800 hover:border-zinc-600 transition-colors duration-300 px-10 py-4 text-lg font-bold tracking-tighter normal-case"
              >
                Learn more
              </Button>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>

      {/* Grid background effect */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiMyODI4MjgiIGZpbGwtb3BhY2l0eT0iMC40Ij48cGF0aCBkPSJNMzYgMzRoLTJ2LTRoMnY0em0wLTZ2LTRoLTJ2NGgyek0yNCAyNGgydi0yaC0ydjJ6bTAgNHYtMmgtMnYyaDJ6bTAtNnYtMmgtMnYyaDJ6bTIwIDEwaC0ydjJoMnYtMnptMC00aC0ydjJoMnYtMnptMC0ydi0yaC0ydjJoMnptMC00aC0ydjJoMnYtMnptLTgtOHYyaDJ2LTJoLTJ6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30 mix-blend-luminosity pointer-events-none"></div>
    </section>
  );
}
