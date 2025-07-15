import type React from "react"
import "./globals.css"
import type { Metadata } from "next"
import { Inter, JetBrains_Mono } from "next/font/google"
import { ThemeProvider } from "@/components/theme-provider"
import { CurveDataProvider } from "@/lib/curve-data-context"
import ParticleBackground from "@/components/particle-background"


const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  title: "Shown - Personal Portfolio",
  description: "Personal portfolio website of Shown",
    generator: 'v0.dev'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans pt-24 relative`}>
        {/* 粒子背景效果 */}
        <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
          <ParticleBackground 
            color="#FFEB3B" 
            quantity={120} 
            staticity={30}
            ease={30}
            className="absolute inset-0"
          />
        </div>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <CurveDataProvider>
            <div className="relative z-10">
              {children}
            </div>
          </CurveDataProvider>
        </ThemeProvider>
      </body>
    </html>
  )
}



import './globals.css'