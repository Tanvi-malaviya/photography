'use client'

import { motion, AnimatePresence } from 'framer-motion'

export default function CommonModal({ isOpen, onClose, title, children }) {
  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 40 }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          >
            <div className="relative w-full max-w-lg rounded-3xl bg-[var(--background)] p-8 shadow-2xl">

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-5 right-5 text-2xl text-[var(--foreground)] opacity-60 hover:opacity-100"
              >
                ×
              </button>

              {/* Title */}
              {title && (
                <h3 className="text-3xl font-bold text-[var(--foreground)] mb-6">
                  {title}
                </h3>
              )}

              {/* Content */}
              <div>{children}</div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  )
}
