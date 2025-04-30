import Image from "next/image"
import Link from "next/link"
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
    title: "Gene function enrichment analysis",
    excerpt: "Learn how to analysis through KEGG and GO.",
    date: "February 10, 2025",
    category: "Gene analysis Tools",
    image: "/知乎KEGG-GO.png",
    content: `
      This article introduces a free software called TBtools for conducting KEGG and GO enrichment analysis, which is useful for beginners. It provides a step-by-step guide on how to use TBtools for these analyses.

      It details about the process of downloading and installing TBtools and preparing protein sequence FASTA files from databases such as NCBI, Ensembl, or Uniprot. It also explains how to use eggNOG-mapper to analyze the FASTA files and receive results via email. Once the results are obtained,  importing them into TBtools for further analysis and visualization.

      TBtools is a powerful and open-source tool that simplifies the process of conducting KEGG and GO enrichment anaysis.It provides a user-friendly interface that makes it easy for users to perform these analyses quickly and efficiently.


    The tutorial covers:
        - Downloading and installing TBtools.
        - Preparing protein sequence FASTA files from databases like NCBI, Ensembl, or Uniprot.
        - Using eggNOG-mapper to analyze the FASTA files and receive results via email.
        - Importing the results into TBtools for further analysis.
        - Accessing additional files and resources through provided links.


      The article aims to help users perform KEGG and GO enrichment analysis efficiently using TBtools.
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
                    {post.id === 1 ? (
                      <>
                        {paragraph.includes("TBtools") ? (
                          <>
                            {paragraph.split("TBtools").map((part, i) => (
                              <>
                                {part}
                                {i < paragraph.split("TBtools").length - 1 && (
                                  <Link href="https://zhuanlan.zhihu.com/p/22933626991" className="text-blue-400 hover:text-blue-300">
                                    TBtools
                                  </Link>
                                )}
                              </>
                            ))}
                          </>
                        ) : (
                          paragraph.trim()
                        )}
                      </>
                    ) : (
                      paragraph.trim()
                    )}
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


export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id.toString(),
  }))
}