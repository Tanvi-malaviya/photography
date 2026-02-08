"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const emotions = [
  "Real Moments",
  "Natural Light",
  "Unscripted Emotions",
  "Timeless Colors",
];

export default function StoryBehindTheFrames() {
  return (
    <section className="relative py-10 bg-white overflow-hidden px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

        {/* ================= LEFT CONTENT ================= */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9 }}
        >
          {/* Label */}
          <motion.span
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="inline-block mb-6 px-4 py-2 rounded-full bg-black/5 text-sm tracking-wide"
          >
            MORE THAN A GALLERY
          </motion.span>

          {/* Heading */}
          <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
            Every frame has a <br />
            <span className="text-black/60">story behind it</span>
          </h2>

          {/* Description */}
          <p className="mt-6 text-lg text-black/60 max-w-xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. — Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-10"
          >
            <Link
              href="/about"
              className="inline-flex items-center gap-2 text-sm tracking-wide text-black border-b border-black/40 hover:border-black transition"
            >
              Meet the Photographer →
            </Link>
          </motion.div>
        </motion.div>

        {/* ================= RIGHT FLOATING CARDS ================= */}
   {/* ================= RIGHT VISUAL STORY ================= */}
<div className="relative h-[520px] flex items-center justify-center">

  {/* Background Glow */}
  <div className="absolute inset-0 flex items-center justify-center">
    <div className="w-[380px] h-[380px] bg-gradient-to-tr from-black/10 to-transparent rounded-full blur-3xl" />
  </div>

  {/* Frame 1 */}
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: -6 }}
    whileInView={{ opacity: 1, y: 0, rotate: -4 }}
    transition={{ duration: 0.9 }}
    animate={{ y: [0, -10, 0] }}
    className="absolute left-[10%] top-[15%]"
  >
    <div className="w-56 h-72 bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src="/gallery1.jpg"
        alt="Real Moments"
        className="w-full h-full object-cover"
      />
    </div>

    <span className="absolute -bottom-4 left-6 px-4 py-2 text-xs bg-white rounded-full shadow text-black/70">
      Real Moments
    </span>
  </motion.div>

  {/* Frame 2 (Center - Focus) */}
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    whileInView={{ opacity: 1, scale: 1 }}
    transition={{ duration: 1 }}
    animate={{ y: [0, -14, 0] }}
    className="relative z-10"
  >
    <div className="w-64 h-80 bg-white rounded-3xl shadow-2xl overflow-hidden">
      <img
        src="/gallery2.jpg"
        alt="Unscripted Emotions"
        className="w-full h-full object-cover"
      />
    </div>

    <span className="absolute -top-4 right-6 px-4 py-2 text-xs bg-white rounded-full shadow text-black/70">
      Unscripted Emotions
    </span>
  </motion.div>

  {/* Frame 3 */}
  <motion.div
    initial={{ opacity: 0, y: 40, rotate: 6 }}
    whileInView={{ opacity: 1, y: 0, rotate: 4 }}
    transition={{ duration: 0.9 }}
    animate={{ y: [0, -8, 0] }}
    className="absolute right-[8%] bottom-[12%]"
  >
    <div className="w-52 h-68 bg-white rounded-2xl shadow-xl overflow-hidden">
      <img
        src="/gallery3.jpg"
        alt="Timeless Colors"
        className="w-full h-full object-cover"
      />
    </div>

    <span className="absolute -top-4 left-6 px-4 py-2 text-xs bg-white rounded-full shadow text-black/70">
      Timeless Colors
    </span>
  </motion.div>

</div>


      </div>
    </section>
  );
}
