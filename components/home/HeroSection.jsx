

// 'use client'

// import { useState, useEffect } from 'react'
// import { motion, AnimatePresence } from 'framer-motion'
// import Image from 'next/image'

// const slides = [
//   '/homehero.jpg',
//   '/homehero3.jpg',
// ]

// export default function HeroCinematic() {
//   const [index, setIndex] = useState(0)
//   const [intro, setIntro] = useState(true)

//   // Auto slider
//   useEffect(() => {
//     const timer = setInterval(() => {
//       setIndex((prev) => (prev + 1) % slides.length)
//     }, 5000)
//     return () => clearInterval(timer)
//   }, [])

//   // Intro shutter
//   useEffect(() => {
//     const timeout = setTimeout(() => setIntro(false), 1800)
//     return () => clearTimeout(timeout)
//   }, [])

//   return (
//     <section className="relative min-h-screen w-full overflow-hidden bg-black">

//       {/* ================= CAMERA SHUTTER INTRO ================= */}
//       <AnimatePresence>
//         {intro && (
//           <motion.div
//             initial={{ scale: 0 }}
//             animate={{ scale: 2 }}
//             exit={{ opacity: 0 }}
//             transition={{ duration: 1.8, ease: 'easeInOut' }}
//             className="fixed inset-0 z-[100] bg-black rounded-full"
//           />
//         )}
//       </AnimatePresence>

//       {/* ================= BACKGROUND SLIDER ================= */}
//       <AnimatePresence mode="wait">
//         <motion.div
//           key={index}
//           initial={{ opacity: 0, scale: 1.1 }}
//           animate={{ opacity: 1, scale: 1 }}
//           exit={{ opacity: 0 }}
//           transition={{ duration: 1.5 }}
//           className="absolute inset-0"
//         >
//           <Image
//             src={slides[index]}
//             alt="Slide"
//             fill
//             priority
//             className="object-cover object-center"
//           />
//         </motion.div>
//       </AnimatePresence>

//       {/* ================= SPLIT MOVING STRIPS (Desktop Only) ================= */}
//       <div className="absolute inset-0 hidden md:grid grid-cols-3">

//         <motion.div
//           animate={{ y: [0, -40, 0] }}
//           transition={{ duration: 12, repeat: Infinity }}
//           className="relative"
//         >
//           <Image
//             src={slides[index]}
//             alt=""
//             fill
//             className="object-cover opacity-30"
//           />
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, 40, 0] }}
//           transition={{ duration: 14, repeat: Infinity }}
//           className="relative"
//         >
//           <Image
//             src={slides[index]}
//             alt=""
//             fill
//             className="object-cover opacity-30"
//           />
//         </motion.div>

//         <motion.div
//           animate={{ y: [0, -20, 0] }}
//           transition={{ duration: 10, repeat: Infinity }}
//           className="relative"
//         >
//           <Image
//             src={slides[index]}
//             alt=""
//             fill
//             className="object-cover opacity-30"
//           />
//         </motion.div>

//       </div>

//       {/* ================= DARK VIGNETTE ================= */}
//       <div className="absolute inset-0 bg-black/30" />

//       {/* ================= FILM GRAIN OVERLAY ================= */}
//       <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay">
//         <div className="w-full h-full bg-[url('/grain.png')] animate-[grainMove_8s_steps(10)_infinite]" />
//       </div>

//       {/* ================= HERO TEXT ================= */}
//       <div className="relative z-20 min-h-screen flex items-center justify-center text-center px-6">
//         <motion.div
//           initial={{ opacity: 0, y: 60 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ delay: 1.5, duration: 1 }}
//         >
//           <h1 className="font-[var(--font-heading)] text-5xl md:text-7xl lg:text-8xl text-white leading-tight">
//             Frames of
//             <span className="block text-[var(--accent)] -mt-4">
//               Emotion
//             </span>
//           </h1>

//           <p className="mt-6 text-neutral-200 max-w-xl mx-auto">
//             A cinematic approach to storytelling through light and shadow.
//           </p>
//         </motion.div>
//       </div>

//     </section>
//   )
// }




'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { ChevronLeft, ChevronRight } from 'lucide-react'

const slides = [
  {
    image: '/homehero.jpg',
    title: 'Frames of',
    highlight: 'Emotion',
    desc: 'A cinematic approach to storytelling through light and shadow.',
  },
  {
    image: '/homehero3.jpg',
    title: 'Luxury',
    highlight: 'Wedding Stories',
    desc: 'Documenting love with elegance and timeless visual poetry.',
  },
]

export default function HeroCinematic() {
  const [index, setIndex] = useState(0)
  const [intro, setIntro] = useState(true)

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + slides.length) % slides.length)
  }

  // Auto slider
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide()
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  // Camera shutter intro
  useEffect(() => {
    const timeout = setTimeout(() => setIntro(false), 1800)
    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="relative min-h-screen w-full overflow-hidden bg-black">

      {/* ============ CAMERA SHUTTER INTRO (Same As Before) ============ */}
      <AnimatePresence>
        {intro && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 2 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.8, ease: 'easeInOut' }}
            className="fixed inset-0 z-[100] bg-black rounded-full"
          />
        )}
      </AnimatePresence>

      {/* ============ BACKGROUND SLIDER ============ */}
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image
            src={slides[index].image}
            alt="Slide"
            fill
            priority
            className="object-cover object-center"
          />
        </motion.div>
      </AnimatePresence>

      {/* ============ SPLIT MOVING STRIPS (UNCHANGED STYLE) ============ */}
      <div className="absolute inset-0 hidden md:grid grid-cols-3">

        <motion.div
          key={index + '-1'}
          animate={{ y: [0, -40, 0] }}
          transition={{ duration: 12, repeat: Infinity }}
          className="relative"
        >
          <Image
            src={slides[index].image}
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </motion.div>

        <motion.div
          key={index + '-2'}
          animate={{ y: [0, 40, 0] }}
          transition={{ duration: 14, repeat: Infinity }}
          className="relative"
        >
          <Image
            src={slides[index].image}
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </motion.div>

        <motion.div
          key={index + '-3'}
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 10, repeat: Infinity }}
          className="relative"
        >
          <Image
            src={slides[index].image}
            alt=""
            fill
            className="object-cover opacity-30"
          />
        </motion.div>

      </div>

      {/* Dark cinematic overlay */}
      <div className="absolute inset-0 bg-black/40" />

      {/* ============ FILM GRAIN OVERLAY (Same) ============ */}
      <div className="pointer-events-none absolute inset-0 opacity-20 mix-blend-overlay">
        <div className="w-full h-full bg-[url('/grain.png')] animate-[grainMove_8s_steps(10)_infinite]" />
      </div>

      {/* ============ TEXT CONTENT (Changes Per Slide) ============ */}
   {/* ============ NETFLIX CINEMATIC TEXT CONTENT ============ */}
<div className="relative z-20 min-h-screen flex items-center justify-center text-center px-6">

  <AnimatePresence mode="wait">
    <motion.div
      key={index}
      initial="hidden"
      animate="visible"
      exit="exit"
      variants={{
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
        exit: { opacity: 0 }
      }}
      className="max-w-5xl"
    >

      {/* TITLE LINE */}
      <motion.h1
        className="font-[var(--font-heading)]
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px]
        text-white leading-tight overflow-hidden"
      >
        {slides[index].title.split(" ").map((word, i) => (
          <motion.span
            key={i}
            variants={{
              hidden: { y: 80, opacity: 0, filter: "blur(12px)" },
              visible: { y: 0, opacity: 1, filter: "blur(0px)" }
            }}
            transition={{
              duration: 0.9,
              ease: [0.22, 1, 0.36, 1]
            }}
            className="inline-block mr-3"
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>

      {/* HIGHLIGHT LINE */}
      <motion.h2
        className="block text-[var(--accent)] -mt-4
        text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[110px]"
        initial={{ y: 60, opacity: 0, filter: "blur(10px)" }}
        animate={{ y: 0, opacity: 1, filter: "blur(0px)" }}
        transition={{ delay: 0.4, duration: 1 }}
      >
        {slides[index].highlight}
      </motion.h2>

      {/* DESCRIPTION */}
      <motion.p
        className="mt-6 text-neutral-200 text-sm sm:text-base md:text-lg max-w-xl mx-auto"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 1 }}
      >
        {slides[index].desc}
      </motion.p>

    </motion.div>
  </AnimatePresence>

</div>


      {/* ============ ARROW NAVIGATION ============ */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-30 
                   w-10 h-10 md:w-12 md:h-12 rounded-full 
                   bg-white/10 backdrop-blur-md 
                   flex items-center justify-center 
                   hover:bg-white/20 transition"
      >
        <ChevronLeft className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-30 
                   w-10 h-10 md:w-12 md:h-12 rounded-full 
                   bg-white/10 backdrop-blur-md 
                   flex items-center justify-center 
                   hover:bg-white/20 transition"
      >
        <ChevronRight className="text-white w-5 h-5 md:w-6 md:h-6" />
      </button>

    </section>
  )
}
