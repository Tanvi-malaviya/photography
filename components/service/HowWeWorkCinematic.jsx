"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

const steps = [
  {
    title: "Discovery & Vision",
    desc: "We begin by understanding your story, emotions, and the atmosphere you want to preserve forever.",
  },
  {
    title: "Intentional Planning",
   desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
  },
  {
    title: "Cinematic Capture",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",

  },
  {
    title: "Refined Editing",
       desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",

  },
  {
    title: "Curated Delivery",
      desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",

  },
];

export default function HowWeWorkCinematic() {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  const progressHeight = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "100%"]
  );

  return (
    <section ref={ref} className="relative bg-white py-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-20">

        {/* LEFT – STICKY TEXT */}
        <div className="lg:sticky lg:top-32 h-fit">
          <p className="uppercase tracking-[0.35em] text-xs text-gray-400 mb-8">
            Our Process
          </p>

          <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black">
            How We <br /> Bring Stories <br /> To Life
          </h2>

          <p className="mt-8 text-gray-600 max-w-md text-lg leading-relaxed">
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
            Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris 
            nisi ut aliquip ex ea commodo consequat.
          </p>
        </div>

        {/* RIGHT – STEPS */}
        <div className="relative">

          {/* Vertical Line */}
          <div className="absolute left-4 top-0 h-full w-px bg-gray-200">
            <motion.div
              style={{ height: progressHeight }}
              className="w-px bg-black origin-top"
            />
          </div>

          <div className="space-y-28 pl-16">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: i * 0.1 }}
                className="relative"
              >
                <span className="absolute -left-16 top-0 text-6xl font-bold text-black/10">
                  0{i + 1}
                </span>

                <h3 className="text-2xl font-semibold text-black mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 max-w-lg leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
