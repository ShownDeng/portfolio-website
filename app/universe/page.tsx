"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { FadeIn } from "@/components/ui/motion"
import Navbar from "@/components/navbar"
import dynamic from 'next/dynamic'

const UniverseCanvas = dynamic(
  () => import('@/components/universe-canvas').then(mod => mod.UniverseCanvas),
  { 
    ssr: false,
    loading: () => <div className="w-full h-[600px] flex items-center justify-center"><p className='text-white'>Loading Universe...</p></div>
  }
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
              <UniverseCanvas />
            </div>
          </CardContent>
        </Card>
      </div>
    </FadeIn>
    </div>
  )
}

export default Universe