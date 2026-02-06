"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function ContactHero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-white">

      {/* BACKGROUND IMAGE */}
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <Image
          src="/homehero.jpg"
          alt="Contact Background"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-white/75 backdrop-blur-sm" />
      </motion.div>

      {/* CONTENT */}
      <div className="relative z-10 w-full px-6 text-center">

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="uppercase tracking-[0.45em] text-xs text-gray-400"
        >
          Contact
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 60 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="text-5xl md:text-7xl font-bold leading-tight text-black"
        >
          Let’s talk about
         
          
            your story
         
        </motion.h1>

        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "120px" }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="h-px bg-black mx-auto mt-6"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-6 text-lg text-gray-600 max-w-xl mx-auto leading-relaxed"
        >
          Whether it’s a wedding, a portrait, or a brand story —
          tell us what you’re dreaming of.
          We’ll take it from there.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.4, duration: 0.8 }}
          className="mt-16"
        >
          <span className="text-sm uppercase tracking-widest text-black/70">
            Fill the form below
          </span>
        </motion.div>

      </div>
    </section>
  );
}
