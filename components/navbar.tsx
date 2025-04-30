'use client'

import React from 'react'
import Link from "next/link"
import { Github, Bell, Sun, Moon, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet"

export default function Navbar() {
  const { theme, setTheme } = useTheme()
  const [mounted, setMounted] = React.useState(false)

  // 确保只在客户端渲染后显示主题切换按钮
  React.useEffect(() => {
    setMounted(true)
  }, [])

  const NavLinks = () => (
    <ul className="flex md:flex-row flex-col md:space-x-6 md:space-y-0 space-y-4">
      <li>
        <Link href="/" className="hover:text-white hover:font-bold transition-all hover:scale-110 hover:-translate-y-1 inline-block duration-300">
          Home
        </Link>
      </li>
      <li>
        <Link href="/blog" className="hover:text-white hover:font-bold transition-all hover:scale-110 hover:-translate-y-1 inline-block duration-300">
          Blog
        </Link>
      </li>
      <li>
        <Link href="/project" className="hover:text-white hover:font-bold transition-all hover:scale-110 hover:-translate-y-1 inline-block duration-300">
          Project
        </Link>
      </li>
      <li>
        <Link href="/message" className="hover:text-white hover:font-bold transition-all hover:scale-110 hover:-translate-y-1 inline-block duration-300">
          Message
        </Link>
      </li>
    </ul>
  )

  return (
    <header className="fixed top-0 left-0 right-0 z-50 flex justify-center items-center py-4 px-4 mb-8">
      {/* 桌面端导航 */}
      <nav className="bg-gradient-to-b from-zinc-900/80 to-zinc-900/60 backdrop-blur-md rounded-full px-6 py-2 hidden md:block">
        <NavLinks />
      </nav>

      {/* 移动端导航 */}
      <Sheet>
        <SheetTrigger asChild className="md:hidden absolute left-4">
          <Button variant="ghost" size="icon" className="rounded-full">
            <Menu className="h-5 w-5 text-gray-400" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-[240px] bg-zinc-900/95 backdrop-blur-sm border-zinc-800">
          <SheetHeader>
            <SheetTitle className="text-lg font-semibold">Navigation</SheetTitle>
          </SheetHeader>
          <nav className="flex flex-col gap-4">
            <NavLinks />
          </nav>
        </SheetContent>
      </Sheet>

      <div className="flex items-center space-x-4 absolute right-4">
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

