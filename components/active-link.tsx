"use client"

import type React from "react"

import Link from "next/link"
import { usePathname } from "next/navigation"

interface ActiveLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export default function ActiveLink({ href, children, className = "" }: ActiveLinkProps) {
  const pathname = usePathname()
  const isActive = pathname === href

  return (
    <Link
      href={href}
      className={`${className} ${isActive ? "text-white" : "text-gray-400 hover:text-white"} transition-colors`}
    >
      {children}
    </Link>
  )
}

