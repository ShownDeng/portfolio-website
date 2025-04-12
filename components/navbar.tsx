'use client'

import React from 'react'
import Link from "next/link"
import { Github, Bell, Sun, Moon } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // 确保只在客户端渲染后显示主题切换按钮
  React.useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <header className="container mx-auto py-4 px-4 flex justify-between items-center">
      <div className="w-1/3 md:w-1/4 lg:w-1/5 hidden md:block">{/* 在移动设备上隐藏左侧空间 */}</div>

      <nav className="bg-zinc-900/80 backdrop-blur-sm rounded-full px-6 py-2">
        <ul className="flex space-x-6">
          <li>
            <Link href="/" className="hover:text-white transition-all hover:scale-110 inline-block">
              Home
            </Link>
          </li>
          <li>
            <Link href="/blog" className="hover:text-white transition-all hover:scale-110 inline-block">
              Blog
            </Link>
          </li>
          <li>
            <Link href="/project" className="hover:text-white transition-all hover:scale-110 inline-block">
              Project
            </Link>
          </li>
          <li>
            <Link href="/message" className="hover:text-white transition-all hover:scale-110 inline-block">
              Message
            </Link>
          </li>
        </ul>
      </nav>

      <div className="flex items-center space-x-4">
        <Link href="https://github.com" target="_blank" aria-label="GitHub">
          <Github className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
        </Link>
        <Button variant="ghost" size="icon" className="rounded-full">
          <Bell className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
        </Button>
        {mounted && (
          <Button
            variant="ghost"
            size="icon"
            className="rounded-full"
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            suppressHydrationWarning
          >
            {theme === 'dark' ? (
              <Sun className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            ) : (
              <Moon className="h-5 w-5 text-gray-400 hover:text-white transition-colors" />
            )}
          </Button>
        )}
      </div>
    </header>
  )
}

