"use client"

import * as React from "react"
import { Copy, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/components/ui/use-toast"

interface CopyButtonProps extends React.HTMLAttributes<HTMLButtonElement> {
  value: string
  variant?: "default" | "secondary" | "ghost"
  size?: "default" | "sm" | "lg" | "icon"
}

export function CopyButton({
  value,
  className,
  variant = "ghost",
  size = "icon",
  ...props
}: CopyButtonProps) {
  const { toast } = useToast()
  const [hasCopied, setHasCopied] = React.useState(false)

  async function copyToClipboard() {
    try {
      // 确保在用户交互事件中调用剪贴板API
      await navigator.clipboard.writeText(value)
      setHasCopied(true)
      toast({
        description: "已复制到剪贴板",
      })
      setTimeout(() => setHasCopied(false), 2000)
    } catch (error) {
      // 处理剪贴板权限错误
      console.error("剪贴板操作失败:", error)
      toast({
        variant: "destructive",
        description: "复制失败，请手动复制文本",
      })
    }
  }

  return (
    <Button
      variant={variant}
      size={size}
      className={className}
      onClick={copyToClipboard}
      {...props}
    >
      {hasCopied ? (
        <Check className="h-4 w-4" />
      ) : (
        <Copy className="h-4 w-4" />
      )}
    </Button>
  )
}