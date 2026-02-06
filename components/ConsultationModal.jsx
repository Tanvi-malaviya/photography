"use client";

import { motion, AnimatePresence } from "framer-motion";

export default function ConsultationModal({ isOpen, onClose }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center px-6"
          >
            <div className="relative w-full max-w-lg rounded-3xl bg-white p-10">

              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 text-black/40 hover:text-black text-xl"
              >
                ✕
              </button>

              {/* Content */}
              <h3 className="text-3xl font-semibold">
                Book a Consultation
              </h3>

              <p className="mt-4 text-black/60">
                Tell me a little about your shoot and I’ll get back to you
                with availability and next steps.
              </p>

              {/* Simple Form (replace with your real form later) */}
              <form className="mt-8 space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                />
                <textarea
                  placeholder="Tell me about your shoot"
                  rows={4}
                  className="w-full rounded-xl border border-black/10 px-4 py-3 outline-none focus:border-black"
                />

                <button
                  type="submit"
                  className="w-full mt-4 rounded-full bg-black py-4 text-white text-sm tracking-wide hover:scale-[1.02] transition"
                >
                  Send Request
                </button>
              </form>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
