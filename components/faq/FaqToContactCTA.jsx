"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import ConsultationModal from "../ConsultationModal";

export default function FaqToContactCTA() {
     const [openModal, setOpenModal] = useState(false);
  return (
    <>
    <section className="relative py-20 overflow-hidden bg-white px-6">

      {/* Floating Question Bubbles */}
      <div className="pointer-events-none absolute inset-0">
        {[
          "What should I wear?",
          "Is travel included?",
          "Do you edit photos?",
          "How many images?",
        ].map((text, i) => (
          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 40,
            }}
            animate={{
              opacity: 1,
              y: [0, -20, 0],
            }}
            transition={{
              duration: 6 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute text-sm text-black/40 bg-black/5 px-4 py-2 rounded-full"
            style={{
              top: `${20 + i * 15}%`,
              left: i % 2 === 0 ? "10%" : "70%",
            }}
          >
            {text}
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.9 }}
        className="relative z-10 max-w-3xl mx-auto text-center"
      >
        {/* Small Label */}
        <motion.span
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="inline-block mb-6 px-4 py-2 rounded-full bg-black/5 text-sm tracking-wide"
        >
          STILL NEED HELP?
        </motion.span>

        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-semibold leading-tight">
          Let’s Talk About <br />
          <span className="text-black/60">Your Photoshoot</span>
        </h2>

        {/* Description */}
        <p className="mt-6 text-lg text-black/60">
          Every shoot is different. If you still have questions or want
          something custom, I’d love to hear from you.
        </p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="mt-12 flex flex-wrap justify-center gap-4"
        >
          <Link
            href="/contact"
            className="px-10 py-4 rounded-full bg-black text-white text-sm tracking-wide hover:scale-105 transition"
          >
            Ask Your Question
          </Link>

          {/* POPUP BUTTON */}
            <button
              onClick={() => setOpenModal(true)}
              className="px-10 py-4 rounded-full border border-black/20 text-sm tracking-wide hover:bg-black/5 transition"
            >
              Book a Consultation
            </button>
        </motion.div>
      </motion.div>
    </section>

     {/* COMMON MODAL */}
      <ConsultationModal
        isOpen={openModal}
        onClose={() => setOpenModal(false)}
      />

      </>
  );
}
