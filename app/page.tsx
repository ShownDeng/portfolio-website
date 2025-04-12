import Link from "next/link"
import { Github, Mail, Linkedin, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import { FadeIn } from "@/components/ui/motion"
import { Typewriter } from "@/components/ui/typewriter"
import Loader from "@/components/ui/loader"

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
      <Loader />


      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8 flex flex-col">
        <div className="max-w-4xl mx-auto w-full"></div>
          <div className="flex flex-col md:flex-row items-start gap-8 mb-12">
            <FadeIn direction="left" delay={0.2}>
              <div className="flex flex-col items-center md:items-start">
                <Avatar className="h-32 w-32 mb-4 border-2 border-zinc-800 hover:border-zinc-600 transition-colors">
                  <AvatarImage
                    src="/微信图片_20240711224241.jpg"
                    alt="Profile"
                  />
                  <AvatarFallback>SD</AvatarFallback>
                </Avatar>
              </div>
            </FadeIn>

            <div className="flex-1">
              <div className="space-y-6">
                <FadeIn direction="up" delay={0.4}>
                  <div className="space-y-4">
                    <h1 className="text-4xl md:text-4xl font-mono font-bold text-gray-100 tracking-tight">
                      <Typewriter text="Hi, I'm Shown" delay={150} />
                    </h1>

                <FadeIn direction="up" delay={0.6}>
                  <div className="flex flex-wrap gap-2 my-4">
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      #Shown
                    </Badge>
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      #ShownDeng
                    </Badge>
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      #邓
                    </Badge>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.8}>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    I&apos;m an undergraduate student at the University of Shenzhen majoring in Clinical Medicine.
                    Passionate about developing applications.
                  </p>
                </FadeIn>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={1}>
              <div className="flex space-x-6">
                <Link href="https://linkedin.com" target="_blank" aria-label="LinkedIn" className="group">
                  <Linkedin className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link href="https://github.com" target="_blank" aria-label="GitHub" className="group">
                  <Github className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
                <Link href="mailto:example@example.com" aria-label="Email" className="group">
                  <Mail className="h-6 w-6 text-gray-400 group-hover:text-white transition-colors" />
                </Link>
              </div>
            </FadeIn>

            <FadeIn direction="up" delay={0.3}>
              <div className="pt-16">
                <div className="flex items-center space-x-3 mb-6">
                  <div className="h-6 w-6 flex items-center justify-center">
                    <span className="block h-3 w-3 rounded-sm border-2 border-gray-400"></span>
                  </div>
                  <h2 className="text-2xl font-mono text-gray-200">Recent Update</h2>
                </div>

                <FadeIn direction="up" delay={0.8}>
                  <div className="border border-zinc-800 rounded-lg p-6 bg-zinc-900/50 hover:border-zinc-700 transition-colors">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-10 w-10">
                          <AvatarImage
                            src="/微信图片_20240711224241.jpg"
                            alt="Profile"
                          />
                          <AvatarFallback>SD</AvatarFallback>
                        </Avatar>
                        <span className="text-base text-gray-300">Shown</span>
                      </div>
                      <div className="flex space-x-3">
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-white">
                          <Github className="h-5 w-5" />
                        </Button>
                        <Button variant="ghost" size="icon" className="h-8 w-8 hover:text-white">
                          <Bell className="h-5 w-5" />
                        </Button>
                      </div>
                    </div>
                    <p className="text-base text-gray-400 leading-relaxed">
                      Just launched my new portfolio website! Check it out and let me know what you think.
                    </p>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.3}>
                  <div className="mt-8 bg-zinc-900/50 border border-zinc-800 rounded-lg p-6 hover:border-zinc-700 transition-colors">
                    <h2 className="text-2xl font-mono text-gray-200 mb-6">About Me</h2>
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <span className="text-yellow-500 mr-3 text-lg">•</span>
                        <p className="text-base text-gray-400">You can call me Shown.</p>
                      </li>
                      <li className="flex items-start">
                        <span className="text-blue-500 mr-3 text-lg">•</span>
                        <p className="text-base text-gray-400">Current Location: Amherst, MA, US.</p>
                      </li>
                    </ul>
                  </div>
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
        </div>
      </main>
    </div>
  )
}

