"use client"

import { ReactNode } from "react"
import { CurveDataProvider } from "@/lib/curve-data-context"

export default function LayoutWithCurveData({ children }: { children: ReactNode }) {
  return <CurveDataProvider>{children}</CurveDataProvider>
}