"use client";

import { motion } from "framer-motion";

export default function BlogHeroAlt() {
  return (
    <section className="relative overflow-hidden py-28 md:py-32">

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-24 items-center">

        {/* LEFT CONTENT */}
        <div className="relative z-10">

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="uppercase tracking-[0.35em] text-sm text-gray-500 mb-10"
          >
            Visual Journal
          </motion.p>

          <div className="space-y-4">
            {["Captured", "between", "moments"].map((word, i) => (
              <motion.h1
                key={i}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2 }}
                className="text-6xl md:text-7xl font-bold text-black leading-[1.05]"
              >
                {word}
              </motion.h1>
            ))}
          </div>

          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "140px" }}
            transition={{ duration: 0.9, delay: 1 }}
            className="h-[2px] bg-black mt-12"
          />

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.9, delay: 1.3 }}
            className="mt-8 text-lg text-gray-600 max-w-md leading-relaxed"
          >
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            
          </motion.p>

        </div>

        {/* RIGHT IMAGE */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative"
        >
          <motion.img
            src="/abouthero.jpg"
            alt="Photography Mood"
            className="w-full h-[520px] object-cover rounded-[36px]"
            animate={{ y: [0, -14, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
        </motion.div>

      </div>
    </section>
  );
}
