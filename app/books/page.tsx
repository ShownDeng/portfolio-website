"use client"

import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import GradientButton from "@/components/ui/gradient-button"
import ThreeDCard from "@/components/ui/3d-card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import Link from "next/link"

export default function BooksPage() {
  const books = [
    {
      id: "csapp",
      title: "人性的弱点",
      cover: "/书籍-人性的弱点.jpeg",
      author: "戴尔·卡耐基",
      description: "一本关于人际关系和自我提升的经典著作"
    },
    {
      id: "js-pro",
      title: "Feel Good Productivity",
      cover: "书籍-Feel-Good-Productivity.jpeg",
      author: "Ali Abdaal",
      description: "关于如何在享受过程中提高生产力的书籍"
    },
    {
      id: "algorithms",
      title: "算法导论",
      cover: "/placeholder.jpg",
      author: "Thomas H. Cormen等",
      description: "计算机算法领域的经典教材"
    },
    {
      id: "design-patterns",
      title: "设计模式",
      cover: "/placeholder.jpg",
      author: "Erich Gamma等",
      description: "软件设计模式的经典著作"
    }
  ]

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-mono text-gray-100 mb-4">我的书籍收藏</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              记录我读过的好书，分享阅读心得与感悟。
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-12">
        {books.map((book) => (
          <ThreeDCard key={book.id} containerClassName="w-[400px]">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-white/30 w-[400px] h-[600px] hover:scale-[1.02]">
               <div className="flex flex-col h-full">
                 <div className="relative w-[400px] h-[300px]">
                  <Image
                    src={book.cover}
                    alt={book.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col justify-between flex-grow">
                  <div>
                    <CardTitle className="text-xl text-gray-100 mb-2">{book.title}</CardTitle>
                    <CardDescription className="text-gray-400 mb-2">{book.author}</CardDescription>
                    <p className="text-gray-400 mb-4 line-clamp-2">{book.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      <Badge variant="outline" className="bg-transparent text-gray-400">
                        读书笔记
                      </Badge>
                    </div>
                  </div>
                  <div className="flex justify-center">
                    <GradientButton href={`/books/${book.id}`}>
                      <div className="flex items-center gap-2">
                        Read more
                      </div>
                    </GradientButton>
                  </div>
                </div>
              </div>
            </Card>
          </ThreeDCard>
        ))}
          </div>
          <div className="flex justify-center mt-12">
            <Link href="/universe" className="flex items-center gap-2 text-gray-400 hover:text-gray-200 transition-colors">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19l-7-7 7-7"/>
                <path d="M19 12H5"/>
              </svg>
              Return to Universe
            </Link>  {/* 返回宇宙 */}
          </div>
        </div>
      </main>
    </div>
  )
}