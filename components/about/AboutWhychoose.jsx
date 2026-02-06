"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Camera, Sparkles, Users, Clock } from "lucide-react";

const features = [
  {
    icon: <Camera size={26} />,
    title: "Creative Vision",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Sparkles size={26} />,
    title: "Premium Editing",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <Users size={26} />,
    title: "Client Experience",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt.",
  },
  {
    icon: <Clock size={26} />,
    title: "On-Time Delivery",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

export default function WhyChooseUs() {
  return (
    <section className="relative py-20 sm:py-24 md:py-28 bg-white overflow-hidden">

      <div className="relative max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-14 lg:gap-16 items-center">

        {/* LEFT IMAGE */}
        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="relative flex justify-center lg:block"
        >
          <div className="relative w-full max-w-[420px] sm:max-w-[520px] rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/abouthero.jpg"
              alt="Photographer"
              width={600}
              height={750}
              className="object-cover w-full h-[420px] sm:h-[520px] md:h-[600px]"
            />
          </div>

          {/* Floating Badge */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            viewport={{ once: true }}
            className="
              absolute
              -bottom-6
              sm:-bottom-8
              right-4
              sm:-right-8
              bg-white
              shadow-xl
              px-5
              py-4
              rounded-2xl
            "
          >
            <p className="text-2xl sm:text-3xl font-bold text-black">8+</p>
            <span className="text-gray-500 text-xs sm:text-sm">
              Years Experience
            </span>
          </motion.div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-black mb-5 sm:mb-6"
          >
            Why Choose Us
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-gray-600 mb-10 sm:mb-12 max-w-lg text-sm sm:text-base"
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </motion.p>

          <div className="grid sm:grid-cols-2 gap-5 sm:gap-6">
            {features.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.15 }}
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                className="
                  bg-gray-50
                  p-5
                  sm:p-6
                  rounded-2xl
                  shadow-md
                  hover:shadow-xl
                  transition-all
                  duration-300
                  cursor-pointer
                "
              >
                <div className="text-black mb-3">{item.icon}</div>
                <h4 className="font-semibold text-base sm:text-lg mb-2 text-black">
                  {item.title}
                </h4>
                <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
