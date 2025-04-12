import Image from "next/image"
import Link from "next/link"
import { Github, ExternalLink } from "lucide-react"
import GradientButton from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"

export default function ProjectPage() {
  const projects = [
    {
      id: 1,
      title: "ACM Paper",
      description: "A paper about the concept of Operon and its application in the field of bioinformatics ",
      image: "/ACM论文.png",
      tags: ["ACM", "Operon", "Bioinformatics"],
      github: "https://dl.acm.org/doi/10.1145/3698587.3701427",
      demo: "https://example.com",
    },
    {
      id: 2,
      title: "E-commerce Platform",
      description: "A full-stack e-commerce application with product management and payment integration.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["React", "Node.js", "MongoDB", "Stripe"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "AI Image Generator",
      description: "An application that generates images using AI based on text prompts.",
      image: "/placeholder.svg?height=300&width=600",
      tags: ["Python", "TensorFlow", "React", "Flask"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ]

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-mono text-gray-100 mb-4">Projects</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A collection of my work, side projects, and open source contributions.
            </p>
          </div>

          <div className="grid gap-12">
            {projects.map((project) => (
              <Card key={project.id} className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="relative aspect-video md:aspect-auto">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover rounded-l-lg"
                    />
                  </div>
                  <div className="p-6">
                    <CardTitle className="text-2xl text-gray-100 mb-2">{project.title}</CardTitle>
                    <CardDescription className="text-gray-400 mb-4">{project.description}</CardDescription>

                    <div className="flex flex-wrap gap-2 mb-6">
                      {project.tags.map((tag, index) => (
                        <Badge key={index} variant="outline" className="bg-transparent text-gray-400">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <div className="flex justify-center">
                      {project.id === 1 ? (
                        <GradientButton href={project.github}>
                          <div className="flex items-center gap-2">
                            <Github className="h-4 w-4" />
                            View Paper
                          </div>
                        </GradientButton>
                      ) : (
                        <div className="flex space-x-4">
                          <Link href={project.github} target="_blank">
                            <Button variant="outline" size="sm" className="w-full gap-2 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/50">
                              <Github className="h-4 w-4" />
                              Code
                            </Button>
                          </Link>
                          <Link href={project.demo} target="_blank">
                            <Button variant="default" size="sm" className="w-full gap-2 rounded-lg transform transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/50">
                              <ExternalLink className="h-4 w-4" />
                              Live Demo
                            </Button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

