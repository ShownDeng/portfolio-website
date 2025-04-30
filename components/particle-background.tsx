"use client"

import { useEffect, useRef, useState } from "react"
import { useDevicePixelRatio } from "@/hooks/use-device-pixel-ratio"

type Circle = {
  x: number
  y: number
  translateX: number
  translateY: number
  size: number
  alpha: number
  targetAlpha: number
  dx: number
  dy: number
  magnetism: number
}

type ParticleBackgroundProps = {
  color?: string
  quantity?: number
  staticity?: number
  ease?: number
  className?: string
}

export default function ParticleBackground({
  color = "#FFF",
  quantity = 100,
  staticity = 50,
  ease = 50,
  className = "",
}: ParticleBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement | null>(null)
  const canvasContainerRef = useRef<HTMLDivElement | null>(null)
  const context = useRef<CanvasRenderingContext2D | null>(null)
  const circles = useRef<Circle[]>([])
  const mouse = useRef<{ x: number; y: number }>({ x: 0, y: 0 })
  const canvasSize = useRef<{ w: number; h: number }>({ w: 0, h: 0 })
  const dpr = useDevicePixelRatio()
  const [isInitialized, setIsInitialized] = useState(false)

  // Convert hex color to RGB
  const getRGBColor = (hex: string) => {
    let color = hex.replace(/^#/, "")
    if (color.length === 3) {
      color = color.split("").map((char) => char + char).join("")
    }
    const bigint = parseInt(color, 16)
    const r = (bigint >> 16) & 255
    const g = (bigint >> 8) & 255
    const b = bigint & 255
    return `${r} ${g} ${b}`
  }

  const initCanvas = () => {
    if (!canvasContainerRef.current || !canvasRef.current || !context.current) return

    circles.current = []
    canvasSize.current.w = canvasContainerRef.current.offsetWidth
    canvasSize.current.h = canvasContainerRef.current.offsetHeight
    canvasRef.current.width = canvasSize.current.w * dpr
    canvasRef.current.height = canvasSize.current.h * dpr
    canvasRef.current.style.width = `${canvasSize.current.w}px`
    canvasRef.current.style.height = `${canvasSize.current.h}px`
    context.current.scale(dpr, dpr)

    // Generate particles
    for (let i = 0; i < quantity; i++) {
      const circle = circleParams()
      drawCircle(circle)
    }
  }

  const circleParams = (): Circle => {
    const x = Math.floor(Math.random() * canvasSize.current.w)
    const y = Math.floor(Math.random() * canvasSize.current.h)
    const translateX = 0
    const translateY = 0
    const size = Math.floor(Math.random() * 2) + 1
    const alpha = 0
    const targetAlpha = parseFloat((Math.random() * 0.6 + 0.1).toFixed(1))
    const dx = (Math.random() - 0.5) * 0.2
    const dy = (Math.random() - 0.5) * 0.2
    const magnetism = 0.1 + Math.random() * 4
    return {
      x,
      y,
      translateX,
      translateY,
      size,
      alpha,
      targetAlpha,
      dx,
      dy,
      magnetism,
    }
  }

  const drawCircle = (circle: Circle, update = false) => {
    if (!context.current) return

    const { x, y, translateX, translateY, size, alpha } = circle
    context.current.translate(translateX, translateY)
    context.current.beginPath()
    context.current.arc(x, y, size, 0, 2 * Math.PI)
    context.current.fillStyle = `rgba(${getRGBColor(color)}, ${alpha})`
    context.current.fill()
    context.current.setTransform(dpr, 0, 0, dpr, 0, 0)

    if (!update) {
      circles.current.push(circle)
    }
  }

  const remapValue = (
    value: number,
    start1: number,
    end1: number,
    start2: number,
    end2: number
  ): number => {
    const remapped =
      ((value - start1) * (end2 - start2)) / (end1 - start1) + start2
    return remapped > 0 ? remapped : 0
  }

  const animate = () => {
    if (!context.current || !canvasRef.current) return

    context.current.clearRect(0, 0, canvasSize.current.w, canvasSize.current.h)

    // 绘制粒子之间的连接线
    circles.current.forEach((circle, i) => {
      circles.current.slice(i + 1).forEach((otherCircle) => {
        const dx = (circle.x + circle.translateX) - (otherCircle.x + otherCircle.translateX)
        const dy = (circle.y + circle.translateY) - (otherCircle.y + otherCircle.translateY)
        const distance = Math.sqrt(dx * dx + dy * dy)

        if (distance < 100) {
          context.current!.beginPath()
          context.current!.strokeStyle = `rgba(${getRGBColor(color)}, ${0.2 * (1 - distance / 100)})`
          context.current!.lineWidth = 0.5
          context.current!.moveTo(circle.x + circle.translateX, circle.y + circle.translateY)
          context.current!.lineTo(otherCircle.x + otherCircle.translateX, otherCircle.y + otherCircle.translateY)
          context.current!.stroke()
        }
      })
    })

    circles.current.forEach((circle: Circle) => {
      // Handle the alpha value
      const edge = [
        circle.x + circle.translateX - circle.size,
        canvasSize.current.w - circle.x - circle.translateX - circle.size,
        circle.y + circle.translateY - circle.size,
        canvasSize.current.h - circle.y - circle.translateY - circle.size,
      ]
      const closestEdge = edge.reduce((a, b) => Math.min(a, b))
      const remapClosestEdge = parseFloat(
        remapValue(closestEdge, 0, 20, 0, 1).toFixed(2)
      )

      if (remapClosestEdge > 1) {
        circle.alpha += 0.02
        if (circle.alpha > circle.targetAlpha) circle.alpha = circle.targetAlpha
      } else {
        circle.alpha = circle.targetAlpha * remapClosestEdge
      }

      // 更新粒子位置，添加一些随机性
      circle.x += circle.dx * (1 + Math.random() * 0.2)
      circle.y += circle.dy * (1 + Math.random() * 0.2)

      // Handle the magnetism with enhanced effect
      const distanceFromMouseX = circle.x - mouse.current.x
      const distanceFromMouseY = circle.y - mouse.current.y
      const distance = Math.sqrt(
        distanceFromMouseX * distanceFromMouseX +
          distanceFromMouseY * distanceFromMouseY
      )

      const magnetism = (distance * circle.magnetism) / staticity

      // 增强磁力效果
      const magnetismMultiplier = Math.min(1.5, 100 / Math.max(distance, 1))
      circle.translateX +=
        (distanceFromMouseX / distance) * magnetism * ease * 0.01 * magnetismMultiplier
      circle.translateY +=
        (distanceFromMouseY / distance) * magnetism * ease * 0.01 * magnetismMultiplier

      // Handle edge boundaries with smooth transition
      if (circle.x + circle.translateX < -50) {
        circle.x = canvasSize.current.w + 50
      } else if (circle.x + circle.translateX > canvasSize.current.w + 50) {
        circle.x = -50
      }
      if (circle.y + circle.translateY < -50) {
        circle.y = canvasSize.current.h + 50
      } else if (circle.y + circle.translateY > canvasSize.current.h + 50) {
        circle.y = -50
      }

      drawCircle(circle, true)
    })

    requestAnimationFrame(animate)
  }

  const onMouseMove = (event: MouseEvent) => {
    if (!canvasRef.current) return

    const rect = canvasRef.current.getBoundingClientRect()
    const { w, h } = canvasSize.current
    const x = event.clientX - rect.left - w / 2
    const y = event.clientY - rect.top - h / 2
    const inside = x < w / 2 && x > -w / 2 && y < h / 2 && y > -h / 2

    if (inside) {
      mouse.current.x = x
      mouse.current.y = y
    }
  }

  useEffect(() => {
    if (!isInitialized && canvasRef.current) {
      context.current = canvasRef.current.getContext("2d")
      initCanvas()
      animate()
      setIsInitialized(true)
    }

    const handleResize = () => {
      initCanvas()
    }

    window.addEventListener("resize", handleResize)
    window.addEventListener("mousemove", onMouseMove)

    return () => {
      window.removeEventListener("resize", handleResize)
      window.removeEventListener("mousemove", onMouseMove)
    }
  }, [isInitialized, color, quantity, staticity, ease])

  return (
    <div ref={canvasContainerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  )
}