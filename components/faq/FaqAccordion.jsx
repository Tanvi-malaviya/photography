"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "How far in advance should I book my photoshoot?",
    answer:
      "I recommend booking at least 2–4 weeks in advance. For weddings and events, early booking ensures availability on your preferred date.",
  
  },
  {
    question: "Do you help with posing during the session?",
    answer:
      "Absolutely. I guide you throughout the session with natural prompts and poses so you feel relaxed and confident in front of the camera.",
  
  },
  {
    question: "How many photos will I receive?",
    answer:
      "The number of final images depends on your selected package, but every delivered photo is carefully curated and professionally edited.",
  
  },
  {
    question: "What is your photo delivery timeline?",
    answer:
      "Edited images are typically delivered within 7–14 days via a private online gallery for easy viewing and download.",
   
  },
  {
    question: "Can I reschedule if something comes up?",
    answer:
      "Yes, rescheduling is possible with prior notice. I always try to be flexible and accommodating whenever possible.",
   
  },
];

export default function FaqAccordion() {
  const [activeIndex, setActiveIndex] = useState(null);
  const itemRefs = useRef([]);

  // 🔹 Auto scroll to opened FAQ
  useEffect(() => {
    if (activeIndex !== null && itemRefs.current[activeIndex]) {
      itemRefs.current[activeIndex].scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }
  }, [activeIndex]);

  return (
    <section
      id="faq"
      className="relative py-12 bg-[color:var(--color-surface)] px-6"
    >
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-10 text-center"
        >
          <p className="text-sm tracking-widest text-black/40 mb-4">
            NEED HELP?
          </p>
          <h2 className="text-4xl md:text-5xl font-semibold">
            Frequently Asked Questions
          </h2>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-6">
          {faqs.map((faq, index) => {
            const isOpen = index === activeIndex;

            return (
              <motion.div
                ref={(el) => (itemRefs.current[index] = el)}
                key={index}
                layout
                className="relative rounded-2xl border border-black/10 bg-white overflow-hidden"
              >
         {/* Question */}
                <button
                  onClick={() =>
                    setActiveIndex(isOpen ? null : index)
                  }
                  className="w-full text-left"
                >
                  <div className="relative flex items-center justify-between px-8 py-6">

                    {/* Accent Bar */}
                    <motion.span
                      className="absolute left-0 top-0 h-full w-1 bg-black"
                      animate={{ scaleY: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.4 }}
                    />

                    {/* Question Text */}
                    <motion.h3
                      whileHover={{ x: 4, opacity: 0.8 }}
                      transition={{ duration: 0.2 }}
                      className="text-lg font-medium pr-8"
                    >
                      {faq.question}
                    </motion.h3>

                    {/* Plus Icon */}
                    <motion.div
                      animate={{ rotate: isOpen ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                      className="text-2xl text-black/60"
                    >
                      +
                    </motion.div>
                  </div>
                </button>

                {/* Answer */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                      className="px-8"
                    >
                      <motion.p
                        initial={{ opacity: 0, filter: "blur(6px)" }}
                        animate={{ opacity: 1, filter: "blur(0px)" }}
                        transition={{ delay: 0.1 }}
                        className="pb-6 text-black/60 leading-relaxed"
                      >
                        {faq.answer}
                      </motion.p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* 🔹 FAQ Schema for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqs.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          }),
        }}
      />
    </section>
  );
}
