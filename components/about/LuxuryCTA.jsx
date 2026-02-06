"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

function SplitText({ text }) {
  return (
    <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl 
                   font-bold text-black mb-6 sm:mb-8 
                   flex flex-wrap justify-center relative z-10 leading-tight text-center">
      {text.split("").map((char, index) => (
        <motion.span
          key={index}
          initial={{ y: 80, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          transition={{
            delay: index * 0.04,
            duration: 0.6,
            ease: "easeOut",
          }}
          viewport={{ once: true }}
          className="inline-block"
        >
          {char === " " ? "\u00A0" : char}
        </motion.span>
      ))}
    </h2>
  );
}

export function LuxuryCTA() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1.15, 1]);

  return (
    <section
      ref={ref}
      className="relative py-24 sm:py-32 md:py-40 lg:py-48 overflow-hidden"
    >
      {/* Background Image */}
      <motion.div style={{ scale }} className="absolute inset-0">
        <Image
          src="/abouthero.jpg"
          alt="Background"
          fill
          className="object-cover"
        />
      </motion.div>

      {/* Light Overlay */}
      <div className="absolute inset-0 bg-white/15 backdrop-blur-sm" />

      <div className="relative max-w-4xl mx-auto text-center px-5 sm:px-6 z-10">
        {/* HEADING */}
        <SplitText text="Lorem Ipsum Dolor Sit" />

        {/* DESCRIPTION */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          viewport={{ once: true }}
          className="text-gray-700 max-w-2xl mx-auto mb-10 sm:mb-14 
                     text-sm sm:text-base md:text-lg leading-relaxed"
        >
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
          Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
          nisi ut aliquip ex ea commodo consequat.
        </motion.p>

        {/* BUTTON */}
        <motion.button
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.07 }}
          whileTap={{ scale: 0.95 }}
          className="relative px-8 sm:px-12 md:px-14 
                     py-4 sm:py-5 md:py-6 
                     text-sm sm:text-base md:text-lg font-medium 
                     rounded-full backdrop-blur-xl bg-white/70 
                     border border-black/20 shadow-xl 
                     overflow-hidden group"
        >
          <span className="relative z-10 group-hover:text-white transition-colors duration-300">
            Lorem Action
          </span>

          <span
            className="absolute inset-0 bg-black 
                       translate-y-full group-hover:translate-y-0 
                       transition-transform duration-500 rounded-full"
          />
        </motion.button>
      </div>
    </section>
  );
}
