"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function FeaturedProjectAlt() {
  return (
    <section className="relative py-16 sm:py-20 md:py-14 bg-white overflow-hidden">

      {/* Huge Background Text */}
      <motion.h2
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 0.05 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="
          absolute top-16 sm:top-20 left-1/2 -translate-x-1/2
          text-[72px] sm:text-[120px] md:text-[160px] lg:text-[200px]
          font-bold tracking-tight text-black
          whitespace-nowrap pointer-events-none
        "
      >
        FEATURED
      </motion.h2>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Label */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="
            uppercase tracking-[4px] sm:tracking-[6px]
            text-xs sm:text-sm text-gray-500
            mb-10 sm:mb-14 md:mb-16
          "
        >
          Featured Story
        </motion.p>

        {/* Image Reveal */}
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1.2, ease: [0.77, 0, 0.175, 1] }}
          viewport={{ once: true }}
          className="
            relative w-full
            h-[260px] sm:h-[360px] md:h-[440px] lg:h-[500px]
            rounded-2xl sm:rounded-3xl
            overflow-hidden shadow-2xl
          "
        >
          <Image
            src="/homehero.jpg"
            alt="Featured"
            fill
            className="object-cover"
          />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          viewport={{ once: true }}
          className="
            mt-12 sm:mt-16 md:mt-20
            grid grid-cols-1 md:grid-cols-2
            gap-10 sm:gap-14 md:gap-16
          "
        >
          {/* Left Title */}
          <h3 className="
            text-2xl sm:text-3xl md:text-4xl lg:text-5xl
            font-bold leading-tight
          ">
            Rhea & Aarav’s Royal Celebration
          </h3>

          {/* Right Description */}
          <div>
            <p className="
              text-gray-600
              text-sm sm:text-base md:text-lg
              leading-relaxed
              mb-8 sm:mb-10
            ">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>

            {/* Divider */}
            <div className="h-px w-full bg-gray-200 mb-6 sm:mb-8" />

            {/* Details Grid */}
            <div className="grid grid-cols-2 gap-6 sm:gap-8 text-xs sm:text-sm">

              <div>
                <p className="text-gray-400 uppercase tracking-widest mb-2">
                  Location
                </p>
                <p className="font-medium">Jaipur, India</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase tracking-widest mb-2">
                  Duration
                </p>
                <p className="font-medium">3 Days</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase tracking-widest mb-2">
                  Frames
                </p>
                <p className="font-medium">2,500+</p>
              </div>

              <div>
                <p className="text-gray-400 uppercase tracking-widest mb-2">
                  Style
                </p>
                <p className="font-medium">Editorial / Cinematic</p>
              </div>

            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
