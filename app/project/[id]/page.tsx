import Image from "next/image"
import { Badge } from "@/components/ui/badge"
import { Card, CardDescription, CardTitle } from "@/components/ui/card"
import Navbar from "@/components/navbar"

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
    image: "/软著表面.jpeg",
    tags: ["Computer Software", "BACT_AG2.0", "Bacterial Genes evolution"],
    github: "https://github.com",
    demo: "https://example.com",
    details: {
      overview: "BACT_AG2.0 is an innovative bioinformatics software specifically designed for tracing the evolutionary history of bacterial genes. The software analyzes gene sequence data to automatically construct phylogenetic trees and provides detailed visualization results.It mainly relies on two original core algorithms, BP and MHB. Compared with version 1.0, BACT_AG2.0 has achieved fully automated, bottom-up ancestral genome resolution at each evolutionary node.",
      features: [
        "Automaticlly analysis of gene sequence data",
        "Construct phylogenetic trees and Provides detailed visualization",
        "Multiple sequence alignment functionality",
        "User-friendly interface",
        "Efficient data processing capabilities"
      ],
      technologies: [
        "Python",
        "Perl",
        "Mauve",
        "BACT_CG",
        ],
      impact: "The software significantly enhances the efficiency of bioinformatics research, providing researchers with a powerful tool to understand the evolutionary processes of bacterial genes."
    }
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

export default function ProjectDetail({ params }: { params: { id: string } }) {
  const project = projects.find(p => p.id === parseInt(params.id))

  if (!project) {
    return <div>Project not found</div>
  }

  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-5xl mx-auto">
          <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden">
            <div className="p-8">
              {'details' in project && project.details && (
                <div className="space-y-8">
                  <div>
                    <h3 className="text-xl text-gray-100 mb-3">Introduction</h3>
                    <CardDescription className="text-gray-400">
                      {project.details.overview}
                    </CardDescription>
                  </div>

                  <div className="relative w-full h-[400px] mb-8">
                    <Image
                      src="/BactAG详细图片.png"
                      alt={project.title}
                      fill
                      className="object-contain"
                    />
                  </div>

                  <div>
                    <h3 className="text-xl text-gray-100 mb-3">Main Function</h3>
                    <ul className="list-disc list-inside space-y-2">
                      {project.details.features.map((feature, index) => (
                        <li key={index} className="text-gray-400">{feature}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl text-gray-100 mb-3">Technologies</h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech, index) => (
                        <Badge key={index} variant="outline" className="bg-transparent text-gray-400">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl text-gray-100 mb-3">Impact</h3>
                    <CardDescription className="text-gray-400">
                      {project.details.impact}
                    </CardDescription>
                  </div>
                </div>
              )}
            </div>
          </Card>
        </div>
      </main>
    </div>
  )
}


export async function generateStaticParams() {
  return projects.map((project) => ({
    id: project.id.toString(),
  }))
}