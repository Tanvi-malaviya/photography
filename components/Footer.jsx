"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Instagram, Facebook, Twitter } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[color:var(--color-surface)] border-t border-black/10 ">
      <div className="max-w-7xl mx-auto px-6 py-20">

        {/* Top Grid */}
        <div className="grid md:grid-cols-4 gap-12">

          {/* Brand */}
          <div>
            <h2 className="text-2xl tracking-[0.3em] font-light mb-6">
              LENSCRAFT
            </h2>
            <p className="text-sm text-black/60 leading-relaxed mb-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
              Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <p className="text-sm text-black/60 leading-relaxed">
              Ut enim ad minim veniam, quis nostrud exercitation ullamco 
              laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">
              Navigation
            </h3>
            <ul className="space-y-3 text-sm text-black/70">
              <li><Link href="/">Home</Link></li>
              <li><Link href="/portfolio">Portfolio</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/services">Services</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>

          
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">
              Services
            </h3>
            <ul className="space-y-3 text-sm text-black/70 mb-6">
              <li>Wedding Photography</li>
              <li>Portrait Sessions</li>
              <li>Commercial Shoots</li>
              <li>Event Coverage</li>
            </ul>

           
          </div>

          {/* Social */}
          <div>
            <h3 className="text-sm tracking-widest uppercase mb-6">
              Follow
            </h3>

            <div className="flex gap-5 mb-6">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.div
                  key={i}
                  whileHover={{ y: -3 }}
                  className="cursor-pointer"
                >
                  <Icon size={18} className="text-black/70 hover:text-black transition" />
                </motion.div>
              ))}
            </div>

            <p className="text-sm text-black/60 leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              info@lenscraft.com
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-black/10 mt-16 pt-8 flex flex-col md:flex-row justify-between items-center text-xs tracking-wider text-black/50 gap-4">
          <p>© {new Date().getFullYear()} LENSCRAFT. All rights reserved.</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </footer>
  );
}
