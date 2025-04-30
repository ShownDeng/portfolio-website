'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'

interface Testimonial {
  quote: string
  name: string
  designation: string
  image: string
}

interface TestimonialCarouselProps {
  testimonials: Testimonial[]
  autoplay?: boolean
  duration?: number
  className?: string
}

export default function TestimonialCarousel({
  testimonials,
  autoplay = false,
  duration = 5000,
  className = ''
}: TestimonialCarouselProps) {
  const [active, setActive] = useState(0)

  useEffect(() => {
    let interval: NodeJS.Timeout
    if (autoplay) {
      interval = setInterval(handleNext, duration)
    }
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [autoplay, duration])

  const handleNext = () => {
    setActive((prev) => (prev + 1) % testimonials.length)
  }

  const handlePrev = () => {
    setActive((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  // 使用固定的旋转角度而不是随机值，以避免服务端和客户端渲染不一致
  const getRotateY = (index: number) => {
    // 使用固定的角度数组，基于索引选择
    const angles = [-8, -4, 0, 4, 8]
    return angles[index % angles.length]
  }

  return (
    <div className={`mx-auto max-w-sm px-4 py-20 font-sans antialiased lg:px-12 md:max-w-4xl md:px-8 ${className}`}>
      <div className="relative grid grid-cols-1 gap-20 md:grid-cols-2">
        <div>
          <div className="relative h-80 w-full">
            <AnimatePresence>
              {testimonials.map((testimonial, index) => {
                const rotateValue = getRotateY(index)
                return (
                  <motion.div
                    key={testimonial.image}
                    initial={{
                      opacity: 0,
                      scale: 0.9,
                      z: -100,
                      rotate: rotateValue,
                      transformStyle: 'preserve-3d'
                    }}
                    animate={{
                      opacity: active === index ? 1 : 0.7,
                      scale: active === index ? 1 : 0.95,
                      z: active === index ? 0 : -100,
                      rotate: active === index ? 0 : rotateValue,
                      zIndex: active === index ? 40 : testimonials.length + 2 - index,
                      y: active === index ? [0, -80, 0] : 0,
                      transformStyle: 'preserve-3d'
                    }}
                    exit={{
                      opacity: 0,
                      scale: 0.9,
                      z: 100,
                      rotate: rotateValue,
                      transformStyle: 'preserve-3d'
                    }}
                    transition={{
                      duration: 0.4,
                      ease: 'easeInOut'
                    }}
                    className="absolute inset-0 origin-bottom"
                  >
                    <Image
                      src={testimonial.image}
                      alt={testimonial.name}
                      width={500}
                      height={500}
                      draggable={false}
                      className="size-full rounded-3xl object-cover object-center"
                    />
                  </motion.div>
                )
              })}
            </AnimatePresence>
          </div>
        </div>
        <div className="flex flex-col justify-between py-4">
          <motion.div
            key={active}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -20, opacity: 0 }}
            transition={{ duration: 0.2, ease: 'easeInOut' }}
          >
            <h3 className="text-2xl font-bold text-white">
              {testimonials[active].name}
            </h3>
            <p className="text-sm text-white">
              {testimonials[active].designation}
            </p>
            <motion.p className="mt-8 text-lg text-gray-500 dark:text-neutral-300">
              {testimonials[active].quote.split(' ').map((word, index) => (
                <motion.span
                  key={index}
                  initial={{ filter: 'blur(10px)', opacity: 0, y: 5 }}
                  animate={{ filter: 'blur(0px)', opacity: 1, y: 0 }}
                  transition={{
                    duration: 0.2,
                    ease: 'easeInOut',
                    delay: 0.02 * index
                  }}
                  className="inline-block"
                >
                  {word}&nbsp;
                </motion.span>
              ))}
            </motion.p>
          </motion.div>
          <div className="flex gap-4 pt-12 md:pt-0">
            <button
              className="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              onClick={handlePrev}
            >
              <svg
                className="size-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m15 18-6-6 6-6" />
              </svg>
            </button>
            <button
              className="group/button flex size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
              onClick={handleNext}
            >
              <svg
                className="size-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="m9 18 6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}