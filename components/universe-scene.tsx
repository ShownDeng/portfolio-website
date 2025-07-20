"use client"

import { useRef, useState, useEffect } from "react"
import { useFrame } from "@react-three/fiber"
import { Html } from "@react-three/drei"
import type * as THREE from "three"

// 卫星组件
function Satellite({
  orbitRadius,
  orbitSpeed,
  color = "#ffffff",
  initialAngle = 0,
  size = 0.15,
  book = {
    cover: "/placeholder.jpg",
    title: "深入理解计算机系统",
    link: "/books/csapp"
  }
}: {
  orbitRadius: number
  orbitSpeed: number
  color?: string
  initialAngle?: number
  size?: number
  book?: {
    cover: string
    title: string
    link: string
  }
}) {
  const [hovered, setHovered] = useState(false)
  const meshRef = useRef<THREE.Mesh>(null)
  const groupRef = useRef<THREE.Group>(null)

  // 使用 useEffect 来控制鼠标样式
  useEffect(() => {
    document.body.style.cursor = hovered ? "pointer" : "auto"
    return () => {
      document.body.style.cursor = "auto"
    }
  }, [hovered])

  useFrame((state) => {
    if (groupRef.current) {
      // 轨道旋转
      groupRef.current.rotation.y = state.clock.elapsedTime * orbitSpeed + initialAngle
    }

    if (meshRef.current) {
      // 卫星自转
      meshRef.current.rotation.x += 0.02
      meshRef.current.rotation.z += 0.01

      // 轻微的上下漂浮
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 3) * 0.1
    }
  })

  return (
    <group ref={groupRef}>
      <group position={[orbitRadius, 0, 0]}>
        <mesh 
          ref={meshRef}
          onPointerOver={() => setHovered(true)}
          onPointerOut={() => setHovered(false)}
          onClick={() => window.location.href = book.link}
        >
          {/* 卫星球体 */}
          <sphereGeometry args={[size, 64, 64]} />
          <meshStandardMaterial
            color={color}
            emissive={color}
            emissiveIntensity={0.3}
            metalness={0.7}
            roughness={0.4}
          />

          {/* 网格线纹路 */}
          <mesh>
            <sphereGeometry args={[size + 0.001, 16, 16]} />
            <meshBasicMaterial color="#888888" transparent opacity={0.3} wireframe={true} />
          </mesh>
        </mesh>

        {/* 悬浮卡片 */}
        {hovered && (
          <Html position={[0, size + 0.5, 0]} center distanceFactor={10}>
            <div className="relative flex flex-col rounded-xl bg-black/80 bg-clip-border text-gray-100 shadow-md transform transition-all duration-300 hover:scale-105 w-64"> 
              <div className="relative mx-4 -mt-6 h-40 overflow-hidden rounded-xl bg-gray-800 bg-clip-border text-white shadow-lg shadow-gray-800/40">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-full object-cover"
                />
              </div> 
              <div className="p-4"> 
                <h5 className="text-center font-sans text-lg font-semibold leading-snug tracking-normal text-gray-100 antialiased"> 
                  {book.title}
                </h5> 
              </div> 
            </div>
          </Html>
        )}
      </group>
    </group>
  )
}

// 轨道线组件
function OrbitRing({ radius }: { radius: number }) {
  const ringRef = useRef<THREE.Mesh>(null)

  useFrame(() => {
    if (ringRef.current) {
      ringRef.current.rotation.z += 0.001
    }
  })

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 2, 0, 0]}>
      <ringGeometry args={[radius - 0.01, radius + 0.01, 128]} />
      <meshBasicMaterial color="#ffffff" transparent opacity={0.3} side={2} />
    </mesh>
  )
}

// 中心核心
function CentralCore() {
  const meshRef = useRef<THREE.Mesh>(null)
  const ringsRef = useRef<THREE.Group>(null)

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01
      meshRef.current.position.y = Math.sin(state.clock.elapsedTime * 0.8) * 0.05
    }

    if (ringsRef.current) {
      ringsRef.current.rotation.x += 0.005
      ringsRef.current.rotation.z += 0.003
    }
  })

  return (
    <group>
      {/* 中心球体 */}
      <mesh ref={meshRef}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#0a0a0a"
          emissive="#00ffff"
          emissiveIntensity={0.2}
          metalness={0.9}
          roughness={0.1}
        />
      </mesh>

      {/* 旋转环 */}  
      <group ref={ringsRef}>
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[0.8, 0.03, 16, 100]} />
          <meshStandardMaterial color="#00ffff" emissive="#00ffff" emissiveIntensity={0.4} transparent opacity={0.8} />
        </mesh>

        <mesh rotation={[0, 0, Math.PI / 2]}>
          <torusGeometry args={[0.9, 0.02, 16, 100]} />
          <meshStandardMaterial color="#ff6b6b" emissive="#ff6b6b" emissiveIntensity={0.3} transparent opacity={0.6} />
        </mesh>

        <mesh rotation={[Math.PI / 4, Math.PI / 4, 0]}>
          <torusGeometry args={[1.0, 0.015, 16, 100]} />
          <meshStandardMaterial color="#4ecdc4" emissive="#4ecdc4" emissiveIntensity={0.2} transparent opacity={0.4} />
        </mesh>

        <mesh rotation={[Math.PI / 3, Math.PI / 6, Math.PI / 4]}>
          <torusGeometry args={[1.15, 0.008, 16, 100]} />
          <meshStandardMaterial color="#ffd700" emissive="#ffd700" emissiveIntensity={0.6} transparent opacity={0.9} />
        </mesh>
      </group>
    </group>
  )
}

// 导出场景组件
export function UniverseScene() {
  return (
    <>
      <CentralCore />
      
      {/* 添加多个轨道和卫星 */}
      <OrbitRing radius={2} />
      <Satellite 
        orbitRadius={2} 
        orbitSpeed={0.5} 
        color="#ffffff" 
        initialAngle={0} 
        book={{
          cover: "/书籍-人性的弱点.jpeg",
          title: "人性的弱点",
          link: "/books/csapp"
        }}
      />
      
      <OrbitRing radius={3} />
      <Satellite 
        orbitRadius={3} 
        orbitSpeed={0.3} 
        color="#ffffff" 
        initialAngle={Math.PI / 2} 
        book={{
          cover: "书籍-Feel-Good-Productivity.jpeg",
          title: "Feel Good Productivity",
          link: "/books/js-pro"
        }}
      />
      
      <OrbitRing radius={4} />
      <Satellite 
        orbitRadius={4} 
        orbitSpeed={0.2} 
        color="#ffffff" 
        initialAngle={Math.PI} 
        book={{
          cover: "/placeholder.jpg",
          title: "算法导论",
          link: "/books/algorithms"
        }}
      />
      
      <OrbitRing radius={5} />
      <Satellite 
        orbitRadius={5} 
        orbitSpeed={0.15} 
        color="#ffffff" 
        initialAngle={Math.PI * 1.5} 
        book={{
          cover: "/placeholder.jpg",
          title: "设计模式",
          link: "/books/design-patterns"
        }}
      />
    </>
  )
}