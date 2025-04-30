'use client'

import { useEffect, useRef } from 'react'

interface ParticleVortexProps {
  backgroundColor?: string
  rangeY?: number
  particleCount?: number
  baseHue?: number
  className?: string
  children?: React.ReactNode
}

interface Particle {
  x: number
  y: number
  size: number
  speedX: number
  speedY: number
  hue: number
}

export default function ParticleVortex({
  backgroundColor = 'black',
  rangeY = 800,
  particleCount = 500,
  baseHue = 120,
  className = '',
  children
}: ParticleVortexProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const particles = useRef<Particle[]>([])
  const animationFrameId = useRef<number>()

  useEffect(() => {
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const ctx = canvas.getContext('2d', { alpha: false })
    if (!ctx) return

    const resizeCanvas = () => {
      const dpr = window.devicePixelRatio || 1
      canvas.width = container.clientWidth * dpr
      canvas.height = container.clientHeight * dpr
      ctx.scale(dpr, dpr)
      canvas.style.width = `${container.clientWidth}px`
      canvas.style.height = `${container.clientHeight}px`
    }

    resizeCanvas()
    window.addEventListener('resize', resizeCanvas)

    // Initialize particles
    particles.current = Array.from({ length: particleCount }, () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      size: Math.random() * 2 + 1,
      speedX: (Math.random() - 0.5) * 2,
      speedY: (Math.random() - 0.5) * 2,
      hue: baseHue + Math.random() * 30 - 15
    }))

    const animate = () => {
      const containerWidth = container.clientWidth
      const containerHeight = container.clientHeight
      
      ctx.fillStyle = backgroundColor
      ctx.fillRect(0, 0, containerWidth, containerHeight)
      
      ctx.globalCompositeOperation = 'lighter'
      
      particles.current.forEach((particle) => {
        // Update position with smoother movement
        particle.x += particle.speedX * 1.5
        particle.y += particle.speedY * 1.5

        // Bounce off walls with container dimensions
        if (particle.x < 0 || particle.x > containerWidth) particle.speedX *= -1
        if (particle.y < 0 || particle.y > containerHeight) particle.speedY *= -1

        // Draw particle with glow effect
        const gradient = ctx.createRadialGradient(
          particle.x, particle.y, 0,
          particle.x, particle.y, particle.size * 2
        )
        gradient.addColorStop(0, `hsla(${particle.hue}, 70%, 50%, 0.8)`)
        gradient.addColorStop(1, `hsla(${particle.hue}, 70%, 50%, 0)`)
        
        ctx.beginPath()
        ctx.arc(particle.x, particle.y, particle.size * 2, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationFrameId.current = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      window.removeEventListener('resize', resizeCanvas)
      if (animationFrameId.current) {
        cancelAnimationFrame(animationFrameId.current)
      }
    }
  }, [backgroundColor, particleCount, baseHue])

  return (
    <div ref={containerRef} className={className} style={{ position: 'relative' }}>
      <canvas
        ref={canvasRef}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: 0
        }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>{children}</div>
    </div>
  )
}