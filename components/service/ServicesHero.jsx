"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const words = ["Where", "Moments", "Become", "Art"];

export default function ImmersiveServicesHero() {
  return (
    <section className="relative min-h-screen overflow-hidden flex items-center">

      {/* BACKGROUND IMAGE LAYER */}
      <motion.div
        initial={{ scale: 1.2, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/homehero.jpg"
          alt="Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/20 backdrop-blur-sm" />
      </motion.div>

      {/* FILM GRAIN / NOISE */}
      {/* <div className="pointer-events-none absolute inset-0 opacity-[0.03] bg-[url('/noise.png')]" /> */}

      {/* CONTENT */}
      <div className="relative z-10 max-w-7xl mx-auto px-6">

        {/* HEADLINE */}
        <h1 className="text-6xl md:text-8xl font-bold leading-[1.05] max-w-5xl">
          {words.map((word, i) => (
            <motion.span
              key={i}
              initial={{ y: 60, opacity: 0, filter: "blur(12px)" }}
              animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
              transition={{
                delay: i * 0.25,
                duration: 1,
                ease: "easeOut",
              }}
              className="inline-block mr-4"
            >
              {word}
            </motion.span>
          ))}
        </h1>

        {/* SUB COPY */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 text-lg text-black max-w-xl leading-relaxed"
        >
           Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
           
        </motion.p>

    

      </div>
    </section>
  );
}
