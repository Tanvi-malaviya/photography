"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const projects = [
  { id: 1, title: "Desert Wedding", category: "Wedding", image: "/homehero.jpg" },
  { id: 2, title: "Golden Portrait", category: "Portrait", image: "/homehero.jpg" },
  { id: 3, title: "Editorial Muse", category: "Fashion", image: "/homehero.jpg" },
  { id: 4, title: "Luxury Event", category: "Event", image: "/homehero.jpg" },
  { id: 5, title: "Sunset Love", category: "Wedding", image: "/homehero.jpg" },
  { id: 6, title: "Minimal Frame", category: "Portrait", image: "/homehero.jpg" },
];

export default function FloatingGallery() {
  return (
    <section className="relative py-16 sm:py-20 md:py-28 overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 sm:mb-20 md:mb-24 text-center"
        >
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">
            Curated Collection
          </h2>

          <p className="text-gray-600 mt-4 sm:mt-6 max-w-xl mx-auto text-sm sm:text-base md:text-lg leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </motion.div>

        {/* Floating Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 sm:gap-10">

          {projects.map((project, i) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.15, duration: 0.7 }}
              viewport={{ once: true }}
              className={`
                relative group rounded-2xl sm:rounded-3xl overflow-hidden shadow-xl
                ${i % 3 === 1 ? "md:mt-20" : ""}
                ${i % 3 === 2 ? "md:mt-40" : ""}
              `}
            >
              {/* Image */}
              <div className="
                relative w-full
                h-[260px] sm:h-[320px] md:h-[380px] lg:h-[420px]
                overflow-hidden
              ">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition duration-700 group-hover:scale-110"
                />
              </div>

              {/* Overlay */}
              <div className="
                absolute inset-0
                bg-black/0 group-hover:bg-black/40
                transition duration-500
                flex items-end p-4 sm:p-6
              ">
                <div className="
                  translate-y-6 sm:translate-y-8
                  group-hover:translate-y-0
                  opacity-0 group-hover:opacity-100
                  transition duration-500
                  text-white
                ">
                  <p className="text-xs sm:text-sm tracking-widest uppercase">
                    {project.category}
                  </p>
                  <h3 className="text-lg sm:text-xl font-semibold mt-1">
                    {project.title}
                  </h3>
                </div>
              </div>

            </motion.div>
          ))}

        </div>
      </div>
    </section>
  );
}
