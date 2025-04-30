"use client"

import { cn } from "@/lib/utils"

interface LoaderProps {
  className?: string
}

export function Loader({ className }: LoaderProps) {
  return (
    <div className={cn("flex justify-center items-center", className)}>
      <div className="loading">
        <svg height="48px" width="64px">
          <polyline id="back" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" />
          <polyline id="front" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" />
          <polyline id="front2" points="0.157 23.954, 14 23.954, 21.843 48, 43 0, 50 24, 64 24" />
        </svg>
        <style jsx>{`
          .loading svg polyline {
            fill: none;
            stroke-width: 3;
            stroke-linecap: round;
            stroke-linejoin: round;
          }

          .loading svg polyline#back {
            fill: none;
            stroke: #ff4d5033;
          }

          .loading svg polyline#front {
            fill: none;
            stroke: #00ffff;
            stroke-dasharray: 48, 144;
            stroke-dashoffset: 192;
            animation: dash_682 2s linear infinite;
            animation-delay: 0s;
          }

          .loading svg polyline#front2 {
            fill: none;
            stroke: #00ffff;
            stroke-dasharray: 48, 144;
            stroke-dashoffset: 192;
            animation: dash_682 2s linear infinite;
            animation-delay: 1s;
          }

          @keyframes dash_682 {
            72.5% {
              opacity: 0;
            }

            to {
              stroke-dashoffset: 0;
            }
          }
        `}</style>
      </div>
    </div>
  )
}