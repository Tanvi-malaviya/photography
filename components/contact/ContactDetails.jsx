"use client";

import { motion } from "framer-motion";

export default function ContactDetailsAlt() {
  return (
    <section className="relative bg-white py-20 sm:py-28 lg:py-44 overflow-hidden">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 lg:grid-cols-2 gap-20 lg:gap-32 items-start">

        {/* LEFT – EMOTIONAL CONTEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="lg:sticky lg:top-32"
        >
          <p className="uppercase tracking-[0.3em] sm:tracking-[0.4em] text-[10px] sm:text-xs text-gray-400 mb-6 sm:mb-8">
            Get in Touch
          </p>

          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-black leading-tight mb-6 sm:mb-10">
            Sometimes a quiet
            <br />
            message is all
            <br />
            it takes
          </h2>

          <p className="text-gray-600 text-base sm:text-lg max-w-md leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </motion.div>

        {/* RIGHT – CONTACT SIGNALS */}
        <div className="space-y-20 sm:space-y-24 lg:space-y-28">

          {/* EMAIL */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="relative"
          >
            <span className="absolute -top-8 sm:-top-10 left-0 text-[10px] sm:text-xs tracking-widest text-gray-400">
              EMAIL
            </span>

            <a
              href="mailto:hello@yourstudio.com"
              className="group block text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight"
            >
              hello@yourstudio.com
              <span className="block h-[2px] w-10 sm:w-12 bg-black mt-4 sm:mt-6 group-hover:w-28 sm:group-hover:w-32 transition-all duration-500" />
            </a>
          </motion.div>

          {/* PHONE */}
          <motion.div
            initial={{ opacity: 0, y: 60, scale: 0.96 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.1 }}
            className="relative"
          >
            <span className="absolute -top-8 sm:-top-10 left-0 text-[10px] sm:text-xs tracking-widest text-gray-400">
              PHONE
            </span>

            <a
              href="tel:+919999999999"
              className="group block text-2xl sm:text-3xl lg:text-4xl font-semibold text-black leading-tight"
            >
              +91 99999 99999
              <span className="block h-[2px] w-10 sm:w-12 bg-black mt-4 sm:mt-6 group-hover:w-28 sm:group-hover:w-32 transition-all duration-500" />
            </a>
          </motion.div>

          {/* LOCATION */}
          <motion.div
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, delay: 0.2 }}
            className="relative"
          >
            <span className="absolute -top-8 sm:-top-10 left-0 text-[10px] sm:text-xs tracking-widest text-gray-400">
              LOCATION
            </span>

            <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-600 leading-snug max-w-md">
              Ahmedabad, India
              <br />
              <span className="text-gray-400 text-lg sm:text-xl md:text-2xl">
                Available worldwide
              </span>
            </p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}