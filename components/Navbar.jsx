'use client'

import { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [pagesOpen, setPagesOpen] = useState(false)
  const [mobilePagesOpen, setMobilePagesOpen] = useState(false)
  const pathname = usePathname()

  return (
    <header
      id="site-navbar"
      className="fixed top-0 w-full z-50 bg-white shadow-sm"
    >
      <nav className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">

        {/* LOGO */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Link
            href="/"
            className="font-[var(--font-bebas-neue)] text-3xl tracking-[0.3em] uppercase text-black"
          >
            LENSCRAFT
          </Link>
        </motion.div>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-12 text-xs tracking-[0.25em] uppercase">

          <NavItem href="/" pathname={pathname}>Home</NavItem>
          <NavItem href="/portfolio" pathname={pathname}>Portfolio</NavItem>
          <NavItem href="/about" pathname={pathname}>About</NavItem>
          <NavItem href="/services" pathname={pathname}>Services</NavItem>

          {/* PAGES DROPDOWN */}
          <div
            className="relative"
            onMouseEnter={() => setPagesOpen(true)}
            onMouseLeave={() => setPagesOpen(false)}
          >
            <button className="flex items-center gap-2 text-black relative group">
              Pages
              <motion.span
                animate={{ rotate: pagesOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
                className="text-xs"
              >
                ▼
              </motion.span>
              <span className="absolute left-0 -bottom-2 w-0 h-[1px] bg-black transition-all duration-300 group-hover:w-full" />
            </button>

            <AnimatePresence>
              {pagesOpen && (
                <motion.div
                  initial={{ opacity: 0, y: 20, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.3 }}
                  className="absolute top-10 left-1/2 -translate-x-1/2 w-[420px] p-8 rounded-xl bg-white shadow-2xl"
                >
                  <div className="grid grid-cols-2 gap-8 text-xs tracking-wider">

                    <div className="flex flex-col gap-4">
                      <p className="text-gray-400 uppercase text-[10px]">
                        Content
                      </p>
                      <DropdownLink href="/blog" pathname={pathname}>Blog</DropdownLink>
                      <DropdownLink href="/faq" pathname={pathname}>FAQ</DropdownLink>
                    </div>

                    <div className="flex flex-col gap-4">
                      <p className="text-gray-400 uppercase text-[10px]">
                        Showcase
                      </p>
                      <DropdownLink href="/gallery" pathname={pathname}>Gallery</DropdownLink>
                      <DropdownLink href="/pricing" pathname={pathname}>Pricing</DropdownLink>
                    </div>

                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <NavItem href="/contact" pathname={pathname}>Contact</NavItem>
        </div>

        {/* MOBILE TOGGLE */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1"
        >
          <span className="w-6 h-[1px] bg-black" />
          <span className="w-6 h-[1px] bg-black" />
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
            className="md:hidden bg-white px-6 pb-8 overflow-hidden"
          >
            <div className="flex flex-col gap-6 text-sm uppercase tracking-widest pt-6">

              <MobileItem href="/" pathname={pathname} setOpen={setOpen}>Home</MobileItem>
              <MobileItem href="/portfolio" pathname={pathname} setOpen={setOpen}>Portfolio</MobileItem>
              <MobileItem href="/about" pathname={pathname} setOpen={setOpen}>About</MobileItem>
              <MobileItem href="/services" pathname={pathname} setOpen={setOpen}>Services</MobileItem>

              {/* MOBILE PAGES */}
              <div>
                <button
                  onClick={() => setMobilePagesOpen(!mobilePagesOpen)}
                  className="flex items-center justify-between w-full text-black"
                >
                  Pages
                  <span className={`transition-transform ${mobilePagesOpen ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                <AnimatePresence>
                  {mobilePagesOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="pl-4 mt-4 flex flex-col gap-4 text-xs"
                    >
                      <MobileItem href="/blog" pathname={pathname} setOpen={setOpen}>Blog</MobileItem>
                      <MobileItem href="/faq" pathname={pathname} setOpen={setOpen}>FAQ</MobileItem>
                      <MobileItem href="/gallery" pathname={pathname} setOpen={setOpen}>Gallery</MobileItem>
                      <MobileItem href="/pricing" pathname={pathname} setOpen={setOpen}>Pricing</MobileItem>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <MobileItem href="/contact" pathname={pathname} setOpen={setOpen}>Contact</MobileItem>

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

function NavItem({ href, children, pathname }) {
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`relative group transition-colors ${
        isActive ? 'font-semibold' : ''
      }`}
    >
      {children}
      <span
        className={`
          absolute left-0 -bottom-2 h-[1px] bg-black transition-all duration-300
          ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
        `}
      />
    </Link>
  )
}

function MobileItem({ href, children, setOpen, pathname }) {
  const isActive = pathname === href

  return (
    <Link
      href={href}
      onClick={() => setOpen(false)}
      className={`${isActive ? 'font-semibold underline' : ''}`}
    >
      {children}
    </Link>
  )
}

function DropdownLink({ href, children, pathname }) {
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${isActive ? 'font-semibold underline' : ''}`}
    >
      {children}
    </Link>
  )
}