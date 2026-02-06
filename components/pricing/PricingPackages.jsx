"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const packages = [
  {
    title: "Wedding Stories",
    price: "Starting from ₹75,000",
    desc: "Full-day storytelling with emotion-focused coverage.",
    points: [
      "Pre-wedding consultation",
      "Full day coverage",
      "High-resolution edited images",
      "Sneak peeks within 48 hours",
    ],
  },
  {
    title: "Pre-Wedding",
    price: "Starting from ₹25,000",
    desc: "Cinematic couple storytelling at meaningful locations.",
    points: [
      "Location & outfit guidance",
      "2–3 hour shoot",
      "Creative poses + candid moments",
      "Professionally edited images",
    ],
  },
  {
    title: "Portraits",
    price: "Starting from ₹12,000",
    desc: "Natural light portraits that feel effortless.",
    points: [
      "Studio or outdoor shoot",
      "Relaxed direction",
      "High-quality retouching",
      "Online private gallery",
    ],
  },
];

export function PricingPackages() {
  return (
    <section className="pt-16 pb-8 bg-white px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-10">

        {packages.map((pkg, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.15 }}
            className="rounded-3xl border border-black/10 p-10 hover:shadow-xl transition"
          >
            <h3 className="text-2xl font-semibold">
              {pkg.title}
            </h3>

            <p className="mt-2 text-black/60">
              {pkg.desc}
            </p>

            <p className="mt-6 text-lg font-medium">
              {pkg.price}
            </p>

            <ul className="mt-6 space-y-3 text-sm text-black/70">
              {pkg.points.map((point, idx) => (
                <li key={idx}>• {point}</li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="inline-block mt-8 text-sm border-b border-black/40 hover:border-black transition"
            >
              Get Custom Quote →
            </Link>
          </motion.div>
        ))}

      </div>
    </section>
  );
}
