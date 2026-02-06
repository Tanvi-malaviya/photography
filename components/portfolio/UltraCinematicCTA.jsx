"use client";

import { motion } from "framer-motion";

export function EditorialCinematicCTA() {
  return (
    <section className="relative py-14 sm:py-16 md:py-24 bg-white overflow-hidden">

      {/* Moving Accent */}
      <motion.div
        initial={{ x: "-20%" }}
        animate={{ x: "120%" }}
        transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        className="absolute top-1/2 w-[70%] h-px bg-gradient-to-r from-transparent via-black/20 to-transparent"
      />

      <div
        className="
          relative max-w-7xl mx-auto
          px-4 sm:px-6
          grid grid-cols-1 md:grid-cols-2
          gap-14 md:gap-20
          items-center
        "
      >
        {/* LEFT */}
        <div>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="
              uppercase tracking-[0.35em]
              text-[10px] sm:text-xs
              text-gray-500
              mb-6 sm:mb-8
            "
          >
            Let’s Collaborate
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="
              text-3xl sm:text-4xl md:text-6xl
              font-bold leading-tight
              text-black
            "
          >
            Your moments <br /> deserve intention, <br /> not repetition.
          </motion.h2>
        </div>

        {/* RIGHT */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="
            flex flex-col
            items-start md:items-end
            text-left md:text-right
          "
        >
          <p
            className="
              text-gray-600
              max-w-sm
              text-base sm:text-lg
              mb-10 sm:mb-14
              leading-relaxed
            "
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Sed do eiusmod tempor incididunt ut labore et dolore
            magna aliqua. Ut enim ad minim veniam, quis nostrud
            exercitation ullamco laboris nisi ut aliquip.
          </p>

          {/* UNIQUE CTA BUTTON */}
          <motion.button
            whileHover="hover"
            whileTap={{ scale: 0.95 }}
            className="
              relative
              w-32 h-32 sm:w-40 sm:h-40 md:w-44 md:h-44
              flex items-center justify-center
            "
          >
            {/* Rotating Ring */}
            <motion.span
              variants={{
                hover: { rotate: 360 },
              }}
              transition={{ duration: 8, ease: "linear", repeat: Infinity }}
              className="absolute inset-0 rounded-full border border-black/30"
            />

            {/* Inner Ring */}
            <span className="absolute inset-3 rounded-full border border-black/20" />

            {/* Text */}
            <motion.span
              variants={{
                hover: { letterSpacing: "0.2em" },
              }}
              transition={{ duration: 0.4 }}
              className="
                uppercase
                text-[10px] sm:text-sm
                tracking-widest
                font-medium
                text-black
                text-center
                leading-snug
              "
            >
              Start <br /> Your <br /> Story
            </motion.span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
