"use client";

import { motion } from "framer-motion";

export default function PremiumContactForm() {
  return (
    <section className="relative bg-white py-16 overflow-hidden">
      
      {/* SUBTLE BACKGROUND ACCENT */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white -z-10" />

      <div className="max-w-5xl mx-auto px-6">

        {/* SECTION INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-20"
        >
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-1">
            Get In Touch
          </p>

          <h2 className="text-5xl md:text-6xl font-bold text-black leading-tight">
            Tell us about  your story
          </h2>

          <p className="mt-2 text-gray-600 max-w-xl mx-auto text-lg">
            A few thoughtful details help us understand your vision and
            create something truly personal.
          </p>
        </motion.div>

        {/* FORM */}
        <motion.form
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="grid md:grid-cols-2 gap-12"
        >

          {/* NAME */}
          <InputField label="Your Name" type="text" />

          {/* EMAIL */}
          <InputField label="Email Address" type="email" />

          {/* PHONE */}
          <InputField label="Phone Number" type="tel" />

          {/* EVENT TYPE */}
          <InputField label="Type of Project (Wedding, Portrait, Brand…)" type="text" />

          {/* MESSAGE */}
          <div className="md:col-span-2">
            <motion.textarea
              whileFocus={{ scale: 1.01 }}
              rows={5}
              placeholder="Tell us more about your vision..."
              className="
                w-full border-b border-gray-300 bg-transparent 
                py-4 text-lg outline-none
                focus:border-black transition
                placeholder:text-gray-400
              "
            />
          </div>

          {/* CTA */}
          <div className="md:col-span-2  text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="
                relative px-14 py-5 
                border border-black 
                rounded-full 
                text-lg font-medium
                text-black
                overflow-hidden
                group
              "
            >
              {/* hover fill */}
              <span className="absolute inset-0 bg-black translate-y-full group-hover:translate-y-0 transition duration-500" />
              
              <span className="relative z-10 group-hover:text-white transition">
                Send Your Inquiry
              </span>
            </motion.button>

            <p className="mt-6 text-sm text-gray-400">
              We usually respond within 24–48 hours.
            </p>
          </div>

        </motion.form>
      </div>
    </section>
  );
}

/* ---------- INPUT FIELD COMPONENT ---------- */

function InputField({ label, type }) {
  return (
    <motion.div
      whileFocusWithin={{ y: -4 }}
      transition={{ duration: 0.3 }}
      className="relative"
    >
      <input
        type={type}
        placeholder=" "
        className="
          peer w-full bg-transparent border-b border-gray-300 
          py-4 text-lg outline-none
          focus:border-black transition
        "
      />

      <label
        className="
          absolute left-0 top-1/2 -translate-y-1/2
          text-gray-400 text-lg
          pointer-events-none
          transition-all duration-300
          peer-focus:top-0 peer-focus:text-sm peer-focus:text-black
          peer-not-placeholder-shown:top-0 peer-not-placeholder-shown:text-sm
        "
      >
        {label}
      </label>
    </motion.div>
  );
}
