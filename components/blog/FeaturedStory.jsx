"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedStory() {
  return (
    <section className="relative bg-white py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20 items-center">

        {/* IMAGE SIDE */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="relative h-[420px] md:h-[520px] rounded-[36px] overflow-hidden"
        >
          <Image
            src="/blog1.jpg"   
            alt="Featured story"
            fill
            className="object-cover"
            priority
          />

          {/* SOFT OVERLAY */}
          <div className="absolute inset-0 bg-black/10" />
        </motion.div>

        {/* TEXT SIDE */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        >
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
            Featured Story
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black">
            When silence <br /> became a memory
          </h2>

          <p className="mt-8 text-lg text-gray-600 leading-relaxed max-w-md">
           Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>

          {/* META */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <span>7 min read</span>
            <span>•</span>
            <span>Wedding Story</span>
          </div>

        
          
        </motion.div>

      </div>
    </section>
  );
}
