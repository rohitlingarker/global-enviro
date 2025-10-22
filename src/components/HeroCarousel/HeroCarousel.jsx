'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { cn } from '@/lib/utils'

// usage 
// const slides = [
//   {
//     image:
//       "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
//     title: "Slide 1",
//     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laboriosam animi molestias doloremque sapiente doloribus velit nisi necessitatibus modi.",
//     buttonText: "Button Text 1",
//     buttonLink: "#",
//   },
//   {
//     image:
//       "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
//     title: "Slide 2",
//     subtitle: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam fugit laboriosam animi molestias doloremque sapiente doloribus velit nisi necessitatibus modi.",
//     buttonText: "Button Text 2",
//     buttonLink: "#",
//   },
//   {
//     image:
//       "https://storage.googleapis.com/uxpilot-auth.appspot.com/3e425a459b-733ddb1f886d42169401.png",
//     title: "Slide 3",
//     subtitle: "Subtitle 3",
//   },
// ];
// 
// <HeroCarousel slides={slides} />

export default function HeroCarousel({
  slides = [],
  interval = 2000,
  className,
}) {
  const [current, setCurrent] = useState(0)
  const [paused, setPaused] = useState(false)

  // Auto-rotate logic
  useEffect(() => {
    if (paused) return
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length)
    }, interval)
    return () => clearInterval(timer)
  }, [paused, slides.length, interval])

  if (!slides.length) return null

  return (
    <div
      className={cn(
        'relative w-full h-[500px] overflow-hidden ',
        className
      )}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <AnimatePresence mode="wait">
        <motion.div
          key={current}
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.8, ease: 'easeInOut' }}
          className="absolute inset-0"
        >
          <img
            src={slides[current].image}
            alt={slides[current].title}
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center text-white p-6 pl-15">
            <h2 className="text-4xl md:text-5xl font-bold mb-3">
                
              {slides[current].title}
            </h2>
            {slides[current].subtitle && (
              <p className="text-lg md:text-xl mb-6 max-w-2xl">
                {slides[current].subtitle}
              </p>
            )}
            {slides[current].buttonText && (
              <a
                href={slides[current].buttonLink}
                className="bg-primary px-6 py-3 rounded-lg w-fit text-white font-semibold hover:bg-primary-dark transition"
              >
                {slides[current].buttonText}
              </a>
            )}
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Dots */}
      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            className={cn(
              'w-3 h-3 rounded-full transition-all',
              i === current
                ? 'bg-white scale-125'
                : 'bg-white/50 hover:bg-white/70'
            )}
          />
        ))}
      </div>
    </div>
  )
}
