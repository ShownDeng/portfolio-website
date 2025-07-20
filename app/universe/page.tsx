"use client"

import { Canvas } from "@react-three/fiber"
import { OrbitControls, Stars } from "@react-three/drei"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/motion"
import Navbar from "@/components/navbar"

// 导入卫星轨道组件
import dynamic from 'next/dynamic'

const UniverseScene = dynamic(
  () => import('@/components/universe-scene').then(mod => mod.UniverseScene),
  { ssr: false }
)

function Universe() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <FadeIn className="container pt-24 pb-8 space-y-8">
      <div className="grid grid-cols-1 gap-6">
        <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 rounded-2xl overflow-hidden">
          <CardHeader className="text-center">
            <CardTitle className="text-xl font-mono text-gray-100">Shown's Universe</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-full h-[600px] relative">
              <Canvas camera={{ position: [0, 5, 10] }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} />
                <Stars
                  radius={100}
                  depth={50}
                  count={5000}
                  factor={4}
                  saturation={0}
                  fade
                  speed={1}
                />
                <UniverseScene />
                <OrbitControls
                  enableZoom={true}
                  enablePan={true}
                  enableRotate={true}
                  zoomSpeed={0.6}
                  panSpeed={0.5}
                  rotateSpeed={0.4}
                />
              </Canvas>
            </div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
    </div>
  )
}

export default Universe