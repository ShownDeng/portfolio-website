import Link from "next/link"
import { Github, Mail, Linkedin, Award, BookOpen } from "lucide-react"
import TestimonialCarousel from "@/components/testimonial-carousel"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import { FadeIn } from "@/components/ui/motion"
import { Typewriter } from "@/components/ui/typewriter"
import HamsterAnimation from "@/components/hamster-animation"
import SkillGrowthChart from "@/components/skill-growth-chart"
export default function Home() {
  return (
    <div className="min-h-screen bg-black text-gray-300 flex flex-col">
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
                      <Typewriter text="Hi, I'm Shown👋" delay={150} />
                    </h1>

                <FadeIn direction="up" delay={0.6}>
                  <div className="flex flex-wrap gap-2 my-4">
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      #Shown
                    </Badge>
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      #Zhixuan Deng
                    </Badge>
                    <Badge variant="outline" className="bg-transparent text-gray-400 hover:text-gray-300">
                      #邓志轩
                    </Badge>
                  </div>
                </FadeIn>

                <FadeIn direction="up" delay={0.8}>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    I&apos;m an undergraduate student at the University of Shenzhen, where I'm majoring in Clinical Medicine with a keen interest in the intersection of Bioinformatics and Artificial Intelligence. My passion for these fields drives me to explore innovative applications that can enhance medical research and patient care. I'm actively seeking opportunities to deepen my understanding of how cutting-edge technologies can be leveraged to advance healthcare solutions.
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
                  <div className="h-6 w-6 flex items-center justify-center text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                  </div>
                  <h2 className="text-2xl font-mono text-gray-200">About Me</h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FadeIn direction="up" delay={0.3}>
                    <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="h-8 w-8 mr-3 flex items-center justify-center text-blue-400 bg-blue-400/10 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
                        </div>
                        <h3 className="text-xl font-mono text-gray-100">Personal Info</h3>
                      </div>
                      <p className="text-base text-gray-400 leading-relaxed">
                        You can call me Shown.
                      </p>
                    </div>
                  </FadeIn>

                  <FadeIn direction="up" delay={0.4}>
                    <div className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl p-6 hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-purple-500/10 transform hover:-translate-y-1">
                      <div className="flex items-center mb-4">
                        <div className="h-8 w-8 mr-3 flex items-center justify-center text-purple-400 bg-purple-400/10 rounded-lg">
                          <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                        </div>
                        <h3 className="text-xl font-mono text-gray-100">Location</h3>
                      </div>
                      <p className="text-base text-gray-400 leading-relaxed">
                        SZU, ShenZhen, China
                      </p>
                    </div>
                  </FadeIn>
                </div>

                <div className="flex items-center space-x-3 mb-6 mt-12">
                  <div className="h-6 w-6 flex items-center justify-center text-gray-200">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 8v4l3 3"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  </div>
                  <h2 className="text-2xl font-mono text-gray-200">Some Quotes</h2>
                </div>

                <FadeIn direction="up" delay={0.8}>
                  <TestimonialCarousel
                    testimonials={[
                      {
                        quote: "Stop waiting for the time right,just make the time right.",
                        name: "Make opportunities come for you",
                        designation: "Opportunities",
                        image: "/微信图片1.jpg"
                      },
                      {
                        quote: "But don't take criticism from people you would't take advice from.",
                        name: "Criticism is a Good Teacher",
                        designation: "Criticism",
                        image: "/微信图片2.jpg"
                      },
                      {
                        quote: "By adding a side quest to your day, you create space for curiosity, exploration and playfulness and you could discover something amazing and totally unexpected along the way.",
                        name: "Make your life interesting",
                        designation: "seek fun in the life ",
                        image: "/微信图片3.jpg"
                      }
                    ]}
                    autoplay={true}
                    duration={5000}
                    className="bg-white/5 backdrop-blur-sm border-white/10 rounded-2xl hover:border-white/20 transition-all duration-300 hover:shadow-xl hover:shadow-green-500/10 transform hover:-translate-y-1"
                  />
                </FadeIn>
              </div>
            </FadeIn>
          </div>
        </div>
        </div>
        <FadeIn direction="up" delay={0.5}>
          <div className="pt-16 pb-12">
            <div className="flex items-center space-x-3 mb-6">
              <div className="h-6 w-6 flex items-center justify-center text-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <h2 className="text-2xl font-mono text-gray-200">Improving</h2>
            </div>
            
            <div className="w-full">
              <SkillGrowthChart />
            </div>
          </div>
        </FadeIn>
      </main>
      <HamsterAnimation />
    </div>
  )
}

