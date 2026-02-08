"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PersonalNote() {
  return (
    <section className="relative bg-white py-12 sm:py-16 lg:py-20 overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-10 grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative flex justify-center md:justify-start"
        >
          <Image
            src="/abouthero.jpg"
            alt="Photographer"
            width={500}
            height={650}
            className="rounded-2xl sm:rounded-3xl object-cover w-full max-w-sm sm:max-w-md"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="text-center md:text-left"
        >
          <p className="uppercase tracking-[0.25em] sm:tracking-[0.35em] text-[10px] sm:text-xs text-gray-400 mb-4 sm:mb-6">
            A Personal Note
          </p>

          <h3 className="text-3xl sm:text-4xl font-semibold text-black mb-6 sm:mb-8 leading-tight">
            Your message comes <br className="hidden sm:block" />
            directly to me
          </h3>

          <p className="text-gray-600 text-base sm:text-lg leading-relaxed max-w-lg mx-auto md:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>

          <p className="mt-8 sm:mt-10 text-black font-medium italic">
            — With care
          </p>
        </motion.div>

      </div>
    </section>
  );
}