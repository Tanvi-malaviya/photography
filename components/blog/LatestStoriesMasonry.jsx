"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const stories = [
  {
    title: "A quiet wedding in Udaipur",
    category: "Wedding",
    read: "6 min read",
    image: "/blog1.jpg",
    slug: "a-quiet-wedding-in-udaipur",
  },
  {
    title: "Why pauses matter in photographs",
    category: "Editorial",
    read: "4 min read",
    image: "/blog1.jpg",
    slug: "why-pauses-matter-in-photographs",
  },
  {
    title: "A rain-soaked celebration",
    category: "Wedding",
    read: "7 min read",
    image: "/blog1.jpg",
    slug: "a-rain-soaked-celebration",
  },
  {
    title: "Portraits without posing",
    category: "Portrait",
    read: "3 min read",
    image: "/blog1.jpg",
    slug: "portraits-without-posing",
  },
];


export default function LatestStoriesEditorial() {
  return (
    <section className="bg-white py-14 lg:py-16 overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">

        {/* INTRO */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-24 max-w-2xl"
        >
          <p className="uppercase tracking-[0.3em] text-xs text-gray-400 mb-6">
            Latest Stories
          </p>

          <h2 className="text-4xl md:text-5xl font-bold leading-tight text-black">
            Moments worth <br /> lingering on
          </h2>

          <p className="mt-5 text-lg text-gray-600">
            Visual essays shaped by light, silence, and time.
          </p>
        </motion.div>

        {/* STORIES */}
        <div className="space-y-28">
          {stories.map((story, i) => (
            <motion.article
              key={i}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: i * 0.08 }}
              className="grid lg:grid-cols-12 gap-10 items-center"
            >
              {/* IMAGE */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.5 }}
                className={`
                  lg:col-span-7
                  relative
                  rounded-[28px]
                  overflow-hidden
                  ${i % 2 !== 0 ? "lg:order-2" : ""}
                `}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  width={1200}
                  height={800}
                  className="
                    w-full
                   object-cover object-top

                    h-[180px]
                    sm:h-[240px]
                    md:h-[280px]
                    lg:h-[320px]
                  "
                />
              </motion.div>

              {/* TEXT CARD */}
              <motion.div
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className={`
                  lg:col-span-5
                  bg-white
                  rounded-[26px]
                  p-8
                  shadow-[0_20px_50px_rgba(0,0,0,0.08)]
                  ${i % 2 !== 0 ? "lg:order-1" : ""}
                `}
              >
                <p className="text-xs uppercase tracking-widest text-gray-400 mb-3">
                  {story.category}
                </p>

                <h3 className="text-2xl font-semibold leading-snug text-black">
                  {story.title}
                </h3>

                <p className="mt-3 text-sm text-gray-500">
                  {story.read}
                </p>

               <Link href={`/blog/${story.slug}`}>
  <motion.div
    whileHover={{ x: 6 }}
    className="mt-6 inline-flex items-center gap-4 text-xs uppercase tracking-widest text-black cursor-pointer"
  >
    Read story
    <span className="w-8 h-[1px] bg-black" />
  </motion.div>
</Link>

              </motion.div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
