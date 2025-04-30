"use client"

import React, { useRef, useState } from "react"
import { cn } from "@/lib/utils"

type ThreeDCardProps = {
  children: React.ReactNode
  className?: string
  containerClassName?: string
}

export default function ThreeDCard({
  children,
  className,
  containerClassName,
}: ThreeDCardProps) {
  const containerRef = useRef<HTMLDivElement | null>(null)
  const [isMouseEntered, setIsMouseEntered] = useState(false)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return

    const { left, top, width, height } = containerRef.current.getBoundingClientRect()
    const x = (e.clientX - left - width / 2) / 15
    const y = -(e.clientY - top - height / 2) / 15
    containerRef.current.style.transform = `perspective(1500px) rotateY(${x}deg) rotateX(${y}deg) scale(1.02)`
  }

  const handleMouseEnter = () => {
    setIsMouseEntered(true)
    if (containerRef.current) {
      containerRef.current.style.transition = "transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }

  const handleMouseLeave = () => {
    setIsMouseEntered(false)
    if (containerRef.current) {
      containerRef.current.style.transform = "perspective(1500px) rotateY(0deg) rotateX(0deg) scale(1)"
      containerRef.current.style.transition = "transform 0.8s cubic-bezier(0.4, 0, 0.2, 1)"
    }
  }

  return (
    <div
      className={cn("flex items-center justify-center", containerClassName)}
    >
      <div
        ref={containerRef}
        className={cn(
          "relative flex items-center justify-center transition-all duration-200 ease-linear",
          className
        )}
        onMouseEnter={handleMouseEnter}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {children}
      </div>
    </div>
  )
}