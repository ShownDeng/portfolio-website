"use client"

import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Mail, MessageSquare, Send, Loader2, CheckCircle, XCircle } from "lucide-react"
import Navbar from "@/components/navbar"

export default function MessagePage() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [visitorInfo, setVisitorInfo] = useState({
    ip: '获取中...',
    userAgent: '',
    href: '',
    screen: '',
    timeZone: ''
  });

  useEffect(() => {
    const getVisitorInfo = async () => {
      let ip = '获取失败';
      try {
        const response = await fetch('https://api.ipify.org?format=json');
        if (response.ok) {
          const data = await response.json();
          ip = data.ip;
        }
      } catch (error) {
        console.error("Failed to fetch IP address:", error);
      }

      setVisitorInfo({
        ip,
        userAgent: navigator.userAgent,
        href: window.location.href,
        screen: `${window.screen.width}x${window.screen.height}`,
        timeZone: Intl.DateTimeFormat().resolvedOptions().timeZone
      });
    };

    getVisitorInfo();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormState(prev => ({ ...prev, [id]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    console.log('Form submission started...');
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const enhancedMessage = `
${formState.message}

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
📊 访客信息
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
🕐 提交时间: ${new Date().toLocaleString('zh-CN')}
🌐 用户IP: ${visitorInfo.ip}
💻 浏览器: ${visitorInfo.userAgent}
📄 来源页面: ${visitorInfo.href}
🔍 屏幕分辨率: ${visitorInfo.screen}
🌍 时区: ${visitorInfo.timeZone}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

    const formData = new FormData();
    formData.append('form-name', 'contact-message');
    formData.append('name', formState.name);
    formData.append('email', formState.email);
    formData.append('subject', formState.subject);
    formData.append('message', enhancedMessage);
    formData.append('visitor_info', JSON.stringify(visitorInfo));

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams(formData as any).toString(),
      });

      if (response.ok) {
        setSubmitStatus('success');
        setFormState({ name: '', email: '', subject: '', message: '' });
        setTimeout(() => setSubmitStatus('idle'), 3000);
      } else {
        setSubmitStatus('error');
        setTimeout(() => setSubmitStatus('idle'), 3000);
      }
    } catch (error) {
      console.error('Form submission error:', error);
      setSubmitStatus('error');
      setTimeout(() => setSubmitStatus('idle'), 3000);
    } finally {
      setIsSubmitting(false);
    }
  };
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
            <form id="contact-message" name="contact-message" method="POST" data-netlify="true" onSubmit={handleSubmit}>
              <CardContent>
                <div className="space-y-4">
                  <input type="hidden" name="form-name" value="contact-message" />
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm text-gray-400">Name</label>
                      <Input id="name" placeholder="Your name" value={formState.name} onChange={handleInputChange} required className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10" />
                    </div>
                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm text-gray-400">Email</label>
                      <Input id="email" type="email" placeholder="Your email" value={formState.email} onChange={handleInputChange} required className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="subject" className="text-sm text-gray-400">Subject</label>
                    <Input id="subject" placeholder="Subject of your message" value={formState.subject} onChange={handleInputChange} required className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10" />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="message" className="text-sm text-gray-400">Message</label>
                    <Textarea id="message" placeholder="Your message" rows={6} value={formState.message} onChange={handleInputChange} required className="bg-white/5 backdrop-blur-sm border-white/10 text-gray-200 resize-none rounded-lg transition-all duration-300 focus:bg-white/10 focus:border-white/20 hover:bg-white/10" />
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex-col items-stretch">
                <Button type="submit" disabled={isSubmitting} className="w-full gap-2 rounded-[9px] bg-[#d5f365] text-black hover:shadow-[7px_5px_56px_-14px_#C3D900] active:scale-[0.97] active:shadow-[7px_5px_56px_-10px_#C3D900] transition-all duration-400 py-4 px-8">
                  {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
                {submitStatus === 'success' && (
                  <div className="mt-4 text-center text-green-400 flex items-center justify-center gap-2">
                    <CheckCircle className="h-5 w-5" />
                    <span>send message successfully!</span>  
                  </div>
                )}
                {submitStatus === 'error' && (
                  <div className="mt-4 text-center text-red-400 flex items-center justify-center gap-2">
                    <XCircle className="h-5 w-5" />
                    <span>send message failed! </span>
                  </div>
                )}
              </CardFooter>
            </form>
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

