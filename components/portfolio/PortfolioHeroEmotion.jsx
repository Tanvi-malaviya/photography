"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function SplitText({ text }) {
  const letters = text.split("");

  return (
    <h1 className="
      text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl
      font-bold leading-tight flex flex-wrap justify-center text-center
    ">
      {letters.map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 120, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.04,
            duration: 0.8,
            ease: [0.22, 1, 0.36, 1],
          }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h1>
  );
}

export default function PortfolioHero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -120]);

  return (
    <section
      ref={ref}
      className="
        relative min-h-[85vh] sm:min-h-screen
        flex items-center justify-center
        bg-white overflow-hidden
        px-4 sm:px-6
      "
    >

      {/* Floating Image – Left */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-6 lg:left-10 top-24 hidden md:block"
      >
        <div className="
          relative w-44 h-60 sm:w-52 sm:h-72 lg:w-60 lg:h-80
          rounded-xl lg:rounded-2xl
          overflow-hidden shadow-2xl rotate-[-8deg]
        ">
          <Image
            src="/homehero.jpg"
            alt="portfolio"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Floating Image – Right */}
      <motion.div
        style={{ y: y2 }}
        className="absolute right-6 lg:right-16 bottom-24 hidden md:block"
      >
        <div className="
          relative w-40 h-56 sm:w-48 sm:h-64 lg:w-52 lg:h-72
          rounded-xl lg:rounded-2xl
          overflow-hidden shadow-2xl rotate-[6deg]
        ">
          <Image
            src="/homehero.jpg"
            alt="portfolio"
            fill
            className="object-cover"
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-xs sm:max-w-xl md:max-w-3xl lg:max-w-4xl mx-auto">

        <SplitText text="Selected Works" />

        <motion.p
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
          className="
            mt-4 sm:mt-6 md:mt-8
            text-sm sm:text-base md:text-lg
            text-gray-600
            max-w-xs sm:max-w-lg md:max-w-2xl
            mx-auto
          "
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
          commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
          velit esse cillum dolore eu fugiat nulla pariatur.
        </motion.p>

        {/* CTA Button */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="
            relative mt-6 sm:mt-8 md:mt-10
            px-8 sm:px-10 md:px-14
            py-3 sm:py-4
            text-sm sm:text-base md:text-lg
            font-medium rounded-full
            backdrop-blur-xl bg-white/70
            border border-black/20
            shadow-xl overflow-hidden group
          "
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Explore Portfolio
          </span>

          <span
            className="
              absolute inset-0 bg-black
              translate-y-full group-hover:translate-y-0
              transition-transform duration-500
              rounded-full
            "
          />
        </motion.button>

      </div>
    </section>
  );
}
