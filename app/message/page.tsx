import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send } from "lucide-react"
import Navbar from "@/components/navbar"

export default function MessagePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-gray-300 flex flex-col">
      <Navbar />

      <main className="container mx-auto flex-grow px-4 py-8">
        <div className="max-w-3xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="text-4xl md:text-5xl font-mono text-gray-100 mb-4">Get in Touch</h1>
            <p className="text-gray-400 max-w-2xl mx-auto">
              Have a question or want to work together? Feel free to send me a message.
            </p>
          </div>

          <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20">
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <MessageSquare className="h-5 w-5 text-gray-400" />
                <CardTitle className="text-gray-100">Send a Message</CardTitle>
              </div>
              <CardDescription className="text-gray-400">
                Fill out the form below and I'll get back to you as soon as possible.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm text-gray-400">
                      Name
                    </label>
                    <Input id="name" placeholder="Your name" className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm text-gray-400">
                      Email
                    </label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Your email"
                      className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm text-gray-400">
                    Subject
                  </label>
                  <Input
                    id="subject"
                    placeholder="Subject of your message"
                    className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10"
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm text-gray-400">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    placeholder="Your message"
                    rows={6}
                    className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 resize-none rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10"
                  />
                </div>
              </form>
            </CardContent>
            <CardFooter>
              <Button className="w-full gap-2 rounded-[9px] bg-[#d5f365] text-black hover:shadow-[7px_5px_56px_-14px_#C3D900] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#C3D900] transition-all duration-400 py-4 px-8">
                <Send className="h-4 w-4" />
                Send Message
              </Button>
            </CardFooter>
          </Card>

          <div className="mt-12 grid md:grid-cols-2 gap-6">
            <Card className="bg-white/5 backdrop-blur-sm border-white/10 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-xl hover:shadow-blue-500/10 hover:border-white/20">
              <CardHeader>
                <CardTitle className="text-gray-100 text-lg">Email</CardTitle>
              </CardHeader>
              <CardContent className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-gray-400" />
                <a href="mailto:example@example.com" className="text-gray-400 hover:text-white transition-colors">
                  example@example.com
                </a>
              </CardContent>
            </Card>
            <Card className="bg-zinc-900/50 border-zinc-800 rounded-xl overflow-hidden transform transition-all duration-300 hover:shadow-lg hover:shadow-zinc-800/50 hover:border-zinc-700">
              <CardHeader>
                <CardTitle className="text-gray-100 text-lg">Social Media</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-400">You can also reach me on LinkedIn, GitHub, or Twitter.</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
    </div>
  )
}

