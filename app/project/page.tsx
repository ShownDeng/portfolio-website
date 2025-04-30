import Image from "next/image"
import Link from "next/link"
import { ExternalLink, Github } from "lucide-react"
import GradientButton from "@/components/ui/gradient-button"
import { Button } from "@/components/ui/button"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import ThreeDCard from "@/components/ui/3d-card"

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
      title: "Computer Software Copyright",
      description: "An automated program for retracing the evolutionary history of bacterial genes.",
      image: "/屏幕截图.jpeg",
      tags: ["Computer Software", "BACT_AG2.0", "Bacterial Genes evolution"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      id: 3,
      title: "Stay tuned for more updates!",
      description: "Work in progress...",
      image: "/mindshare.png",
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

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12 max-w-4xl mx-auto">
            {projects.map((project) => (
              <ThreeDCard key={project.id} containerClassName="w-full">
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/20 hover:border-white/30 w-full h-[500px] hover:scale-[1.02]">
                <div className="flex flex-col h-full">
                  <div className="relative w-full h-[250px]">
                    <Image
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <CardTitle className="text-xl text-gray-100 mb-2">{project.title}</CardTitle>
                      <CardDescription className="text-gray-400 mb-4 line-clamp-2">{project.description}</CardDescription>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tags.map((tag, index) => (
                          <Badge key={index} variant="outline" className="bg-transparent text-gray-400">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </div>
                    <div className="flex justify-center">
                      <GradientButton href={project.id === 1 ? project.github : project.id === 2 ? `/project/${project.id}` : project.github}>
                        <div className="flex items-center gap-2">
                          <Image src="/rocket-lunch.svg" alt="rocket" width={16} height={16} />
                          {project.id === 1 ? 'View Paper' : project.id === 2 ? 'View Details' : 'View Project'}
                        </div>
                      </GradientButton>
                    </div>
                  </div>
                </div>
                </Card>
              </ThreeDCard>
            ))}
          </div>
        </div>
      </main>
    </div>
  )
}

