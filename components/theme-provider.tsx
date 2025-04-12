'use client'

import * as React from 'react'
import {
  ThemeProvider as NextThemesProvider,
  type ThemeProviderProps,
} from 'next-themes'

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  // 使用suppressHydrationWarning来避免水合警告
  return (
    <NextThemesProvider defaultTheme="system" {...props}>
      <div suppressHydrationWarning>
        {children}
      </div>
    </NextThemesProvider>
  )
}
