"use client"

import ParticleBackground from "@/components/particle-background"

export default function ParticleDemoPage() {
  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* 粒子背景 */}
      <ParticleBackground
        color="#4F46E5"
        quantity={150}
        className="absolute inset-0 z-0"
      />

      {/* 示例内容 */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <h1 className="text-4xl md:text-6xl font-bold text-white">
            粒子背景演示
          </h1>
          <p className="text-xl text-gray-300">
            这是一个交互式的粒子背景效果。移动鼠标来观察粒子的反应。
          </p>
          <div className="flex justify-center gap-4">
            <button className="px-6 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
              开始体验
            </button>
            <button className="px-6 py-3 bg-white/10 text-white rounded-lg hover:bg-white/20 transition-colors">
              了解更多
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}