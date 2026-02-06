"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function PersonalNote() {
  return (
    <section className="relative bg-white py-15 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">

        {/* IMAGE */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="relative"
        >
          <Image
            src="/abouthero.jpg" // your image
            alt="Photographer"
            width={500}
            height={650}
            className="rounded-3xl object-cover"
          />
        </motion.div>

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-6">
            A Personal Note
          </p>

          <h3 className="text-4xl font-semibold text-black mb-8 leading-tight">
            Your message comes directly to me
          </h3>

          <p className="text-gray-600 text-lg leading-relaxed max-w-lg">
            I personally read every inquiry that comes through this form.
            No assistants. No automated replies. Just a genuine response,
            thoughtfully written for you.
          </p>

          <p className="mt-10 text-black font-medium italic">
            — With care
          </p>
        </motion.div>

      </div>
    </section>
  );
}
