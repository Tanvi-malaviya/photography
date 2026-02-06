"use client";

import { motion } from "framer-motion";

const styles = [
    {
        title: "Emotion Over Poses",
        desc: "We never interrupt a moment to create one. What you feel matters more than how you look.",
    },
    {
        title: "Cinematic Light",
        desc: "Natural light shaped with intention — inspired by cinema, not trends.",
    },
    {
        title: "Timeless Color",
        desc: "Subtle tones, refined contrast, and palettes that age beautifully with time.",
    },
    {
        title: "Human Connection",
        desc: "We blend in quietly so real emotions can surface without awareness of the camera.",
    },
];

export default function SignatureStyle() {
    return (
        <section className="relative bg-white py-18 overflow-hidden">
            {/* BACKGROUND WORD */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                <span className="text-[18vw] font-bold text-black/5 tracking-tight">
                    STYLE
                </span>
            </div>

            <div className="relative max-w-7xl mx-auto px-6">

                {/* TOP INTRO */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="max-w-4xl mx-auto mb-14 text-center"
                >
                    <p className="uppercase tracking-[0.45em] text-xs text-gray-400 mb-6">
                        Our Signature
                    </p>

                    <h2 className="text-5xl md:text-6xl font-bold leading-tight text-black">
                        We don’t follow
                        styles — <br />
                        we build one.

                    </h2>

                    <p className="mt-8 text-gray-600 text-lg leading-relaxed max-w-2xl mx-auto">
                        Our visual language is shaped by emotion, restraint, and storytelling.
                        Every decision is intentional — nothing is random, nothing is rushed.
                    </p>
                </motion.div>


                {/* STYLE ROWS */}
                <div className="space-y-12">
                    {styles.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, x: i % 2 === 0 ? -120 : 120 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.9, ease: "easeOut" }}
                            className="grid md:grid-cols-12 items-center gap-10"
                        >
                            {/* TITLE */}
                            <div className="md:col-span-5">
                                <h3 className="text-3xl md:text-4xl font-semibold text-black">
                                    {item.title}
                                </h3>
                            </div>

                            {/* DIVIDER */}
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "100%" }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8 }}
                                className="md:col-span-1 h-px bg-black/20"
                            />

                            {/* DESCRIPTION */}
                            <div className="md:col-span-6">
                                <p className="text-gray-600 text-lg leading-relaxed max-w-xl">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
