"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const services = [
  {
    title: "Wedding Photography",
    desc: "An emotional documentary of rituals, relationships, and fleeting moments — captured with timeless elegance.",
    image: "/homehero.jpg",
  },
  {
    title: "Pre-Wedding Stories",
    desc: "Intimate cinematic sessions designed around connection, movement, and natural chemistry.",
    image: "/homehero.jpg",
  },
  {
    title: "Brand & Commercial",
    desc: "Purpose-driven visuals that communicate identity, detail, and premium brand language.",
    image: "/homehero.jpg",
  },
  {
    title: "Portrait Sessions",
    desc: "Editorial-style portraits that reflect personality, mood, and quiet confidence.",
    image: "/homehero.jpg",
  },
];

export default function EditorialScrollChapters() {
  return (
    <section className="bg-white">
      {services.map((service, i) => (
        <Chapter key={i} service={service} index={i} />
      ))}
    </section>
  );
}

function Chapter({ service, index }) {
  const ref = useRef(null);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const imageX = useTransform(
    scrollYProgress,
    [0, 1],
    index % 2 === 0 ? ["-12%", "12%"] : ["12%", "-12%"]
  );

  const clip = useTransform(
    scrollYProgress,
    [0, 0.5],
    ["inset(0 100% 0 0)", "inset(0 0% 0 0)"]
  );

  return (
    <section
      ref={ref}
      className="
        relative flex items-center overflow-hidden
        py-10 md:py-12 lg:py-14 xl:py-18
      "
    >
      {/* BIG CHAPTER NUMBER */}
      <div className="absolute left-6 top-10 text-[90px] md:text-[120px] lg:text-[160px] font-bold text-black/5 select-none">
        0{index + 1}
      </div>

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center relative z-10">

        {/* TEXT */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: "easeOut" }}
        >
          <h2 className="text-5xl md:text-6xl font-bold mb-8 leading-tight">
            {service.title}
          </h2>

          <p className="text-lg text-gray-600 max-w-md leading-relaxed">
            {service.desc}
          </p>

          <p className="mt-6 text-sm text-gray-400 max-w-md">
            Crafted with intention, light, and honest emotion.
          </p>

          <div className="mt-10 flex items-center gap-6">
            <span className="text-xs uppercase tracking-widest text-gray-400">
              Explore Story
            </span>
            <span className="w-14 h-[1px] bg-black" />
          </div>
        </motion.div>

        {/* IMAGE */}
        <motion.div
          style={{ x: imageX, clipPath: clip }}
          className="relative h-[260px] sm:h-[300px] md:h-[320px] lg:h-[360px] rounded-[32px] overflow-hidden"
        >
          <Image
            src={service.image}
            alt={service.title}
            fill
            className="object-cover"
            priority={index === 0}
          />
        </motion.div>
      </div>
    </section>
  );
}

