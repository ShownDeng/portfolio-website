import Image from "next/image"
import { Calendar } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

type BlogPost = {
  id: number
  title: string
  excerpt: string
  date: string
  category: string
  image: string
  content?: string
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "Building a Portfolio with Next.js",
    excerpt: "Learn how to create a modern portfolio website using Next.js and Tailwind CSS.",
    date: "March 10, 2025",
    category: "Web Development",
    image: "/placeholder.svg?height=200&width=400",
    content: `
      Building a portfolio website is an essential step for showcasing your work and skills to potential clients or employers. In this article, we'll explore how to create a modern portfolio website using Next.js and Tailwind CSS.

      Next.js is a powerful React framework that provides features like server-side rendering, static site generation, and automatic code splitting. Combined with Tailwind CSS, you can quickly build beautiful and responsive user interfaces.

      We'll cover topics such as:
      - Setting up a Next.js project
      - Implementing responsive layouts with Tailwind CSS
      - Creating reusable components
      - Adding animations and transitions
      - Optimizing images and performance
      - Deploying your portfolio

      Stay tuned for the complete guide!
    `
  },
  {
    id: 2,
    title: "The Power of React Server Components",
    excerpt: "Exploring the benefits and use cases of React Server Components in modern web applications.",
    date: "February 28, 2025",
    category: "React",
    image: "/placeholder.svg?height=200&width=400",
    content: `
      React Server Components represent a paradigm shift in how we build React applications. They allow us to render components on the server while maintaining the interactivity and state management capabilities we love about React.

      In this article, we'll dive deep into:
      - Understanding Server Components vs. Client Components
      - Performance benefits and trade-offs
      - Real-world use cases and examples
      - Best practices for implementation
      - Integration with existing React applications

      Let's explore how Server Components can improve your application's performance and developer experience.
    `
  },
  {
    id: 3,
    title: "CSS Animation Techniques",
    excerpt: "A deep dive into advanced CSS animation techniques for creating engaging user interfaces.",
    date: "February 15, 2025",
    category: "CSS",
    image: "/placeholder.svg?height=200&width=400",
    content: `
      CSS animations can bring life to your web applications and create engaging user experiences. In this comprehensive guide, we'll explore various animation techniques using modern CSS.

      Topics covered:
      - Keyframe animations
      - Transitions and transforms
      - Performance optimization
      - Animation timing functions
      - Complex animation sequences
      - Cross-browser compatibility

      We'll also look at practical examples and best practices for implementing animations in your projects.
    `
  }
]

type Props = {
  params: {
    id: string
  }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString()
  }))
}

export default function BlogPost({ params }: Props) {
  const post = blogPosts.find((post) => post.id === parseInt(params.id))

  if (!post) {
    return (
      <div className="min-h-screen bg-black text-gray-300 flex flex-col">
        <Navbar />
        <main className="container mx-auto flex-grow px-4 py-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-mono text-gray-100 mb-4">Blog Post Not Found</h1>
            <p className="text-gray-400">The requested blog post could not be found.</p>
          </div>
        </main>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8">
        <article className="max-w-3xl mx-auto">
          <div className="aspect-video relative mb-8 rounded-lg overflow-hidden">
            <Image src={post.image} alt={post.title} fill className="object-cover" />
          </div>

          <Card className="bg-zinc-900/50 border-zinc-800">
            <CardHeader>
              <div className="flex justify-between items-center mb-4">
                <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                  {post.category}
                </Badge>
                <div className="flex items-center text-gray-500 text-sm">
                  <Calendar className="h-4 w-4 mr-2" />
                  {post.date}
                </div>
              </div>
              <CardTitle className="text-3xl md:text-4xl font-mono text-gray-100 mb-4">{post.title}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="prose prose-invert prose-gray max-w-none">
                {post.content?.split('\n').map((paragraph, index) => (
                  <p key={index} className="text-gray-400 mb-4 leading-relaxed">
                    {paragraph.trim()}
                  </p>
                ))}
              </div>
            </CardContent>
          </Card>
        </article>
      </main>
    </div>
  )
}