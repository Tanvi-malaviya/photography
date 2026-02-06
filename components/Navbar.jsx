'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)

  /* ================================
     SCROLL EFFECT
  ================================= */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  /* ================================
     AUTO-SYNC NAVBAR HEIGHT
  ================================= */
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.getElementById('site-navbar')
      if (navbar) {
        document.documentElement.style.setProperty(
          '--nav-height',
          `${navbar.offsetHeight}px`
        )
      }
    }

    updateNavbarHeight()
    window.addEventListener('resize', updateNavbarHeight)

    return () => window.removeEventListener('resize', updateNavbarHeight)
  }, [open])

  return (
    <header
      id="site-navbar"
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[var(--background)]/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Link
            href="/"
            className="font-[var(--font-bebas-neue)] text-3xl tracking-[0.3em] text-[var(--foreground)] uppercase"
          >
            LENSCRAFT
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-12 text-xs tracking-[0.25em] uppercase relative">

          <NavItem href="/">Home</NavItem>
          <NavItem href="/portfolio">Portfolio</NavItem>
          <NavItem href="/about">About</NavItem>
          <NavItem href="/services">Services</NavItem>

          {/* PAGES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="flex items-center gap-2 relative group text-[var(--foreground)]">
              Pages
              <motion.span
                animate={{ rotate: pagesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs"
              >
                ▼
              </motion.span>
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
            </button>

            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 
                             w-[420px] p-8 rounded-xl
                             bg-white border border-white/30 shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-8 text-xs tracking-wider">

                    <div className="flex flex-col gap-4">
                      <p className="text-[var(--text-muted)] uppercase text-[10px]">
                        Content
                      </p>
                      <Link href="/blog">Blog</Link>
                      <Link href="/faq">FAQ</Link>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-[var(--text-muted)] uppercase text-[10px]">
                        Showcase
                      </p>
                      <Link href="/gallery">Gallery</Link>
                      <Link href="/pricing">Pricing</Link>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="/contact">Contact</NavItem>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[1px] bg-[var(--foreground)]" />
          <span className="w-6 h-[1px] bg-[var(--foreground)]" />
        </button>
      </nav>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="md:hidden bg-[var(--background)] px-6 pb-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-sm uppercase tracking-widest pt-6">
              <MobileItem href="/" setOpen={setOpen}>Home</MobileItem>
              <MobileItem href="/portfolio" setOpen={setOpen}>Portfolio</MobileItem>
              <MobileItem href="/about" setOpen={setOpen}>About</MobileItem>
              <MobileItem href="/services" setOpen={setOpen}>Services</MobileItem>
              <MobileItem href="/contact" setOpen={setOpen}>Contact</MobileItem>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}

/* ================================
   SUB COMPONENTS
================================ */

function NavItem({ href, children }) {
  return (
    <Link href={href} className="relative group text-[var(--foreground)]">
      {children}
      <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-[var(--accent)] transition-all duration-300 group-hover:w-full"></span>
    </Link>
  )
}

function MobileItem({ href, children, setOpen }) {
  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className="text-[var(--foreground)]"
    >
      {children}
    </Link>
  )
}
