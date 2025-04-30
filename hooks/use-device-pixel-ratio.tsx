"use client"

import { useState, useEffect } from "react"

export function useDevicePixelRatio() {
  const [dpr, setDpr] = useState(1)

  useEffect(() => {
    const updatePixelRatio = () => {
      setDpr(window.devicePixelRatio || 1)
    }

    updatePixelRatio()
    window.addEventListener("resize", updatePixelRatio)

    return () => {
      window.removeEventListener("resize", updatePixelRatio)
    }
  }, [])

  return dpr
}