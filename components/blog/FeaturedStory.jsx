"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FeaturedStory() {
  return (
    <section className="relative bg-white py-32 overflow-hidden">
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
            src="/blog/featured.jpg"   // replace with your image
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
            A wedding day told through pauses, stolen glances, and the quiet
            moments between celebrations — photographed with restraint and soul.
          </p>

          {/* META */}
          <div className="mt-10 flex items-center gap-6 text-sm text-gray-500">
            <span>7 min read</span>
            <span>•</span>
            <span>Wedding Story</span>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
            className="mt-14"
          >
            <button className="group relative inline-flex items-center gap-4 text-black font-medium">
              Read full story
              <span className="w-10 h-[1px] bg-black transition-all duration-300 group-hover:w-16" />
            </button>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
}
