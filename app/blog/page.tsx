import Image from "next/image"
import Link from "next/link"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

export default function BlogPage() {
  const blogPosts = [
    {
      id: 1,
      title: "Building a Portfolio with Next.js",
      excerpt: "Learn how to create a modern portfolio website using Next.js and Tailwind CSS.",
      date: "March 10, 2025",
      category: "Web Development",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 2,
      title: "The Power of React Server Components",
      excerpt: "Exploring the benefits and use cases of React Server Components in modern web applications.",
      date: "February 28, 2025",
      category: "React",
      image: "/placeholder.svg?height=200&width=400",
    },
    {
      id: 3,
      title: "CSS Animation Techniques",
      excerpt: "A deep dive into advanced CSS animation techniques for creating engaging user interfaces.",
      date: "February 15, 2025",
      category: "CSS",
      image: "/placeholder.svg?height=200&width=400",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-mono text-gray-100 mb-4">Blog</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Thoughts, tutorials, and insights about programming, design, and technology.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Card key={post.id} className="bg-zinc-900/50 border-zinc-800 overflow-hidden rounded-xl transform transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-zinc-800/50 hover:border-zinc-700">
                <div className="aspect-video relative rounded-t-xl overflow-hidden">
                  <Image src={post.image || "/placeholder.svg"} alt={post.title} fill className="object-cover" />
                </div>
                <CardHeader>
                  <div className="flex justify-between items-center mb-2">
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      {post.category}
                    </Badge>
                    <div className="flex items-center text-gray-500 text-xs">
                      <Calendar className="h-3 w-3 mr-1" />
                      {post.date}
                    </div>
                  </div>
                  <CardTitle className="text-gray-100">{post.title}</CardTitle>
                  <CardDescription className="text-gray-400">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Link href={`/blog/${post.id}`} className="text-sm text-gray-400 hover:text-white transition-colors">
                    Read more →
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

